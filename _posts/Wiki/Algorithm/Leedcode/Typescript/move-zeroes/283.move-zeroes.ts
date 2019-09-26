/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function(nums: number[]) {
  let count = 0;
  for(let i = 0; i < nums.length - count;) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
      count ++;
    } else {
      i++;
    }
  }
};

