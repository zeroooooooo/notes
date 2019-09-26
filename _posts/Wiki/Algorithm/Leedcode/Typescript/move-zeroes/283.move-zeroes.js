/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var count = 0;
    for (var i = 0; i < nums.length - count;) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            count++;
        }
        else {
            i++;
        }
    }
};
