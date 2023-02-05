/**
 *
 * @param {import('plop').NodePlopAPI} plop general Plop API
 */

module.exports = function (plop) {
  plop.setGenerator('styled-component', {
    description: 'Generate React styled component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Input component name',
      },
      {
        type: 'list',
        name: 'platform',
        message: 'Choose platform',
        choices: ['animations', 'library'],
      },
      {
        type: 'input',
        name: 'componentPath',
        message: 'Input component path (optional)',
        default: '',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/{{platform}}/{{componentPath}}/{{kebabCase componentName}}/{{pascalCase componentName}}.js',
        templateFile: 'plop-templates/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/{{platform}}/{{componentPath}}/{{kebabCase componentName}}/{{pascalCase componentName}}.stories.js',
        templateFile: 'plop-templates/Component.stories.hbs',
      },
      {
        type: 'add',
        path: 'src/{{platform}}/{{componentPath}}/{{kebabCase componentName}}/{{pascalCase componentName}}.spec.js',
        templateFile: 'plop-templates/Component.spec.hbs',
      },
      {
        type: 'add',
        path: 'src/{{platform}}/{{componentPath}}/{{kebabCase componentName}}/index.js',
        template: "export { default } from './{{pascalCase componentName}}';\n",
      },
      {
        type: 'add',
        path: 'src/{{platform}}/{{componentPath}}/{{kebabCase componentName}}/styles.js',
        templateFile: 'plop-templates/styles.hbs',
      },
      {
        type: 'append',
        path: 'src/{{platform}}.js',
        template:
          "export { default as {{pascalCase componentName}} } from './{{platform}}/{{#if componentPath}}{{componentPath}}/{{/if}}{{kebabCase componentName}}';\n",
      },
    ],
  });
};
