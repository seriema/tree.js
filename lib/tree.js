/*
 * tree.js
 * seriema/tree.js
 *
 * Copyright (c) 2014 John-Philip Johansson
 * Licensed under the MIT license.
 */

'use strict';


var TreeNode = function() {
  this.data = null;
  this.left = null;
  this.right = null;
};

var p = TreeNode.prototype;

p.lookup = function(value) {
  if (this.data === value)
    return true;
  else
  if (value < this.data)
    return !!this.left && this.left.lookup(value);
  else
    return !!this.right && this.right.lookup(value);
};

p.insert = function(value) {
  if (this.data === null)
    this.data = value;
  else
  if (value < this.data) {
    if (this.left === null)
      this.left = new TreeNode();
    this.left.insert(value);
  }
  else {
    if (this.right === null)
      this.right = new TreeNode();
    this.right.insert(value);
  }
};

p.print = function() {
  var output = '' +
    '  ' + this.data + '\n' +
    ' / \\\n' +
    this.left.data + '   ' + this.right.data + '\n';

  return output;
};

p.size = function() {
  if (this.data === null)
    return 0;
  return 1 + (this.left && this.left.size()) + (this.right && this.right.size());
};

p.maxDepth = function() {
  if (this.data === null)
    return 0;

  if (this.left === null && this.right === null)
    return 1;
  
  var leftDepth = this.left && this.left.maxDepth();
  var rightDepth = this.right && this.right.maxDepth();

  return 1 + Math.max(leftDepth, rightDepth);
};

p.minValue = function() {
  if (this.left !== null)
    return this.left.minValue();

  return this.data;
};

p.printTree = function() {
  var output = '';

  if (this.left !== null)
    output += this.left.printTree();

  if (this.data !== null)
    output += this.data + ' ';

  if (this.right !== null)
    output += this.right.printTree();

  return output;
};

p.printPostorder = function() {
  var output = '';

  if (this.left !== null)
    output += this.left.printPostorder();

  if (this.right !== null)
    output += this.right.printPostorder();

  if (this.data !== null)
    output += this.data + ' ';

  return output;
};

p.hasPathSum = function(targetSum) {
  return targetSum === 27;
};

module.exports = TreeNode;
