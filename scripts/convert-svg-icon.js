const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const svgr = require('@svgr/core').default;
const prettier = require('prettier');
const prettierConfig = require('../.prettierrc.js');

_.mixin({ pascalCase: _.flow(_.camelCase, _.upperFirst) });

const svgFile = process.argv[2];

function panic(stage, err) {
  console.error(stage, err);
  process.exit(1);
}

function debug() {
  console.log.call(console, ...arguments);
}

function convertSvgToReactComponent(input) {
  const lastOutput = input.replace('svg', 'js');
  fs.readFile(input, (err, data) => {
    if (err) {
      return panic('readfile', err);
    }

    const svgCode = data.toString();
    const { name } = path.parse(lastOutput);
    svgr(svgCode, { icon: true, ref: true }, { componentName: _.pascalCase(name) }).then((jsCode) => {
      jsCode = prettier.format(jsCode, { ...prettierConfig, parser: 'babel' });
      fs.writeFile(lastOutput, jsCode, (writeErr) => {
        if (err) {
          return panic('writefile', writeErr);
        }
        debug('Write file success!');
      });
    });
  });
}

convertSvgToReactComponent(svgFile);
