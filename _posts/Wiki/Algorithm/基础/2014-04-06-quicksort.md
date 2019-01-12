---
layout: post
title: 快速排序
category: Wiki
tags: 基础
type: Algorithm
isUseGitComment: false
isUseDisqusComment: true
---

### 快速排序的基本思想

快排的基本思想是通过一个随机取出的枢元,然后通过对整个数组进行前后扫描,扫描完一次后就会出现枢元的左边都小于枢元,右边都大于枢元,然后一直递归下去直到分割得到的数组只剩下一个元素时即结束,这样就可以实现快排了.基本步骤如下:

+ 如果S中元素的个数为0或者是1则返回
+ 随机取出S中一个元素V,作为比较的中值(可以取头尾或者是中间值这样会比较方便一点)
+ 将S-{V}(S中其余的元素)划分为两个不想交的集合,即小于{V}和大于{V}的两部分
+ 最后返回{小于V的集合}+{V}+{大于V集合}即为结果

### js实现
##### 下面的这个代码是一篇博客里引用过来的,写的非常的简洁:[参考代码](//hankunfang.blog.163.com/blog/static/18842839620128372121678/)


		var aData = [8, 1, 4, 9, 6, 3, 5, 2, 7, 0];
	    function quickSort(arr)
	    {
	        if (arr.length <= 1) {return arr};
	        var pivotIndex = Math.floor(arr.length/2);
	        var pivot = arr.splice(pivotIndex,1)[0];
	        var left = [];
	        var right = [];
	        for (var i = 0; i < arr.length; i++) 
	        {
	            if (arr[i] < pivot) 
	            {
	                left.push(arr[i]);
	            }
	            else
	            {
	                right.push(arr[i]);
	            }
	        }
	        return quickSort(left).concat([pivot], quickSort(right));
	    }
	    quickSort(aData);

### c++实现
		
		#include <iostream>
	    #include <cmath>
	    using namespace std;
	    int aData[] = {8, 1, 4, 9, 6, 3, 5, 2, 7, 0};
	    void show(int s[])
	    {
	        for (int i = 0; i < 10; ++i)
	        {
	            cout << s[i] << ", ";
	        }
	        cout << endl;
	    }
	    //采用数组的第一个,中间,最后一个进行排序然后去中间那个数作为枢元
	    int chooseFlag(int first, int mid, int end)
	    {
	        if (aData[first] > aData[mid]) 
	        {
	            swap(aData[first], aData[mid]);
	        }
	        if (aData[first] > aData[end]) 
	        {
	            swap(aData[first], aData[end]);
	        }
	        if (aData[mid] > aData[end]) 
	        {
	            swap(aData[mid], aData[end]);
	        }
	        swap(aData[mid], aData[end-1]);
	        return aData[end-1];
	    }
	    void quickSort(int s[], int begin, int end)
	    {
	        /*
	            如果只有两个数,那么直接比较
	        */
	        if (end-begin==1)
	        {
	            if (aData[begin] > aData[end])
	            {
	                swap(aData[begin], aData[end]);
	            }
	        }
	        //三个数以上的话就采用快排
	        else if (end-begin > 1)
	        {
	            int flag = chooseFlag(begin, (begin+end)/2, end);
	            int i, j;
	            i = begin;
	            j = end-1;
	            while( 1 )
	            {
	                while(aData[++i] < flag);
	                while(aData[--j] > flag);
	                if (i < j) 
	                {
	                    swap(aData[i], aData[j]);
	                }
	                else
	                {
	                    break;
	                }
	            }
	            swap(aData[i], aData[end-1]);
	            quickSort(aData,begin, i-1);
	            quickSort(aData, i+1, end);
	        }
	    }
	    int main ()
	    {
	        show(aData);
	        cout << endl;
	        quickSort(aData, 0, 9);
	        show(aData);
	    }