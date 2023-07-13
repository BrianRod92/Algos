// Validate Subsequence

// Given two non-empty arrays of integers, write a function that determines
// whether the second array is a subsequence of the first one.
// A subsequence of an array is a set of numbers that aren't necessarily adjacent
// in the array but that are in the same order as they appear in the array. For
// instance, the numbers. Note that a single number in an array and the array itself are both valid subsequences of the array.
// [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4]

function isValidSubsequence(array, sequence) {
    // I set a variable to be a place-holder for my index position in the sequence array
    let runner = 0;
    // I set a variable as an empty array to push in values whenever we find a match in the "array" (array) and the sequence (array)
    let checker = [];
    // I have a for-loop to iterate through the "array" (array)
    for(let i = 0; i < array.length; i++){
        // I am checking to determine if true or false for a match in the "array" (array) and sequence (array)
      if(array[i] === sequence[runner]){
        // if true I will push into the "checker" (array) the value from the sequence array based on the index we have found to be true in our if condition above
        checker.push(sequence[runner])
        // I will then increment runner by 1
        runner++;
        // console.log("check array", checker);
      } 
    }
    // The second for-loop will iterate through the sequence (array)
      for(let j = 0; j <= sequence.length; j++){
        //  I will check if the length of the checker array is equal to the sequence array, which will let us know that all elements are either present in both or not
      if(checker.length === sequence.length){
        // If all the elements from the sequence array are in the checker array we can evaluate the result to be true meaning we have a valid sequence
        return true;
      }
      else {
        // Otherwise we will determine that it is not a valid sequence, resulting in false
        return false;
      }
      }
  
  }
  console.log(isValidSubsequence([5,1,22,25,6,-1,8,10], [1,6,-1,10]))