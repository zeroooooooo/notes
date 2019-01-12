---
layout: post
title: Binary Tree Preorder Traversal 
category: Wiki
tags: Leecode
type: Algorithm
isUseGitComment: false
isUseDisqusComment: true
---

### 题目
[原题: ](//oj.leetcode.com/problems/binary-tree-preorder-traversal/)Given a binary tree, return the preorder traversal of its nodes' values.

<b>题意: </b>给一棵二叉树,返回树的前序遍历

### 思路
输出根节点的值,然后先遍历左子树直到左子树为空再遍历右子树

###### 递归代码

		void preorder(vector<int> &ans, TreeNode *root)
	    {
	        if(root!=NULL)
	        {
	            ans.push_back(root->val);  //输出当前节点的值
	            preorder(ans,root->left);  //先遍历左子树
	            preorder(ans,root->right); //后遍历右子树
	        }
	    }
	    vector<int> preorderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        preorder(ans, root);
	        return ans;
	    }

###### 非递归代码
		vector<int> preorderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        stack<TreeNode*> temp;
	        TreeNode *cur = root;
	        while( !temp.empty() || cur!=NULL )
	        {
	            while(cur!=NULL)
	            {
	                ans.push_back(cur->val);
	                temp.push(cur);
	                cur = cur->left;
	            }
	            if(!temp.empty())
	            {
	                cur = temp.top()->right;
	                temp.pop();
	            }
	        }
	        return ans;
	    }

### 中序遍历

###### 递归代码

		void inorder(vector<int> &ans, TreeNode *root)
	    {
	        if(root!=NULL)
	        {
	        	inorder(ans,root->left);  //先遍历左子树
	            ans.push_back(root->val);  //输出当前节点的值
	            inorder(ans,root->right); //后遍历右子树
	        }
	    }
	    vector<int> inorderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        inorder(ans, root);
	        return ans;
	    }

###### 非递归代码

	    vector<int> inorderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        stack<TreeNode*> temp;
	        TreeNode *cur = root;
	        while( !temp.empty() || cur!=NULL )
	        {
	            while(cur!=NULL)
	            {
	                temp.push(cur);
	                cur = cur->left;
	            }
	            if(!temp.empty())
	            {
	                ans.push_back(temp.top()->val);
	                cur = temp.top()->right;
	                temp.pop();
	            }
	        }
	        return ans;
	    }

### 后序遍历

######递归代码

		void postorder(vector<int> &ans, TreeNode *root)
	    {
	        if(root!=NULL)
	        {
	        	postorder(ans,root->left);  //先遍历左子树
	            postorder(ans,root->right); //后遍历右子树
	           ans.push_back(root->val);  //输出当前节点的值
	        }
	    }
	    vector<int> postrderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        postorder(ans, root);
	        return ans;
	    }

######非递归代码

	    vector<int> postorderTraversal(TreeNode *root) 
	    {
	        vector<int> ans;
	        if( !root )
	        {
	            return ans;
	        }
	        stack<TreeNode*> intemp, outtemp;
	        TreeNode *cur = root;
	        intemp.push(cur);
	        while( !intemp.empty() )
	        {
	            cur = intemp.top();
	            intemp.pop();
	            outtemp.push(cur);
	            if(cur->left)
	            {
	                intemp.push(cur->left);
	            }
	            if(cur->right)
	            {
	                intemp.push(cur->right);
	            }
	        }
	        while(!outtemp.empty())
	        {
	            ans.push_back(outtemp.top()->val);
	            outtemp.pop();
	        }
	        return ans;
	    }

###层序遍历

######代码

		vector<vector<int> > levelOrder(TreeNode *root) 
	    {
	        queue<TreeNode*> cur;
	        vector<vector<int> > ans;
	        if( !root )
	        {
	            return ans;
	        }
	        cur.push(root);
	        while(!cur.empty())
	        {
	            queue<TreeNode*> tem;
	            vector<int> levelNode;
	            while(!cur.empty())
	            {
	                root = cur.front();
	                levelNode.push_back(root->val);
	                cur.pop();
	                
	                if(root->left)
	                {
	                    tem.push(root->left);
	                }
	                if(root->right)
	                {
	                    tem.push(root->right);
	                }
	            }
	            cur = tem;
	            ans.push_back(levelNode);
	        }
	    }