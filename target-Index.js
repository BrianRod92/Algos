// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.
function targetIndexSum(nums, target){
    // We have an array of integers called nums
    // We must return the two indices that add up to the target
    // We will use an array to store the two indices
    let sumIdx = [];
    
    // We will use a forloop to iterate through the nums array 
    for(let i = 0; i < nums.length; i++){
    // We will check if two indices add to the target
      if(nums[i] + nums[i+1] === target){
        sumIdx.push(i, i+1);
      }
      
    }
    return sumIdx;
  }
  
  console.log(targetIndexSum([3,2,4], 6));
  
  // Example 1:
  
  // Input: nums = [2,7,11,15], target = 9
  // Output: [0,1]
  // Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
    
  // Example 2:
  
  // Input: nums = [3,2,4], target = 6
  // Output: [1,2]
    
  // Example 3:
  
  // Input: nums = [3,3], target = 6
  // Output: [0,1]