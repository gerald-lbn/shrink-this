// @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: ['@adonisjs/prettier-config', '@ianvs/prettier-plugin-sort-imports'],
  importOrder: [
    '^@adonisjs/(.*)$',
    '',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^~/(.*)$',
    '^[./]',
    '',
    '^(?!.*[.]css$)[./].*$',
    '.css$',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  importOrderCaseSensitive: false,
}

export default config
