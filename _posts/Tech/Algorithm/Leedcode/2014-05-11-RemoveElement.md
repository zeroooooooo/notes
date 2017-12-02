---
layout: post
title: Remove Element 
category: Tech
tags: Leecode
type: Algorithm
---

###题目
[原题: ](http://oj.leetcode.com/problems/remove-element/)Given an array and a value, remove all instances of that value in place and return the new length.
The order of elements can be changed. It doesn't matter what you leave beyond the new length.

<b>题意: </b>在给定的数组中出去给定的目标数

###思路
也是采用覆盖的方式,将数组扫描一遍让没有出现过的数覆盖目标数所在的位置.

######代码

		int removeElement(int A[], int n, int elem) 
	    {
	        int cur = 0;
	        for(int i = 0; i < n; ++i)
	        {
	            if(A[i] != elem)
	            {
	                A[cur++] = A[i];
	            }
	        }
	        return cur;
	    }