module.exports = {
    "parser": "babel-eslint",
    "plugins": ["react", "react-hooks", "prettier", "babel", "jest"],
    "settings": {
      "react": {
        "version": "17.0"
      }
    },
    "extends": ["eslint:recommended", "plugin:prettier/recommended"],
    "env": {
      "browser": true,
      "mocha": true,
      "jest": true,
      "node": true,
      "es5": true
    },
    "globals": {
      "expect": true,
      "JSX": true
    },
    "parserOptions": {
      "ecmaFeatures": {
        "arrowFunctions": true,
        "binaryLiterals": true,
        "blockBindings": true,
        "classes": true,
        "defaultParams": false,
        "destructuring": true,
        "forOf": false,
        "generators": false,
        "modules": true,
        "objectLiteralComputedProperties": true,
        "objectLiteralDuplicateProperties": false,
        "objectLiteralShorthandMethods": true,
        "objectLiteralShorthandProperties": true,
        "octalLiterals": false,
        "regexUFlag": false,
        "regexYFlag": false,
        "restParams": true,
        "spread": true,
        "superInFunctions": false,
        "templateStrings": true,
        "unicodeCodePointEscapes": false,
        "globalReturn": false,
        "jsx": true
      }
    },
    "rules": {
      'prettier/prettier': [
        'error',
        // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
        // https://prettier.io/docs/en/options.html
        {
          singleQuote: true,
          semi: false,
          useTabs: true,
          tabWidth: 2,
          trailingComma: 'es5',
          printWidth: 80,
          bracketSpacing: true,
          arrowParens: 'avoid',
          singleline: 'never',
          multiline: 'always',
          bracketSameLine: false,
        },
      ],
      "func-style": 0,
      "func-names": 0,
      "arrow-parens": 0,
      "no-cond-assign": 2,
      "no-console": [
        "error",
        {
          "allow": ["error", "warn"]
        }
      ],
      "no-constant-condition": 2,
      "no-control-regex": 2,
      "no-debugger": 2,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty-character-class": 2,
      "no-empty": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-extra-parens": 0,
      "no-func-assign": 2,
      "no-inner-declarations": [2, "both"],
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-negated-in-lhs": 2,
      "no-obj-calls": 2,
      "no-regex-spaces": 2,
      "no-sparse-arrays": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-jsdoc": 0,
      "valid-typeof": 2,
      "accessor-pairs": 2,
      "block-scoped-var": 2,
      "complexity": 0,
      "consistent-return": 0,
      "curly": 2,
      "default-case": 0,
      "dot-notation": 2,
      "eqeqeq": 2,
      "no-alert": 2,
      "no-caller": 2,
      "no-case-declarations": 2,
      "no-div-regex": 2,
      "no-else-return": 2,
      "no-labels": 2,
      "no-empty-pattern": 2,
      "no-eq-null": 2,
      "no-eval": 2,
      "no-extend-native": 2,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-implicit-coercion": 0,
      "no-implied-eval": 2,
      "no-iterator": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 2,
      "no-magic-numbers": [
        0,
        {
          "ignore": [-1, 0, 1, 2]
        }
      ],
      "no-multi-str": 2,
      "no-native-reassign": 2,
      "no-new-func": 2,
      "no-new-wrappers": 2,
      "no-new": 2,
      "no-octal-escape": 2,
      "no-octal": 2,
      "no-proto": 2,
      "no-redeclare": 2,
      "no-script-url": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unused-expressions": 2,
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-useless-escape": "off",
      "no-void": 2,
      "no-warning-comments": 0,
      "no-with": 2,
      "radix": 2,
      "vars-on-top": 2,
      "strict": [2, "never"],
      "init-declarations": 0,
      "no-catch-shadow": 2,
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow-restricted-names": 2,
      "no-shadow": 0,
      "no-undef-init": 2,
      "no-undef": 2,
      "no-unused-vars": [
        2,
        {
          "args": "after-used",
          "argsIgnorePattern": "^_"
        }
      ],
      "no-use-before-define": [2, "nofunc"],
      "camelcase": [
        2,
        {
          "properties": "never"
        }
      ],
      "consistent-this": [2, "self"],
      "eol-last": 0,
      "id-length": 0,
      "id-match": 0,
      "indent": [
        0,
        2,
        {
          "SwitchCase": 1
        }
      ],
      "linebreak-style": [2, "unix"],
      "lines-around-comment": 0,
      "max-depth": 0,
      "max-len": 0,
      "max-nested-callbacks": 0,
      "max-params": 0,
      "max-statements": 0,
      "new-cap": 0,
      "newline-after-var": 0,
      "no-array-constructor": 2,
      "no-negated-condition": 2,
      "no-inline-comments": 0,
      "no-lonely-if": 2,
      "no-nested-ternary": 2,
      "no-new-object": 2,
      "no-plusplus": [
        2,
        {
          "allowForLoopAfterthoughts": true
        }
      ],
      "no-ternary": 0,
      "no-underscore-dangle": 0,
      "no-unneeded-ternary": 2,
      "one-var": 0,
      "operator-assignment": [2, "always"],
      "require-jsdoc": 0,
      "sort-vars": 0,
      "spaced-comment": [2, "always"],
      "wrap-regex": 0,
      "arrow-body-style": 0,
      "no-confusing-arrow": 0,
      "no-class-assign": 2,
      "no-const-assign": 2,
      "no-dupe-class-members": 2,
      "no-this-before-super": 2,
      "no-var": 2,
      "object-shorthand": [2, "always"],
      "prefer-arrow-callback": 0,
      "prefer-const": 2,
      "prefer-template": 2,
      "react/display-name": 0,
      "react/jsx-no-bind": 0,
      "react/jsx-boolean-value": [2, "always"],
      "react/jsx-key": 2,
      "react/jsx-no-duplicate-props": 2,
      "react/jsx-no-undef": 2,
      "react/jsx-sort-props": 0,
      "react/jsx-sort-prop-types": 0,
      "react/jsx-uses-react": 2,
      "react/jsx-uses-vars": 2,
      "react/no-danger": 2,
      "react/no-did-mount-set-state": 0,
      "react/no-did-update-set-state": 2,
      "react/no-direct-mutation-state": 2,
      "react/no-is-mounted": 2,
      "react/no-multi-comp": 0,
      "react/no-set-state": 0,
      "react/no-string-refs": 0,
      "react/no-unknown-property": 2,
      "react/prop-types": 2,
      "react/prefer-es6-class": [0, "never"],
      "react/react-in-jsx-scope": 2,
      "react/require-extension": 0,
      "react/self-closing-comp": 0,
      "react/sort-comp": 0,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "babel/no-invalid-this": 1
    }
  }
  