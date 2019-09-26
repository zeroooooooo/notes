/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
export var isPalindrome = function (s) {
    if (s === '')
        return true;
    var sa = s.replace(/\W/g, '').toLowerCase().split('');
    return sa.join() === sa.reverse().join();
};
