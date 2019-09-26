/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    // 考虑到k有可能大于数组长度 所以需要获取最终小于长度的步数
    k %= nums.length;
    nums.unshift.apply(nums, nums.splice(-k, k));
};
