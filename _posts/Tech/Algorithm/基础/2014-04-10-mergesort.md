---
layout: post
title: 归并排序
category: Tech
tags: 基础
type: Algorithm
---

###归并排序的基本思想
#####[参考博客](http://blog.csdn.net/morewindows/article/details/6678165)

归并排序的思想就是将给定的序列进行递归切割,直到序列被切割为两组各有一个值的序列,这个时候在两个序列中他们都是有序的,然后将这个有序的序列进行合并,合并的过程就是不断的将两组序列的首位进行比较,取出较小的那一个存在临时数组中,然后被取出值的那个序列索引值向后移动一位,直到有一个序列的值被取完,循环结束,然后将另一个序列所剩余的值全部拼接到临时数组中,因为合并之前他们就是有序的了,所以直接合并,合并完后可以将临时存储的序列段覆盖原序列相同位置的数值,所以要记得覆盖原序列时,原序列的位置是从所传入的开始位置开始的.步骤如下:

+ 只要切割得到的两边的序列的数值个数不为1则不断的切割下去
+ 当两边序列都为有序序列时进行序列合并
+ 序列合并的基本步骤就是不断的取出两组序列的首位进行比较,取得较小的存到临时数组中,然后被取出值的序列索引加一
+ 一组序列的值被取完时,将另一组序列的剩余值拼接到临时存储的数组中
+ 最后将临时存储的数组中的值覆盖原序列中相应位置的值,覆盖位置从传入的begin位置开始


		#include <iostream>
		using namespace std;

		/*
			归并排序即是不断的将两个有序的序列合并为一个序列,所以对于给出的序列来说,既是不断的将递归切割得到的小序列合并
			下面就是将序列的前半部分和后半部分合并
		*/
		void mergeArray(int origin[], int begin, int mid, int end, int temp[])
		{
			int i = begin, j = mid + 1, k = 0;
			int lSize = mid;
			int rSize = end;

			/*
				归并的过程其实就是将两个序列的头元素不断进行比较取出较小的,然后被取出值的序列向后移动一下位置
			*/
			while( i <= lSize && j <= rSize )
			{
				if (origin[i] <= origin[j] )
				{
					temp[k++] = origin[i++];
				}
				else
				{
					temp[k++] = origin[j++];
				}
			}
			/*
				有一段序列会优先被取完,则剩下的序列是有序的直接拼接到临时数组里面就好了
			*/
			while(i<=lSize)
			{
				temp[k++] = origin[i++];
			}
			while(j<=rSize)
			{
				temp[k++] = origin[j++];
			}

			//将重新生成的序列覆盖原来的序列值
			for (int i = 0; i < k; ++i)
			{
				//因为递归的过程中会按照顺序先将序列的某一节先排好序,所以这里的origin的位置覆盖应该是从begin+0开始的
				origin[begin+i] = temp[i];
			}
		}

		void mergeSort(int a[], int begin, int end, int temp[])
		{
			/*
				归并的递归切割过程就是把序列不断切割直到两组序列只剩下一个元素时,即两组序列都是有序的,然后就开始合并
			*/
			if (begin < end)
			{
				int mid = (begin+end)/2;
				mergeSort(a, begin, mid, temp); //不断切割直到左边有序
				mergeSort(a, mid+1, end, temp); //不断切割直到右边有序
				mergeArray(a, begin, mid, end, temp); //合并所生成的两个有序的序列
			}
		}

		void show(int a[], int n)
		{
			for (int i = 0; i < n; ++i)
			{
				cout << a[i] << " ";
			}
			cout << endl;
		}

		int main(int argc, char const *argv[])
		{
			int a[10] = {8, 1, 4, 9, 6, 3, 5, 2, 7, 0};
			int ans[10];
			mergeSort(a, 0, 9, ans);
			show(a, 10);
			getchar();
			return 0;
		}

