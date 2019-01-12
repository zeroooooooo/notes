/*
 * [66] Plus One
 *
 * https://leetcode.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (39.89%)
 * Total Accepted:    261.7K
 * Total Submissions: 656.1K
 * Testcase Example:  '[1,2,3]'
 *
 * Given a non-empty array of digits representing a non-negative integer, plus
 * one to the integer.
 * 
 * The digits are stored such that the most significant digit is at the head of
 * the list, and each element in the array contain a single digit.
 * 
 * You may assume the integer does not contain any leading zero, except the
 * number 0 itself.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3]
 * Output: [1,2,4]
 * Explanation: The array represents the integer 123.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,3,2,1]
 * Output: [4,3,2,2]
 * Explanation: The array represents the integer 4321.
 * 
 * 
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits: Array<number>): Array<number> => {
    let num: number = Number(digits.join('')) + 1;

    let newDigits = num.toString().split('').map(v => {
        return Number(v);
    })

    let revDigis: Array<number> = digits.reverse();
    let carry: number = revDigis[0] + 1;

    if (carry < 10) {
        revDigis[0] = carry;
        return revDigis.reverse();
    }

    carry = 1;
    revDigis = revDigis.map(v => {
        let cur: number = carry + v;

        if (cur >= 10) {
            carry = Math.floor(cur / 10);
            cur = cur % 10;
        } else {
            carry = 0;
        }

        return cur;
    })

    if (carry > 0) revDigis.push(carry);

    return revDigis.reverse();
};
