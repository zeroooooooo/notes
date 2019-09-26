/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums: Array<number>): boolean {
  return nums.length !== new Set(nums).size;
};

