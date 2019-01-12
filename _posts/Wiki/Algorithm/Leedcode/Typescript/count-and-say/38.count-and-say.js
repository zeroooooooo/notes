/*
 * [38] Count and Say
 *
 * https://leetcode.com/problems/count-and-say/description/
 *
 * algorithms
 * Easy (37.26%)
 * Total Accepted:    203.3K
 * Total Submissions: 545.6K
 * Testcase Example:  '1'
 *
 * The count-and-say sequence is the sequence of integers with the first five
 * terms as following:
 *
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 6.     312211
 *
 *
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 *
 *
 *
 * Given an integer n, generate the nth term of the count-and-say sequence.
 *
 *
 *
 * Note: Each term of the sequence of integers will be represented as a
 * string.
 *
 *
 * Example 1:
 *
 * Input: 1
 * Output: "1"
 *
 *
 *
 * Example 2:
 *
 * Input: 4
 * Output: "1211"
 *
 *
 */
/**
 * @param {number} n
 * @return {string}
 */
// we can tell the next string is the explanation of the pre string
var countAndSay = function (n) {
    var i = 1;
    var pre = '1';
    n -= 1;
    while (i <= n) {
        var j = 0;
        var next = '';
        var count = 1;
        for (; j < pre.length; j++) {
            if (pre[j] != pre[j + 1]) {
                next = next + ("" + count + pre[j]);
                count = 1;
            }
            else {
                ++count;
            }
        }
        i += 1;
        pre = next;
    }
    return pre;
};
