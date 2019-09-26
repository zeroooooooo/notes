/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 */
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    // s.reverse();
    var len = s.length;
    var mid = Math.floor(len / 2);
    for (var i = 0; i < mid; i++) {
        var temp = s[i];
        s[i] = s[len - 1 - i];
        s[len - 1 - i] = temp;
    }
};
