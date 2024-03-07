

var twoSum = function(nums, target) {
    const map = {}; // Initialize an empty hashmap to store the complement of each element
    for (let i = 0; i < nums.length; i++) {
        // nums + x = target // x = complement // target - nums = complement
        const complement = target - nums[i]; // Calculate the complement
        if (map[complement] !== undefined) {
            // If the complement exists in the hashmap, return the indices
            return [map[complement], i];
        }
        map[nums[i]] = i; // Store the current element and its index in the hashmap
    }
};

// Example 1
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log("Example 1:", twoSum(nums1, target1));

// Example 2
const nums2 = [3, 2, 4];
const target2 = 6;
console.log("Example 2:", twoSum(nums2, target2));

// Example 3
const nums3 = [3, 3];
const target3 = 6;
console.log("Example 3:", twoSum(nums3, target3));
