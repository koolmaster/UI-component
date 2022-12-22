const cp = require('child_process');
const { join } = require('path');
const fs = require('fs-extra');

const log = (...args) => console.log('[Release] -', ...args);

function getCacheDir() {
  return join(process.cwd(), '.cache');
}

function createCacheDir() {
  fs.mkdirSync(getCacheDir());
}
function ProcessError(code, message, cmd) {
  const { callee } = arguments;
  Error.apply(this, [message]);
  Error.captureStackTrace(this, callee);
  this.code = code;
  this.message = message;
  this.name = callee.name;
  this.cmd = JSON.stringify(cmd || {});
}

async function spawn(exe, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = cp.spawn(exe, args, { cwd: cwd || process.cwd() });

    const buffer = [];

    child.stderr.on('data', (chunk) => {
      buffer.push(chunk.toString());
    });
    child.stdout.on('data', (chunk) => {
      buffer.push(chunk.toString());
    });
    child.on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
    child.on('close', (code) => {
      const output = buffer.join('');
      if (code) {
        const msg = output || `Process failed: ${code}`;
        reject(new ProcessError(code, msg, { exe, args, cwd }));
      } else {
        resolve(output);
      }
    });
  });
}

async function execGit() {
  // eslint-disable-next-line prefer-rest-params
  return spawn('git', [...arguments], getCacheDir());
}

function clean() {
  return fs.removeSync(getCacheDir());
}

function reset(remote, branch) {}

async function publish(remote = 'origin', version = '') {
  if (!version) {
    throw new Error('Branch must be provided');
  }

  const buildBranch = 'master';
  const releaseBranch = `release-${version}`;
  const remoteBranchRef = `${remote}/${releaseBranch}`;
  let output = '';

  createCacheDir();

  // First checkout a new worktree branch from master into .cache dir
  await execGit('worktree', 'add', '-f', '--detach', getCacheDir());

  // First check if branch is available in remote repository
  await execGit('fetch');
  await execGit('ls-remote', '--exit-code', '.', remoteBranchRef).then(
    () => {
      // branch is exist on remote, checkout and pull
      return execGit('checkout', releaseBranch)
        .then(() => execGit('pull', remote, releaseBranch))
        .then(() => reset(remote, releaseBranch));
    },
    (error) => {
      if (error instanceof ProcessError && error.code === 2) {
        // branch doesn't exist, create an orphan
        return execGit('checkout', '--orphan', releaseBranch).then(
          () => {},
          () => {
            // If branch is exist, remove it and checkout
            return execGit('branch', '-D', releaseBranch).then(() => execGit('checkout', '--orphan', releaseBranch));
          }
        );
      }
      throw error;
    }
  );

  await execGit('rm', '--cached', '-r', '.');

  fs.removeSync(join(getCacheDir(), '.gitignore'));

  // Copy built items into cache folder
  ['lib', 'docs', 'src', 'package.json'].forEach((item) => {
    fs.copySync(item, join(getCacheDir(), item));
  });

  // Stagging changes
  await execGit('add', 'lib', 'docs', 'src', 'package.json');

  await execGit('commit', '--no-verify', '-m', `release-${version}`);

  // Tagging release
  await execGit('tag', '-a', version, '-m', `Release ${version}`).catch(() => {
    return execGit('tag', '-d', version).then(() => execGit('tag', '-a', version, '-m', `Release ${version}`));
  });

  await execGit('push', '-f', '--no-verify', remote, version);

  // Clean cache folder after success
  clean();
}

let version = process.argv[2];
if (!version) {
  // Get version from package json
  // eslint-disable-next-line global-require
  const pkg = require('../package.json');
  version = pkg.version;
}

publish('origin', version)
  .then(() => {
    log(`Version ${version} released success, please checkout tag "${version}" `);
  })
  .catch((err) => {
    console.error(err);
    // Clear cache
    clean();
  });
