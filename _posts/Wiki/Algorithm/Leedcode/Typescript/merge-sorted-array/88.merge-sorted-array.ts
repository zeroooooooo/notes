/*
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (32.69%)
 * Total Accepted:    250.3K
 * Total Submissions: 765.7K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1: Array<number>, m: number, nums2: Array<number>, n: number): void => {
    let i = 0;
    let total = m + n;
    for(; i < n; i++) {
        nums1[m + i] = nums2[i]; 
    }

    i = 0;
    for(; i < total - 1; i++) {
        let j = i + 1;
        for(; j < total; j++) {
            if (nums1[i] > nums1[j]) {
                let swap = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = swap;
            }
        }
    }
};
