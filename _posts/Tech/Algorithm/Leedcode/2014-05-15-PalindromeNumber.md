---
layout: post
title: Palindrome Number
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](http://oj.leetcode.com/problems/palindrome-number/)Determine whether an integer is a palindrome. Do this without extra space.

<b>题意: </b>判断给定的数是否是回文数,不能使用额外的空间,还要注意溢出等问题

### 思路
一种方法是通过求的原数反过来的数然后判断是否等于原来的数,另外一种是可以先求出数的位数,然后每次取得数的首尾两位进行判断看是否相等,然后数不断的缩短.

###### 代码(方法1)

		bool isPalindrome(int x) 
        {
            if(x<0)
            {
                return false;
            }
            long long ans = 0;
            int temp = x;
            while(x)
            {
                ans = ans*10 + x%10;
                x /= 10;
            }
            
            return ans == temp;
        }

###### 代码(方法2)

		bool isPalindrome(int x) 
        {
            if(x < 0)
            {
                return false;
            }
            int median = 1;
            while(x/median >= 10)
            {
                median *= 10;
            }
            while( x != 0)
            {
                int l = x/median;
                int r = x%10;
                if(l != r)
                {
                    return false;
                }
                x = (x%median)/10;
                median /= 100;
            }
            
            return true;
        }