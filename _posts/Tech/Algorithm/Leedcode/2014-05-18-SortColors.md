---
layout: post
title: Sort Colors
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](http://oj.leetcode.com/problems/sort-colors/)Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.
Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

<b>Note:</b>
You are not suppose to use the library's sort function for this problem.

<b>题意: </b>用0,1,2分别表示红,白,蓝三种颜色存在一个数组中,要求按照红白蓝的顺序将数组排序.最好能够一次遍历解决.

### 思路
可以使用三个角标对数组进行遍历,我们只对0或2进行处理,如果当前的数是0则与首位交换,如果是2则和末尾交换,然后首位和末尾不断的往中间收缩,直至遍历完数组,最后所有的0都在前面,所有的2都在后面,只剩下1在中间.

###### 代码

		void sortColors(int A[], int n) 
	    {
	        int start = 0, cur = 0, end = n-1;
	        while(cur<=end)
	        {
	            if(A[cur] == 0)
	            {
	                if(cur != start)
	                {
	                    swap(A[cur], A[start]);
	                }
	                cur++;
	                start++;
	            }
	            else if(A[cur] == 2)
	            {
	                if(cur != end)
	                {
	                    swap(A[cur], A[end]);
	                }
	                end--;
	            }
	            else
	            {
	                cur++;
	            }
	        }
	    }