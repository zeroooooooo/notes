---
layout: post
title: First Missing Positive
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](//oj.leetcode.com/problems/first-missing-positive/)Given an unsorted integer array, find the first missing positive integer.

<b>For example:</b>

        Given [1,2,0] return 3,
        and [3,4,-1,1] return 2.

<b>Note: </b>Your algorithm should run in O(n) time and uses constant space.

<b>题意: </b>在一个未排序的数组中找出第一个数组中没有的正数,要求在线性时间和固定空间里完成算法.

### 思路
[参考博客](//www.cnblogs.com/linyx/p/3730126.html)可以扫描一遍数组然后处理以下几种情况

+ 如果当前A[i]越界,即1>A[i]||A[i]>n,则跳过
+ 如果当前的A[i] = i+1,则该位置的数是正确的,跳过
+ 如果A[i] = A[A[i]-1],即在相应的位置上已经存在了正确的数,而当前的A[i]是重复的,跳过
+ 其余的情况就将他们交换,然后再从当前位置开始就可以了

###### 代码

		int firstMissingPositive(int A[], int n)
        {
            for(int i = 0; i < n; ++i)
            {
                if(A[i]<1 || A[i]>n)continue;
                if(A[i] == i+1)continue;
                if(A[i] == A[A[i]-1])continue;
                swap(A[i], A[A[i]-1]);
                i -= 1;             //交换完后要从当前位置从新开始
            }
            for(int i = 0; i < n; ++i)
            {
                if(A[i] != i+1)
                {
                    return i+1;
                }
            }
            return n+1;
        }
