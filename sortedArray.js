
// Sorted Squared Array

//   Write a function that takes in a non-empty array of integers that are sorted
//   in ascending order and returns a new array of the same length with the squares
//   of the original integers also sorted in ascending order.

// array = [1,2,3,4,5,6,7,8]

// output = [1,4,9,16,25,36,49,64]

function sortedSquaredArray(array) {
    let newArray = [];
    
    if(array.length === 0){
      return [];
    }
    
    for(let i = 0; i < array.length; i++){ 
      if(array[i] < 0){
        array[i] = -array[i];
      }
      newArray.push(array[i] * array[i])
    }
    newArray.sort(function(a, b){
      return a - b;
    })
    console.log(newArray);
    return newArray;
  }
  
  sortedSquaredArray([-50, -13, -2, -1, 1, 0, 1, 20, 2, 19, 3, 0])