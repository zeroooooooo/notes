---
layout: post
title: Climbing Stairs 
category: Tech
tags: Leecode
type: Algorithm
---

###题目
[原题: ](http://oj.leetcode.com/problems/climbing-stairs/)You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

<b>题意: </b>给定n阶台阶.每次只能爬一步或者两步,求登上顶端的方式有多少种

###思路
可以从顶端往下分析,若最后差一步到达顶端,则登上顶端的方式数应该等于sum(n-1),若最后差两步到达顶端,则登上顶端的方式数应该等于sum(n-2),所以sum(n)=sum(n-1)+sum(n-2),即斐波那契数列.

######代码

		int climbStairs(int n) 
	    {
	        int ans[1000] = {0,1,2};
	        
	        for(int i = 3; i <= n; ++i)
	        {
	            ans[i] = ans[i-1] + ans[i-2];
	        }
	        
	        return ans[n];
	    }

#####更好的方法

		int climbStairs(int n) 
	    {
	        if(n<=1)
	        {
	            return 1;
	        }
	        int pre = 1, cur = 1, next = 0;
	        for(int i = 2; i <= n; ++i)
	        {
	            next = pre + cur;
	            pre = cur;
	            cur = next;
	        }
	        return cur;
	    }

