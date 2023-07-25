// Transpose Matrix 

// You've given a 2D array of integers matrix. Write a function that returns the transpose of the matrix. 
// The transpose of a matrix is flipped version of the original matrix its main diagonal (which runs from top-left); it switches the row and column indices of the original matrix. 

// You can assume the input matrix always has at least 1 value, however its width and height are not necessarily the same. 


// Sample code #1
// matrix = [[1,2]]

// Sample Output #1
// [[1], [2]]

// Sample code #2
// matrix = 
// [
// [1,2],
// [3,4],
// [5,6],
// ]

// Sample Output #2
// [
// [1,3,5], 
// [2,4,6],
// ]

function transposeMatrix(matrix) {
  
    // Created a variable that stored the row count & column   
    // count
    let rows = matrix.length;
    let columns = matrix[0].length;
  
    // Created an empty array to store the transposed Matrix
    let newMatrix = []; // main array
  
    // For loop that iterates through the columns count so we can stop at the amount of indices inside the nested arrays
    for(let i = 0; i < columns; i++){
      
      // We push the necessary amount of arrays based on the iteration of the columns count
      newMatrix.push([]);
  
      // For loop that iterates through the length of rows in the Matrix array
      for(let j = 0; j < rows; j++){
  
        // newMatrix[i] - gives access to the arrays we pushed          in the newMatrix array
        // matrix[j][i] - gives access to the value in the              nested arrays of the matrix array. So we can add             the value to the nested array in the newMatrix               array.
        newMatrix[i].push(matrix[j][i]);
        
      }
    
    }
    
    return newMatrix;
    
  }
  
  console.log(transposeMatrix([[1,2],[3,4],[5,6]]));