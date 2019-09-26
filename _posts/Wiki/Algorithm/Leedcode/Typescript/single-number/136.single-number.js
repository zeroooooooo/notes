/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    var num = nums[0];
    for (var i = 1; i < nums.length; ++i) {
        num = num ^ nums[i];
    }
    return num;
};
