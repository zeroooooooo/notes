/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    var MIN = -2147483648;
    var MAX = 2147483647;
    var num = parseInt(str);
    return num < 0 ? (num < MIN ? MIN : num) : (num > MAX ? MAX : num);
};
