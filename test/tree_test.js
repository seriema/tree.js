'use strict';

var tree = require('../lib/tree.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.treejs = {
  setUp: function(done) {
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);

    done();
  },

  'find root': function(test) {
    test.expect(1);

    test.equal(tree.lookup(2), true, 'should find node.');
    test.done();
  },

  'find left node': function(test) {
    test.expect(1);

    test.equal(tree.lookup(1), true, 'should find node.');
    test.done();
  },

  'find right node': function(test) {
    test.expect(1);

    test.equal(tree.lookup(3), true, 'should find node.');
    test.done();
  },


  'dont find missing node': function(test) {
    test.expect(1);

    test.equal(tree.lookup(4), false, 'should not find node.');
    test.done();
  },

  'print simple tree': function(test) {
    test.expect(1);

    var expected = '' +
      '  2\n' +
      ' / \\\n' +
      '1   3\n';

    test.equal(tree.print(), expected, 'should print tree.');
    test.done();
  }
};
