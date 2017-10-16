module.exports = {
    rules: {
        // enforce line breaks after opening and before closing array brackets
        // http://eslint.org/docs/rules/array-bracket-newline
        "array-bracket-newline": ["off", { multiline: true, minItems: 3 }],

        // enforce line breaks between array elements
        // http://eslint.org/docs/rules/array-element-newline
        "array-element-newline": ["off", { multiline: true, minItems: 3 }],

        // enforce spacing inside array brackets
        "array-bracket-spacing": ["error", "never"],

        // enforce spacing inside single-line blocks
        // http://eslint.org/docs/rules/block-spacing
        "block-spacing": ["error", "always"],

        // enforce one true brace style
        "brace-style": ["error", "1tbs", { allowSingleLine: true }],

        // require camel case names
        camelcase: ["error", { properties: "never" }],

        // require trailing commas in multiline object literals
        "comma-dangle": [
            "error",
            {
                arrays: "always-multiline",
                objects: "always-multiline",
                imports: "always-multiline",
                exports: "always-multiline",
                functions: "always-multiline"
            }
        ],

        // enforce spacing before and after comma
        "comma-spacing": ["error", { before: false, after: true }],

        // enforce one true comma style
        "comma-style": ["error", "last"],

        // enforce newline at the end of file, with no multiple empty lines
        "eol-last": ["error", "always"],

        // enforce spacing between functions and their invocations
        // http://eslint.org/docs/rules/func-call-spacing
        "func-call-spacing": ["error", "never"],

        // requires function names to match the name of the variable or property to which they are
        // assigned
        // http://eslint.org/docs/rules/func-name-matching
        "func-name-matching": [
            "off",
            "always",
            {
                includeCommonJSModuleExports: false
            }
        ],

        // require function expressions to have a name
        // http://eslint.org/docs/rules/func-names
        "func-names": "warn"
    }
}
