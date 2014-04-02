'use strict';

var Tree = require('../lib/tree.js');

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

var tree;

function build123() {
    tree.insert(2);
    tree.insert(1);
    tree.insert(3);
}

function build12345() {
    tree.insert(4);
    tree.insert(2);
    tree.insert(5);
    tree.insert(1);
    tree.insert(3);
}

exports.treejs = {

  setUp: function(done) {
    tree = new Tree();
    done();
  },

  'find root': function(test) {
    test.expect(1);

    build123();

    test.ok(tree.lookup(2), 'should find node.');
    test.done();
  },

  'find left node': function(test) {
    test.expect(1);

    build123();

    test.ok(tree.lookup(1), 'should find node.');
    test.done();
  },

  'find right node': function(test) {
    test.expect(1);

    build123();

    test.ok(tree.lookup(3), 'should find node.');
    test.done();
  },


  'dont find missing node': function(test) {
    test.expect(1);

    build123();

    test.ok(!tree.lookup(4), 'should not find node.');
    test.done();
  },

  'print simple tree': function(test) {
    test.expect(1);

    build123();

    var expected = '' +
      '  2\n' +
      ' / \\\n' +
      '1   3\n';

    test.strictEqual(tree.print(), expected, 'should print tree.');
    test.done();
  },

  'count short tree': function(test) {
    test.expect(1);

    build123();

    test.strictEqual(tree.size(), 3, 'should count size correctly.');
    test.done();
  },

  'count bigger tree': function(test) {
    test.expect(1);

    var size = 25;
    for (var i = 0; i < size; i++)
      tree.insert(i);

    test.strictEqual(tree.size(), size, 'should count size correctly.');
    test.done();
  },

  'count depth on empty tree': function(test) {
    test.expect(1);
    
    test.strictEqual(tree.maxDepth(), 0, 'should count max depth correctly.');
    test.done();
  },

  'count depth on short tree': function(test) {
    test.expect(1);
    
    build123();

    test.strictEqual(tree.maxDepth(), 2, 'should count max depth correctly.');
    test.done();
  },

  'find min value in short tree': function(test) {
    test.expect(1);
    
    build123();

    test.strictEqual(tree.minValue(), 1, 'should print numbers in order.');
    test.done();
  },

  'find min value in bigger tree': function(test) {
    test.expect(1);
    
    build12345();

    test.strictEqual(tree.minValue(), 1, 'should print numbers in order.');
    test.done();
  },

  'sequential print short tree': function(test) {
    test.expect(1);
    
    build123();

    var expected = '1 2 3 ';

    test.strictEqual(tree.printTree(), expected, 'should print numbers in order.');
    test.done();
  },

  'sequential print bigger tree': function(test) {
    test.expect(1);
    
    build12345();

    var expected = '1 2 3 4 5 ';

    test.strictEqual(tree.printTree(), expected, 'should print numbers in order.');
    test.done();
  },

  'postorder print short tree': function(test) {
    test.expect(1);
    
    build123();

    var expected = '1 3 2 ';

    test.strictEqual(tree.printPostorder(), expected, 'should print numbers in postorder.');
    test.done();
  },

  'postorder print bigger tree': function(test) {
    test.expect(1);
    
    build12345();

    var expected = '1 3 2 5 4 ';

    test.strictEqual(tree.printPostorder(), expected, 'should print numbers in postorder.');
    test.done();
  },

  'find existing path sums for bigger tree': function(test) {
    test.expect(1);
    
    build12345();

    test.ok(tree.hasPathSum(9), 'should find path sum 27.');
    test.done();
  },

  'dont find non-existing path sums for bigger tree': function(test) {
    test.expect(1);
    
    build12345();

    test.ok(!tree.hasPathSum(2), 'should not find path sum 2.');
    test.done();
  }
};
