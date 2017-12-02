---
layout: post
title: Single Number II 
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](http://oj.leetcode.com/problems/single-number-ii/)Given an array of integers, every element appears three times except for one. Find that single one.

<b>Note:</b>
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

<b>题意: </b>这是[Single Number](http://vincween.github.io/notes/interview/2014/05/09/singlenumber.html)的进阶,不过这道题其他数出现的次数是三次,并且也是线性时间和不使用额外的空间

### 思路
[参考博客1 ](http://www.tuicool.com/articles/UjQV7n)[ 参考博客2](http://blog.csdn.net/lanxu_yy/article/details/17437891)全部都是位操作.

###### 代码

		int singleNumber(int A[], int n) 
		{
	        int ones = 0, twos = 0, threes = 0;
	        for(int i = 0; i < n; i++)
	        {
	            threes = twos & A[i];       //已经出现两次并且再次出现
	            twos = twos | ones & A[i];  //曾经出现两次的或者曾经出现一次但是再次出现的
	            ones = ones ^ A[i]; 		//出现一次的
	            
	            twos = twos & ~threes; 		//当某一位出现三次后，我们就从出现两次中消除该位
	            ones = ones & ~threes; 		//当某一位出现三次后，我们就从出现一次中消除该位
	        }
	        return ones; 					//twos, threes最终都为0.ones是只出现一次的数
    	}