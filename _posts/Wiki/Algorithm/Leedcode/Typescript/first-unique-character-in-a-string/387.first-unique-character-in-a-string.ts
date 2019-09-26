/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */
/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s: string) {
  let count: {
    [property: string]: number
  } = {};

  for(let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]] += 1;
    } else {
      count[s[i]] = 1;
    }
  }

  for(let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) return i;
  }

  // for(let i = 0; i < s.length; i++) {
  //   if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return i;
  // }

  return -1;
};

