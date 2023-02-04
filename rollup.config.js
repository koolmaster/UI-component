import { babel } from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import url from '@rollup/plugin-url';
import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import visualizer from 'rollup-plugin-visualizer';

const config = {
  input: [],
  output: [
    {
      dir: 'lib',
      format: 'cjs',
      sourcemap: true,
    },
    {
      dir: 'lib/es',
      format: 'es',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'src',
    },
  ],
  onwarn: function (warning) {
    // Skip certain warnings

    // should intercept ... but doesn't in some rollup versions
    if (warning.code === 'THIS_IS_UNDEFINED') {
      return;
    }

    // console.warn everything else
    console.warn(warning.message);
  },
  plugins: [
    babel({
      babelHelpers: 'bundled',
    }),
    url(),
    commonjs(),
    resolve(),
    filesize(),
    peerDepsExternal(),
  ].concat(process.env.VISUALIZER ? [visualizer({ sourcemap: true, filename: 'docs/stats.html' })] : []),
};

function createConfig(filename) {
  config.input.push(filename);
  return config;
}

export default ['src/index.js', 'src/animations.js', 'src/library.js'].map(createConfig);
