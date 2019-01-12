/*
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (38.19%)
 * Total Accepted:    913.2K
 * Total Submissions: 2.4M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers, return indices of the two numbers such that they
 * add up to a specific target.
 * 
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 * 
 * Example:
 * 
 * 
 * Given nums = [2, 7, 11, 15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * 
 * 
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = (nums: Array<number>, target: number): Array<number> => {
    let res: Array<number> = [];
    nums.some((element, index) => {
        const difference: number = target - element;
        const diffIndex: number = nums.indexOf(difference);
        if (index !== diffIndex && diffIndex !== -1) {
            res.push(index, diffIndex);

            return true;
        }
    });

    return res;
}
