describe('color-contrast prototype.js test', () => {
  let results;

  before(done => {
    axe.testUtils.awaitNestedLoad(async () => {
      const options = {
        runOnly: ['color-contrast'],
        elementRef: true
      };
      results = await axe.run('#fixture', options);
      done();
    });
  });

  describe('incomplete', () => {
    it('should find none', () => {
      assert.lengthOf(results.incomplete, 0);
    });
  });

  // FAIL:
  // npm run test:unit -- --browsers Chrome testFiles=test/integration/full/contrast/prototype.js
  // npm run test:unit -- --browsers ChromeHeadless testFiles=test/integration/full/contrast/prototype.js
  // PASS:
  // pnpm exec start-server-and-test 9876 "npm run integration browser=Chrome"
  // pnpm exec start-server-and-test 9876 "npm run integration browser=ChromeHeadless"
  // SEE test-webdriver.js
  // const testUrls = globSync...
  // 'test/integration/full/contrast/**/*.{html,xhtml}'
  // describe('violations', () => {
  //   it('should find one', () => {
  //     assert.lengthOf(results.violations, 1);
  //   });
  // });
});
