module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-recess-order'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'block-no-empty': null,
    'unit-allowed-list': ['px', 'em', 'deg'],
  },
}
