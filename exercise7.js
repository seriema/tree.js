'use strict';

var Tree = require('./lib/tree.js');

var tree = new Tree();

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

var target = process.argv[2];

if (target === undefined)
  console.log('Expected parameter missing. Usage: "node exercise7.js [number to search for]".');
else
if (isNaN(Number(target)))
  console.log('Expected parameter needs to be a number.');
else
  console.log(tree.hasPathSum(Number(target)) ? 'Found it!' : 'Target not found...');
