/* eslint-env node */
module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    // NOTE:
    // stylelint-config-standardは
    // create-nuxt-appで設定された内容です
    // 生CSSは一切書かないのであれば
    // 依存関係/configから消してもいいと思います
    'stylelint-config-standard',
    'stylelint-config-recommended-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-rscss/config',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    /* {}内のnestは1回まで。 擬似クラスと@includeはネストとカウントしない */
    'max-nesting-depth': [
      2,
      {
        ignore: ['pseudo-classes'],
        ignoreAtRules: ['include'],
      },
    ],
  },
}
