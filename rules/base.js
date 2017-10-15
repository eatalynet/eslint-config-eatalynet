module.exports = {
  rules: {
    /* VARIABLES */
    
    // disallow deletion of variables
    'no-delete-var': 'error',
    
    // disallow use of undeclared variables unless mentioned in a /*global */ block
    'no-undef': 'error',

    // disallow use of undefined when initializing variables
    'no-undef-init': 'error',

    // disallow use of undefined variable
    // http://eslint.org/docs/rules/no-undefined
    // TODO: enable?
    'no-undefined': 'off',
    
    // disallow declaration of variables that are not used in the code
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    
    // disallow use of variables before they are defined
    'no-use-before-define': ['error', { functions: true, classes: true, variables: true }],
  }
}
