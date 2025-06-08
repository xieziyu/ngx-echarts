// eslint.config.js
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import angularEslint from '@angular-eslint/eslint-plugin';
import angularTemplateEslint from '@angular-eslint/eslint-plugin-template';
import angularTemplateParser from '@angular-eslint/template-parser';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    ignores: [
      'scripts/convert.js',
    ],
  },
  // Override 1: *.ts files with angular-eslint + process-inline-templates + prettier
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: '2022',
        sourceType: 'module',
        project: true,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@angular-eslint': angularEslint,
      'prettier': prettierPlugin,
    },
    processor: angularTemplateEslint.processors['extract-inline-html'],
    rules: {
      // Rules from plugin:@angular-eslint/recommended
      ...(angularEslint.configs?.recommended?.rules || {}),

      // Rules from plugin:prettier/recommended
      ...(prettierPlugin.configs?.recommended?.rules || {}),

      // Custom rules (override defaults)
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: ['app', 'echarts'],
          style: 'camelCase'
        }
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: ['app', 'echarts'],
          style: 'kebab-case'
        }
      ],
      // disable until standalone components are fully supported
      '@angular-eslint/prefer-standalone': 'off',
    }
  },

  // Override 2: *.html files with angular-eslint template only
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser,
    },
    plugins: {
      '@angular-eslint/template': angularTemplateEslint,
    },
    rules: {
      // Rules from plugin:@angular-eslint/template/recommended
      ...(angularTemplateEslint.configs?.recommended?.rules || {}),
    }
  },

  // Override 3: *.html files with prettier only (excluding inline templates)
  {
    files: ['**/*.html'],
    ignores: ['*inline-template-*.component.html'],
    plugins: {
      'prettier': prettierPlugin,
    },
    rules: {
      // Rules from plugin:prettier/recommended
      ...(prettierPlugin.configs?.recommended?.rules || {}),

      // Custom prettier rule with angular parser (override default)
      'prettier/prettier': ['error', { parser: 'angular' }],
    }
  },

  // Apply prettier config to disable conflicting rules
  prettierConfig,
];
