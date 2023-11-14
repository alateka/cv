export const root = true;
export const env = {
  node: true,
};
export const ignorePatterns = ["vite.config.js"];
export const rules = {
  /* ---------------------- VUE Rules ------------------------------- */
  // Disable the directive comment requirement in Vue files
  "vue/comment-directive": "off",
  // Set the HTML indentation to 2 spaces
  "vue/html-indent": ["error", 2],
  // Allow multi-word component names
  "vue/multi-word-component-names": "off",
  // Allow multiple template roots
  "vue/no-multiple-template-root": "off",
  // Allow the use of v-html
  "vue/no-v-html": "off",
  // Allow dynamic arguments in v-model
  "vue/no-v-model-argument": "off",
  // Allow any casing for prop names
  "vue/prop-name-casing": "off",
  // Allow optional default props
  "vue/require-default-prop": "off",
  // Allow valid default props
  "vue/require-valid-default-prop": "off",
  // Allow single-line content for HTML elements
  "vue/singleline-html-element-content-newline": "off",
  // Disable vue/no-mutating-props rule
  "vue/no-mutating-props": "off",
  // Require v-bind:key with v-for directives
  "vue/require-v-for-key": "on",

  /* -----------------------  ESLINT Rules ---------------------------------------- */
  // Allow parentheses around single arguments in arrow functions
  "arrow-parens": ["error", "as-needed"],
  // Enforce consistent spacing after commas
  "comma-spacing": "error",
  // Enforce consistent spacing around keywords
  "keyword-spacing": "error",
  // Allow the use of console.warn and console.error
  "no-console": ["error", { allow: ["warn", "error"] }],
  // Report unused variables as errors
  "no-unused-vars": "error",
  // Disallow the use of 'var'
  "no-var": "error",
  // Require spaces inside curly braces in object literals
  "object-curly-spacing": ["error", "always"],
  // Use double quotes for strings
  quotes: ["error", "double"],
  // Require semicolons at the end of statements
  semi: ["error", "always"],
  // Require a space before blocks
  "space-before-blocks": "error",
  // Limit cyclomatic complexity to 20
  complexity: ["error", 20],
  // Avoid extra commas at the end of objects and arrays
  "comma-dangle": ["error", "never"],
  // Set the maximum line length to 180 characters
  indent: ["error", 2, { SwitchCase: 1 }],
  // Set the maximum line length to 180 characters (ignoring strings and template literals)
  "max-len": [
    "error",
    { code: 180, ignoreStrings: true, ignoreTemplateLiterals: true },
  ],
};
