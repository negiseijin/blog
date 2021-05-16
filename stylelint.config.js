module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'apply'],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['px', 'em', 'deg', 'vh'],
    'prettier/prettier': true,
  },
}
