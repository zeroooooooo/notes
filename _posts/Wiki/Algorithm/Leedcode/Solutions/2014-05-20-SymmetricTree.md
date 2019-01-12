---
layout: post
title: Symmetric Tree 
category: Wiki
tags: Leecode
type: Algorithm
isUseGitComment: false
isUseDisqusComment: true
---

### 题目
[原题: ](//oj.leetcode.com/problems/Symmetric-Tree/)Given a binary tree, isMirror whether it is a mirror of itself (ie, symmetric around its center).

<b>For example, this binary tree is symmetric:</b>

            1
           / \
          2   2
         / \ / \
        3  4 4  3

<b>But the following is not:</b>
         
            1
           / \
          2   2
           \   \
           3    3

<b>题意: </b>
判断给定的二叉树是否对称.

### 思路
看代码应该很容易看懂的.

###### 代码

		bool isMirror(TreeNode *l, TreeNode *r)
        {
            if(l==NULL && r==NULL)
            {
                return true;
            }
            if(l==NULL || r==NULL)
            {
                return false;
            }
            if(l->val != r->val)
            {
                return false;
            }
            
            return isMirror(l->left, r->right) && isMirror(l->right, r->left);
        }
        bool isSymmetric(TreeNode *root) 
        {
            if(root == NULL)
            {
                return true;
            }
            
            isMirror(root->left, root->right);
        }