/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s: string, t: string) {
  s = s.split('').sort().join('');
  t = t.split('').sort().join('');

  return s === t;
};

