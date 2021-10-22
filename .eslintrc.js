module.exports = {
    "env": {
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2020,
        "sourceType": "module"
    },
    "rules": {
        "accessor-pairs": "warn",
        "array-callback-return": "warn",
        "array-bracket-newline": [ "warn", "consistent" ],
        "array-bracket-spacing": [ "warn", "always", { "objectsInArrays": false, "arraysInArrays": false }],
        // "arrow-parens": "warn",
        "arrow-spacing": "warn",
        "block-scoped-var": "warn",
        "block-spacing": [ "warn", "always" ],
        "brace-style": [ "warn", "1tbs" ],
        "callback-return": "warn",
        "camelcase": "warn",
        "comma-dangle": [ "warn", "only-multiline" ],
        "comma-spacing": [
            "warn",
            {
                "after": true,
                "before": false
            }
        ],
        "comma-style": "warn",
        "computed-property-spacing": [
            "warn",
            "never"
        ],
        "consistent-this": "warn",
        "dot-notation": [
            "warn",
            {
                "allowKeywords": true
            }
        ],
        "dot-location": [
            "error",
            "property"
        ],
        "eol-last": [
            "warn",
            "never"
        ],
        "eqeqeq": "warn",
        "func-call-spacing": "warn",
        "func-name-matching": "warn",
        "func-names": "warn",
        "func-style": "warn",
        "function-paren-newline": "warn",
        "generator-star-spacing": "warn",
        "grouped-accessor-pairs": "warn",
        "guard-for-in": "warn",
        "handle-callback-err": "warn",
        "id-blacklist": "warn",
        "id-match": "warn",
        "implicit-arrow-linebreak": "warn",
        "indent": "warn",
        "init-declarations": "warn",
        "jsx-quotes": [ "warn", "prefer-single" ],
        "key-spacing": [ "warn", { "beforeColon": false, "afterColon": true }],
        "keyword-spacing": [ "warn", { "after": true, "before": true }],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "lines-around-comment": "warn",
        "lines-around-directive": "warn",
        "lines-between-class-members": [
            "warn",
            "always"
        ],
        "max-classes-per-file": "warn",
        "max-nested-callbacks": "warn",
        "new-parens": "warn",
        "no-alert": "warn",
        "no-array-constructor": "warn",
        "no-bitwise": "warn",
        "no-buffer-constructor": "warn",
        "no-caller": "warn",
        "no-console": "warn",
        "no-div-regex": "warn",
        "no-dupe-else-if": "warn",
        "no-duplicate-imports": "warn",
        "no-else-return": "warn",
        "no-empty-function": "warn",
        "no-eq-null": "warn",
        "no-eval": "warn",
        "no-extend-native": "warn",
        "no-extra-bind": "warn",
        "no-extra-label": "warn",
        "no-extra-parens": "warn",
        "no-floating-decimal": "warn",
        "no-implicit-coercion": "warn",
        "no-implicit-globals": "warn",
        "no-implied-eval": "error",
        "no-import-assign": "warn",
        "no-invalid-this": "warn",
        "no-iterator": "warn",
        "no-label-var": "warn",
        // "no-labels": "warn",
        "no-lone-blocks": "warn",
        "no-lonely-if": "warn",
        "no-loop-func": "warn",
        "no-mixed-requires": "warn",
        "no-multi-assign": "warn",
        "no-multi-spaces": "warn",
        "no-multi-str": "warn",
        "no-multiple-empty-lines": "warn",
        "no-native-reassign": "warn",
        "no-negated-in-lhs": "warn",
        "no-negated-condition": "error",
        "no-nested-ternary": "warn",
        "no-new": "warn",
        "no-new-func": "warn",
        "no-new-object": "warn",
        "no-new-require": "warn",
        "no-new-wrappers": "warn",
        "no-octal-escape": "warn",
        "no-path-concat": "warn",
        "no-process-exit": "warn",
        "no-proto": "warn",
        "no-restricted-globals": "warn",
        "no-restricted-imports": "warn",
        "no-restricted-modules": "warn",
        "no-restricted-properties": "warn",
        "no-restricted-syntax": "warn",
        "no-return-assign": "warn",
        "no-return-await": "warn",
        "no-script-url": "warn",
        "no-self-compare": "warn",
        "no-sequences": "warn",
        "no-setter-return": "warn",
        "no-spaced-func": "warn",
        "no-shadow": "error",
        "no-tabs": "warn",
        "no-template-curly-in-string": "error",
        "no-throw-literal": "warn",
        "no-undef-init": "error",
        "no-undefined": "error",
        "no-unmodified-loop-condition": "warn",
        "no-unneeded-ternary": "error",
        "no-unused-expressions": "warn",
        "no-use-before-define": "error",
        "no-useless-call": "warn",
        "no-useless-computed-key": "warn",
        "no-useless-concat": "warn",
        "no-useless-constructor": "warn",
        "no-useless-rename": "warn",
        "no-useless-return": "warn",
        "no-var": "warn",
        "no-void": "warn",
        "no-whitespace-before-property": "error",
        "nonblock-statement-body-position": "warn",
        "object-curly-spacing": [
            "warn",
            "always"
        ],
        "object-property-newline": [ "warn", { "allowAllPropertiesOnSameLine": true }],
        "object-shorthand": "warn",
        "one-var-declaration-per-line": "warn",
        "operator-assignment": "warn",
        "operator-linebreak": [ "warn", "before" ],
        "padding-line-between-statements": "warn",
        "padded-blocks": [ "warn", { "switches": "never" }, { "allowSingleLineBlocks": true }],
        "prefer-arrow-callback": "warn",
        "prefer-const": "warn",
        "prefer-destructuring": "warn",
        "prefer-exponentiation-operator": "warn",
        "prefer-numeric-literals": "warn",
        "prefer-object-spread": "error",
        "prefer-promise-reject-errors": "warn",
        "prefer-regex-literals": "warn",
        "prefer-rest-params": "warn",
        "prefer-spread": "warn",
        "require-jsdoc": "warn",
        "require-unicode-regexp": "warn",
        "rest-spread-spacing": "warn",
        "semi": "error",
        "semi-spacing": "warn",
        "semi-style": [
            "warn",
            "last"
        ],
        "space-before-blocks": "warn",
        "space-before-function-paren": [ "error", "always" ],
        "space-in-parens": [
            "warn",
            "never"
        ],
        "spaced-comment": [ "warn", "always" ],
        "strict": "warn",
        "switch-colon-spacing": "warn",
        "symbol-description": "warn",
        "template-curly-spacing": [
            "warn",
            "never"
        ],
        "template-tag-spacing": "warn",
        "unicode-bom": [
            "warn",
            "never"
        ],
        "vars-on-top": "warn",
        "wrap-iife": "warn",
        "wrap-regex": "error",
        "yield-star-spacing": "warn",
        "yoda": [
            "warn",
            "never"
        ]
    }
};