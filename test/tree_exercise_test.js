'use strict';

var Tree = require('../lib/tree.js');

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

  'excercise 1': function(test) {
    test.expect(1);

    build123();

    var expected = '' +
      '  2\n' +
      ' / \\\n' +
      '1   3\n';

    test.equal(tree.print(), expected, 'should print tree.');
    test.done();
  },

  'excercise 2': function(test) {
    test.expect(1);
    
    build12345();

    test.equal(tree.size(), 5, 'should count size correctly.');
    test.done();
  },

  'excercise 3': function(test) {
    test.expect(1);
    
    build12345();

    test.equal(tree.maxDepth(), 3, 'should count max depth correctly.');
    test.done();
  },

  'excercise 4': function(test) {
    test.expect(1);
    
    build12345();

    test.equal(tree.minValue(), 1, 'should find minimal value.');
    test.done();
  },

  'exercise 5': function(test) {
    test.expect(1);
    
    build12345();

    var expected = '1 2 3 4 5 ';

    test.equal(tree.printTree(), expected, 'should print numbers in order.');
    test.done();
  },

  'exercise 6': function(test) {
    test.expect(1);
    
    build12345();

    var expected = '1 3 2 5 4 ';

    test.equal(tree.printPostorder(), expected, 'should print numbers in postorder.');
    test.done();
  },

  'exercise 7': function(test) {
    test.expect(4);
    
    tree.insert(5);
    tree.insert(4);
    tree.insert(8);

    tree.left.left = new Tree();
    tree.left.left.data = 11;

    tree.left.left.left = new Tree();
    tree.left.left.left.data = 7;
    tree.left.left.right = new Tree();
    tree.left.left.right.data = 2;

    tree.right.left = new Tree();
    tree.right.left.data = 13;

    tree.right.right = new Tree();
    tree.right.right.data = 4;

    tree.right.right.right = new Tree();
    tree.right.right.right.data = 1;

    test.equal(tree.hasPathSum(27), true, 'should find first path sum.');
    test.equal(tree.hasPathSum(22), true, 'should find second path sum.');
    test.equal(tree.hasPathSum(26), true, 'should find third path sum.');
    test.equal(tree.hasPathSum(18), true, 'should find fourth path sum.');
    test.done();
  }
};
