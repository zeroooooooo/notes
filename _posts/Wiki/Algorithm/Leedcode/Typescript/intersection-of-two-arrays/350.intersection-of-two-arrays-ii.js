/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    nums1.sort(function (a, b) { return a - b; });
    nums2.sort(function (a, b) { return a - b; });
    var com = [];
    for (var i = 0, j = 0; i < nums1.length, j < nums2.length;) {
        if (nums1[i] === nums2[j]) {
            com.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return com;
};
