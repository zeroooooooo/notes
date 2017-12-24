---
layout: post
title: 3Sum Closest 
category: Wiki
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](//oj.leetcode.com/problems/3Sum-Closest/)Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

        For example, given array S = {-1 2 1 -4}, and target = 1.
        The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

<b>题意: </b>
在给定的序列中找出三个数使得他们的和最接近给定的目标数.

### 思路
[参考博客](//blog.csdn.net/martin_liang/article/details/8945659)通过固定一个数然后从剩下的数遍历出余下的两个数.即固定数[i]然后从i后面的部分用l=[i+1],r=[size-1]往中间收缩,直到找到最优解.

###### 代码

		int threeSumClosest(vector<int> &num, int target) 
        {
            int size = num.size(), ans = 0, diff = INT_MAX;
            sort(num.begin(), num.end());
            
            for(int i = 0; i < num.size(); ++i)
            {
                int l = i + 1;
                int r = size - 1;
                
                while(l < r)
                {
                    int curSum = num[i] + num[l] + num[r];
                    
                    if(curSum == target)
                    {
                        return curSum;
                    }
                    else if(curSum > target)
                    {
                        int curDiff = curSum-target;
                        if(diff > curDiff)
                        {
                            diff = curDiff;
                            ans = curSum;
                        }
                        --r;
                    }
                    else
                    {
                        int curDiff = target-curSum;
                        if(diff > curDiff)
                        {
                            diff = curDiff;
                            ans = curSum;
                        }
                        ++l;
                    }
                }
            }
            
            return ans;
        }