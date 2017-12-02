---
layout: post
title: Reverse Integer 
category: Tech
tags: Leecode
type: Algorithm
---

### 题目
[原题: ](http://oj.leetcode.com/problems/reverse-integer/)Reverse digits of an integer.

<b>Example1: </b>x = 123, return 321
<b>Example2: </b>x = -123, return -321

<b>Have you thought about this?</b>

Here are some good questions to ask before coding. Bonus points for you if you have already thought through this!
If the integer's last digit is 0, what should the output be? ie, cases such as 10, 100.
Did you notice that the reversed integer might overflow? Assume the input is a 32-bit integer, then the reverse of 1000000003 overflows. How should you handle such cases?
Throw an exception? Good, but what if throwing an exception is not an option? You would then have to re-design the function (ie, add an extra parameter).

<b>题意: </b>反转一个整数
<b>注意: </b>要考虑到结尾为0和可能会溢出的情况

### 思路很简单直接上代码

		int reverse(int x) 
        {
            int ans = 0;
            int flag = 1;;
            if(x<0)
            {
                x *= -1;
                flag = -1;
            }
            
            while(x)
            {
                ans = ans*10 + x%10;
                x /= 10;
            }
            
            return ans*flag;
        }