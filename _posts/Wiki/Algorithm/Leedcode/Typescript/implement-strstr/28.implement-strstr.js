/*
 * [28] Implement strStr()
 *
 * https://leetcode.com/problems/implement-strstr/description/
 *
 * algorithms
 * Easy (29.12%)
 * Total Accepted:    288.3K
 * Total Submissions: 980.4K
 * Testcase Example:  '"hello"\n"ll"'
 *
 * Implement strStr().
 *
 * Return the index of the first occurrence of needle in haystack, or -1 if
 * needle is not part of haystack.
 *
 * Example 1:
 *
 *
 * Input: haystack = "hello", needle = "ll"
 * Output: 2
 *
 *
 * Example 2:
 *
 *
 * Input: haystack = "aaaaa", needle = "bba"
 * Output: -1
 *
 *
 * Clarification:
 *
 * What should we return when needle is an empty string? This is a great
 * question to ask during an interview.
 *
 * For the purpose of this problem, we will return 0 when needle is an empty
 * string. This is consistent to C's strstr() and Java's indexOf().
 *
 */
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
// const strStr = (haystack: string, needle: string): number => {
//     return haystack.indexOf(needle);
// };
var strStr = function (haystack, needle) {
    var match = haystack.match(needle);
    return match ? match.index : -1;
};
