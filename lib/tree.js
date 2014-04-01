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
	return tree.data === value || tree.left.data === value || tree.right.data === value;
}

function insert(value) {
	if (tree === null)
		tree = new TreeNode(value);
	else
		insertNode(tree, value);
	value = value;
}

function print() {
	var output = '' +
		'  ' + tree.data + '\n' +
		' / \\\n' +
		tree.left.data + '   ' + tree.right.data + '\n';

	return output;
}


exports.lookup = lookup;
exports.insert = insert;
exports.print = print;