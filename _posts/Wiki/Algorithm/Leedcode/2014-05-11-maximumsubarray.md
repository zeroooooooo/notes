---
layout: post
title: Maximum Subarray
category: Wiki
tags: Leecode
type: Algorithm
isUseGitComment: true
isUseDisqusComment: false
---

### 题目
[原题: ](//oj.leetcode.com/problems/maximum-subarray/)Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

<b>For example :</b>given the array [−2,1,−3,4,−1,2,1,−5,4],
the contiguous subarray [4,−1,2,1] has the largest sum = 6

<b>题意: </b>求最大子序列和

### 思路
可以知道每一个最大子序列的开始位置肯定是正数，并且序列中(假设从i开始j结束)肯定不存在i小于x小于j
使得a[i]+..a[x]的和小于零的子序列,所以所有最大子序列均满足上述的来年改革条件,然后取其中最大的就可以了

###### 代码

		int maxSubArray(int A[], int n) 
	    {
	        int maxSum = A[0], curSum = 0;
	        for(int i = 0; i < n; ++i)
	        {
	            if(curSum <= 0)
	            {
	                curSum = A[i];  //若i前面的序列和小于零则一直取到A[i]>0为止作为起点
	            }
	            else
	            {
	                curSum += A[i]; 
	            }
	            maxSum = max(maxSum, curSum); 不断更新最大的序列和值
	        }
	        
	        return maxSum;
	    }

