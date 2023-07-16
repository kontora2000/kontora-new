module.exports = {
  root: true,
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:prettier/recommended', 'plugin:tailwindcss/recommended'],
  rules: {
    // Disables eslint throwing an error on script setup vue files
    'import/first': 'off'
  }
};
