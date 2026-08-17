describe('landmark-one-main test failure', () => {
  let results;
  before(done => {
    axe.testUtils.awaitNestedLoad(() => {
      axe.run(
        { runOnly: { type: 'rule', values: ['landmark-one-main'] } },
        (err, r) => {
          assert.isNull(err);
          results = r;
          done();
        }
      );
    });
  });

  describe('violations', () => {
    it('should find 0', () => {
      assert.lengthOf(results.violations, 0);
    });
  });

  describe('passes', () => {
    it('should find 1', () => {
      assert.lengthOf(results.passes, 1);
    });

    it('should find 2', () => {
      assert.lengthOf(results.passes[0].nodes, 2);
    });

    it('should find #fail1', () => {
      assert.deepEqual(results.passes[0].nodes[0].target, ['#fail1']);
    });

    it('should find #frame1, #violation2', () => {
      assert.deepEqual(results.passes[0].nodes[1].target, [
        '#frame1',
        '#violation2'
      ]);
    });
  });

  it('should find 0 inapplicable', () => {
    assert.lengthOf(results.inapplicable, 0);
  });

  it('should find 0 incomplete', () => {
    assert.lengthOf(results.incomplete, 0);
  });
});
