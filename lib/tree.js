/*
 * tree.js
 * seriema/tree.js
 *
 * Copyright (c) 2014 John-Philip Johansson
 * Licensed under the MIT license.
 */

'use strict';


var TreeNode = function(value) {
	this.data = value;
	this.left = null;
	this.right = null;
};

var tree = null;

function insertNode(node, value) {
	if (node.left === null)
		node.left = new TreeNode(value);
	else
	if (node.right === null)
		node.right = new TreeNode(value);
	else
		insertNode(node.left, value);
}

function lookup(value) {
	if (tree.data === value)
		return true;

	return false;
}

function insert(value) {
	if (tree === null)
		tree = new TreeNode(value);
	else
		insertNode(tree, value);
	value = value;
}

function print() {
}


exports.lookup = lookup;
exports.insert = insert;
exports.print = print;