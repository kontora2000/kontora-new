module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:tailwindcss/recommended'],
  rules: {
    // Disables eslint throwing an error on script setup vue files
    'import/first': 'off',
    'vue/multi-word-component-names': 0,
    'tailwindcss/no-custom-classname': 0
  }
};
