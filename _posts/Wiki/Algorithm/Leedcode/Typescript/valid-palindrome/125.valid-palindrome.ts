/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function(s: string): boolean {
  if (s === '') return true;

  let sa = s.replace(/\W/g, '').toLowerCase().split('');

  return sa.join() === sa.reverse().join();
};

