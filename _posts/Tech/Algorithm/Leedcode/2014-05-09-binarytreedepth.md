---
layout: post
title: Maximum Depth of Binary Tree 
category: Tech
tags: Leecode
type: Algorithm
---

###题目
[原题: ](http://oj.leetcode.com/problems/maximum-depth-of-binary-tree/)Given a binary tree, find its maximum depth.The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

<b>题意: </b>给定一个二叉树,求出二叉树的最大深度.最大的深度等于根节点到叶子节点的最长的那条路径的长度

###思路
可以采用递归的方式进行求解,当树节点只有一个时深度为1,当只有右子树没有左子树时则深度应该等于右子树深度+1,同样如果只有左子树而没有右子树的话,深度就等于左子树深度+一,若同时存在左右子树,则深度应该等于较大者的深度+1,直到遍历完整棵树为止.

######代码

	int maxDepth(TreeNode *root) 
	{
		if( !root )
		{
			return 0;
		}

		int  ldepth = maxDepth(root->left);
		int  rdepth = maxDepth(root->right);

		return (ldepth>rdepth) ? (ldepth+1):(rdepth+1);      
	}

