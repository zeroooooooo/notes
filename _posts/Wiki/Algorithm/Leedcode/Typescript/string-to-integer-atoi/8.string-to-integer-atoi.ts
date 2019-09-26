/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = function(str: string) {
  const MIN = -2147483648;
  const MAX = 2147483647;
  const num = parseInt(str);

  return num < 0 ? (num < MIN ? MIN : num) : (num > MAX ? MAX : num);
};

