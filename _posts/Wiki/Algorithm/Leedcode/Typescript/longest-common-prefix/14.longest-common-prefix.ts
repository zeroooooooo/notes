/*
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (31.74%)
 * Total Accepted:    292K
 * Total Submissions: 920K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 * 
 * If there is no common prefix, return an empty string "".
 * 
 * Example 1:
 * 
 * 
 * Input: ["flower","flow","flight"]
 * Output: "fl"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 * 
 * 
 * Note:
 * 
 * All given inputs are in lowercase letters a-z.
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs: Array<string>): string => {
    if (strs.length === 0) {
        return '';
    }

    const firstStr = strs[0];
    const restStrs = strs.splice(1, strs.length - 1);
    let prefixStr = firstStr.substr(0, 1);

    let testStr: boolean;
    let len = firstStr.length;
    let i = 0; 
    while(i <= len) {
        testStr = restStrs.every((v: string): boolean => {
            return v.startsWith(prefixStr, 0);
        });

        if (!testStr) {
            prefixStr = prefixStr.substr(0, prefixStr.length - 1);
            return prefixStr;
        }

        prefixStr = firstStr.substr(0, ++i);
    }

    return prefixStr;
};
