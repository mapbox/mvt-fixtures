import mourner from 'eslint-config-mourner';

export default [
  ...mourner,
  {
    rules: {
      '@stylistic/indent': [2, 2, {flatTernaryExpressions: true}],
      // snake_case fixture/protobuf field names are part of the public API/spec
      'camelcase': 0
    }
  },
  {
    files: ['scripts/**'],
    rules: {
      // sequential network/IO in build scripts is intentional
      'no-await-in-loop': 0
    }
  }
];
