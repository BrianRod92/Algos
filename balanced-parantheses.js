// Problem: Balanced Parentheses

// Description:
// The task is to determine if a given string containing only parentheses ('(', ')', '[', ']', '{', '}') is "balanced" or not. A string is considered balanced if each opening parenthesis has a corresponding closing parenthesis of the same type, and they are properly nested.

// Input:

// inputStr: A string containing only parentheses.
// Output:

// The function should return a boolean value indicating whether the input string is balanced or not.

// Example:

// Input: "(([]))"
// Output: true
// Explanation: The input string "(([]))" contains balanced parentheses.

// Input: "({[})"
// Output: false
// Explanation: The input string "({[})" does not contain balanced parentheses.

const isBalancedParentheses = function(inputStr) {
    // Create a variable to store an empty string (The goal is to concat each matching element from the inputStr into the empty string)
    // We must iterate through the inputStr using a for loop
    // We must check if the current char has a matching closer, if true break and push into temp. Otherwise return false.  
    let temp = [];
    for(let i= 0; i < inputStr.length; i++){
      
      for(let j = inputStr.length -1; j > 0; j--){
        
        if(inputStr[i] === "(" && inputStr[j] === ")"){
          temp.push(inputStr[i],inputStr[j]);
          break;
        }
        
        if(inputStr[i] === "{" && inputStr[j] === "}"){
          temp.push(inputStr[i],inputStr[j]);
          break;
        }
        
        if(inputStr[i] === "[" && inputStr[j] === "]"){
        temp.push(inputStr[i],inputStr[j]);
        break;
      }
        
        }
    }
    console.log(temp);

    if(inputStr.length === temp.length){
      return true;
    }
    else{
      return false;
    }
    
  };
  
  console.log(isBalancedParentheses("({[})"));