/*
 * @lc app=leetcode id=1 lang=rust
 *
 * [1] Two Sum
 */
use std::collections::HashMap;
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
       let mut two_sum_hash_map = HashMap::with_capacity(nums.len());
       for (idx, &item) in nums.iter().enumerate() {
           let left_nums = target - item;
           if let Some(&i) = two_sum_hash_map.get(&left_nums) {
               return vec![i as i32, idx as i32]
           } else {
               two_sum_hash_map.insert(item, idx);
           }
       } 

       vec![]
    }
}

