/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums: Array<number>) {
  let num = nums[0];
  for (let i = 1; i < nums.length; ++i) {
    num = num ^ nums[i];
  }

  return num;
};

