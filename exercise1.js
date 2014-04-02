'use strict';

var Tree = require('./lib/tree.js');

var tree = new Tree();

tree.insert(2);
tree.insert(1);
tree.insert(3);

console.log(tree.print());
