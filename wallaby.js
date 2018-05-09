module.exports = () => {
  return {
    files: [
      'src/js/*.js'
    ],
    tests: [
      'tests/unit/*Spec.js'
    ],
    env: {
      type: 'node',
      runner: 'node'
    },
    testFramework: 'jest',
    debug: true
  };
};
