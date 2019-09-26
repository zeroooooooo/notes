/*
 * @lc app=leetcode id=349 lang=javascript
 *
 * [349] Intersection of Two Arrays
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1: number[], nums2: number[]) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  let com: number[] = [];
  for (var i = 0, j = 0; i < nums1.length, j < nums2.length;) {
    if (nums1[i] === nums2[j]) {
      com.push(nums1[i]);
      i++; j++;
    }
    else if (nums1[i] < nums2[j]) {
      i++;
    }
    else {
      j++;
    }
  }

  return Array.from(new Set(com));
};

