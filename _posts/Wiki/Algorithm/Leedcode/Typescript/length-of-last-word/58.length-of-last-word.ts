/*
 * [58] Length of Last Word
 *
 * https://leetcode.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (32.08%)
 * Total Accepted:    200.1K
 * Total Submissions: 623.8K
 * Testcase Example:  '"Hello World"'
 *
 * Given a string s consists of upper/lower-case alphabets and empty space
 * characters ' ', return the length of last word in the string.
 * 
 * If the last word does not exist, return 0.
 * 
 * Note: A word is defined as a character sequence consists of non-space
 * characters only.
 * 
 * Example:
 * 
 * Input: "Hello World"
 * Output: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = (s: string): number => {
    let len: number = 0;
    const arr: Array<string> = s.trim().split(' ');
    const arrLen: number = arr.length;

    len = arrLen > 0 ? arr[arrLen-1].length : len;
    return len;
};
