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

module.exports = TreeNode;
