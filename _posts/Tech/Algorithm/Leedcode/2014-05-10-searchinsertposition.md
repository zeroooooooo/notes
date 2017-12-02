---
layout: post
title: Search Insert Position 
category: Tech
tags: Leecode
type: Algorithm
---

###题目
[原题: ](http://oj.leetcode.com/problems/search-insert-position/)Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

<b>Here are few examples.</b>

        [1,3,5,6], 5 → 2
        [1,3,5,6], 2 → 1
        [1,3,5,6], 7 → 4
        [1,3,5,6], 0 → 0

<b>题意: </b>在排好序的序列中查找一个数找得到的话返回位置,找不到返回插入的位置

###思路
相当于二分查找,直接上代码
######代码

		int searchInsert(int A[], int n, int target) 
        {
            int begin = 0, mid = 0, end = n-1;
            
            while(begin <= end)
            {
                mid = (begin+end)/2;
                if(target == A[mid])
                {
                    return mid;
                }
                else if(target < A[mid])
                {
                    end = mid-1;
                }
                else
                {
                    begin = mid+1;
                }
            }
            return begin;
        }