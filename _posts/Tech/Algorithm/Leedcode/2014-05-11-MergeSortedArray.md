---
layout: post
title: Merge Sorted Array 
category: Tech
tags: Leecode
type: Algorithm
---

###题目
[原题: ](http://oj.leetcode.com/problems/merge-sorted-array/)Given two sorted integer arrays A and B, merge B into A as one sorted array.

<b>Note:</b>
You may assume that A has enough space (size that is greater or equal to m + n) to hold additional elements from B. The number of elements initialized in A and B are m and n respectively.

<b>题意: </b>合并两个排好序的数组,合并结果放到A数组中

###思路
可以从后面往前面合并,因为A数组长度足够,所以从n+m-1的位置开始往前从大到小合并

######代码

		void merge(int A[], int m, int B[], int n)
	    {
	        int aSize = m-1, bSize = n-1, newIndex = n+m-1;
	        while( aSize >= 0 && bSize >= 0)
	        {
	            if(A[aSize] >= B[bSize])
	            {
	                A[newIndex--] = A[aSize--];
	            }
	            else
	            {
	                A[newIndex--] = B[bSize--];
	            }
	        }
	        while(aSize >= 0)
	        {
	            A[newIndex--] = A[aSize--];
	        }
	        while(bSize >= 0)
	        {
	            A[newIndex--] = B[bSize--];
	        }
	    }
