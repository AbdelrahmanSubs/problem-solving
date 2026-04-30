// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

var getConcatenation = function(nums) {
    let ans = [...nums,...nums]

    return ans;
};

getConcatenation([1,2,1])


//Best Practice that I found : 
// var getConcatenation = function(nums) {
//     return nums.concat(nums)
// };