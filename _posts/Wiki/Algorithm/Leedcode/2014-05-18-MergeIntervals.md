---
layout: post
title: Merge Intervals
category: Wiki
tags: Leecode
type: Algorithm
isUseGitComment: true
isUseDisqusComment: false
---

### 题目
[原题: ](//oj.leetcode.com/problems/merge-intervals/)Given a collection of intervals, merge all overlapping intervals.

<b>For example:</b>

		Given [1,3],[2,6],[8,10],[15,18],
		return [1,6],[8,10],[15,18].

<b>题意: </b>合并重复的区间,看案例很容易看懂

### 思路
首先先将vector按照start进行排序,然后扫描一遍vector将可以合并的区间合并生成一个新的Interval然后存入新的vector.

###### 代码

		static bool comp(Interval A, Interval B)
	    {
	        return A.start < B.start;
	    }
	    vector<Interval> merge(vector<Interval> &intervals) 
	    {
	        if(intervals.size() < 2)
	        {
	            return intervals;
	        }
	        sort(intervals.begin(), intervals.end(), comp);
	        vector<Interval> ans;
	        Interval temp = intervals[0];
	        
	        for(int i = 1; i < intervals.size(); ++i)
	        {
	            if(intervals[i].start > temp.end)
	            {
	                ans.push_back(temp);
	                temp = intervals[i];
	            }
	            else
	            {
	                temp.end = max(temp.end, intervals[i].end);
	            }
	        }

	        /*最后一组元素无论是能够和前面的区间合并还是不能合并temp都会有剩余一组,所以最后要再一次将temp存进新的vetor中*/
	        
	        ans.push_back(temp);     

	        return ans;
	    }