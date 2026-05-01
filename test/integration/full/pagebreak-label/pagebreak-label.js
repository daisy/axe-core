describe('pagebreak-label test fail', function () {
  // Checks that `epub:type` have matching ARIA roles
  // Ensure the element has an ARIA role matching its epub:type
  // ARIA role should be used in addition to epub:type

  'use strict';
  var results;
  before(function (done) {
    axe.testUtils.awaitNestedLoad(function () {
      // axe.configure({}); // DAISY-AXE BREAKPOINT AXE CONFIGURE

      axe.run(
        { runOnly: { type: 'rule', values: ['pagebreak-label'] } },
        function (err, r) {
          assert.isNull(err);
          results = r;
          done();
        }
      );
    });
  });

  describe('violations', function () {
    it('should find 1', function () {
      // console.log(JSON.stringify(results.violations, null, 4));
      assert.lengthOf(results.violations, 1);
    });

    it('should find 4 nodes', function () {
      // console.log(JSON.stringify(results.violations[0].nodes, null, 4));
      assert.lengthOf(results.violations[0].nodes, 4);
    });

    it('should find #p3 #p4 #p5', function () {
      // note pagebreak-label.json rule check this is PASS instead of FAIL (parser diff)
      // npm run test:integration:chrome (THIS)
      // vs.
      // npm run test:unit -- --browsers Chrome testDirs=integration
      // or
      // npm run test:unit -- --browsers ChromeHeadless testDirs=integration
      assert.deepEqual(results.violations[0].nodes[0].target, ['#p3']);
      assert.deepEqual(results.violations[0].nodes[1].target, ['#p4']);

      assert.deepEqual(results.violations[0].nodes[2].target, ['#p5']);
      assert.deepEqual(results.violations[0].nodes[3].target, ['#p5x']);
    });
  });

  describe('passes', function () {
    it('should find 1', function () {
      // console.log(JSON.stringify(results.passes, null, 4));
      assert.lengthOf(results.passes, 1);
    });

    it('should find 6 nodes', function () {
      // console.log(JSON.stringify(results.violations[0].nodes, null, 4));
      assert.lengthOf(results.passes[0].nodes, 6);
    });

    it('should find section #p1 #p2 #p6 #p9', function () {
      assert.deepEqual(results.passes[0].nodes[0].target, ['#p1']);
      assert.deepEqual(results.passes[0].nodes[1].target, ['#p2']);
      assert.deepEqual(results.passes[0].nodes[2].target, ['#p6']);
      assert.deepEqual(results.passes[0].nodes[3].target, ['#p7']);
      assert.deepEqual(results.passes[0].nodes[4].target, ['#p8']);
      assert.deepEqual(results.passes[0].nodes[5].target, ['#p9']);
    });
  });

  it('should find 0 inapplicable', function () {
    assert.lengthOf(results.inapplicable, 0);
    // assert.lengthOf(results.inapplicable[0].nodes, 0);
  });

  it('should find 0 incomplete', function () {
    assert.lengthOf(results.incomplete, 0);
  });
});
