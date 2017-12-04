---
layout: post
title: Single Number
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题 :](//oj.leetcode.com/problems/single-number/)Given an array of integers, every element appears twice except for one. Find that single one.
<b>Note:</b>
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

<b>题意:</b> 题目的意思大概是给定一组数组,其中有一个数只出现一次而其他的数均出现两次,要求可否在线性时间内并且不使用更多的内存找出这个只出现一次的数.

### 思路
##### c++中的异或规则有如下两条
+ 0与任何数异或等于任何数
+ 两个相同的数异或等于0

##### 因此我们只要将0与这一组数异或一遍就可以得到只出现一次的那个数
		##代码
		int singleNumber(int A[], int n) 
		{
			int ans = 0;
			while(n--)
			{
				ans ^= A[n];
			}
			return ans;
		}