---
layout: post
title: 全排列
category: Wiki
tags: 基础
type: Algorithm
isUseGitComment: true
isUseDisqusComment: false
---

### 全排列
##### [参考博客](//blog.csdn.net/e3399/article/details/7543861)

比如说有一组数,{a, b, c, d},然后全排列就是将a为首位时{b, c, d}的全排列求出,而{b, c, d}的全排列又是以b为首位时{c, d}的全排列求出,以此类推最后就是{d}的全排列,即是它本身,然后改变首位的数值,生成一个新的序列即{b, a, c, d},在继续求这串序列的全排列就好了,所以步骤如下:

+ 判断是否已经递归到数组末尾,若是则输出此刻的序列
+ 在还没到数组末尾时在循环中不断的将首位的值与后面的值进行交换,不断的递归下去,获得新的序列输出
+ 在获得新的序列后要将交换的值交换回来以便获取新的序列


		#include <iostream>
		using namespace std;

		void permutation(int a[], int begin, int end)
		{
		    //如果已经递归到最后一个数则输出当前的新序列
		    if (begin==end)
		    {
		        for (int i = 0; i <= end ; ++i)
		        {
		            cout << a[i] << " ";
		        }
		        cout << endl;
		        return;
		    }
		    else
		    {
		        int i = begin;
		        //遍历第一个位置的所有情况
		        for (; i <= end ; ++i)
		        {

		            swap(a[i], a[begin]);           //不断的交换第一个和后面的数值获取新的序列
		            permutation(a, begin+1, end);   //不断的递归下去直到只剩一个元素时输出新的序列
		            swap(a[i], a[begin]);           //输出新的序列后要将交换的值交换回来重新生成新的序列
		        }
		    }
		}
		int main ()
		{
		    int a[3] = {1, 2, 3};
		    permutation(a, 0, 2);
		}