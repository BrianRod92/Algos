// Problem: Evaluate Postfix Expression

// Description:
// The task is to evaluate a given postfix expression. A postfix expression is an expression in which each operator is placed after its operands. For example, the infix expression 2 + 3 is written as 2 3 + in postfix notation.

// Input:

// postfixExp: A string containing a valid postfix expression.
// The postfix expression will consist of digits and operators: '+', '-', '*', '/'
// Output:

// The function should return the result of the evaluated postfix expression as an integer.

// Example:

// Input: postfixExp = "6 3 + 5 * 2 /"
// Output: 20
// Explanation: The postfix expression "6 3 + 5 * 2 /" can be evaluated as (6 + 3) * 5 / 2 = 20.

// Input: postfixExp = "10 5 * 2 / 5 +"
// Output: 7
// Explanation: The postfix expression "10 5 * 2 / 5 +" can be evaluated as (10 * 5) / 2 + 5 = 7.

// v
let postfixExp = "6 3 + 5 * 2 /";
const evaluatePostfixExpression = function (postfixExp) {
  // We split the postfixExp so it becomes an array without any spaces
  postfixExp = postfixExp.split(/\s+/);
  // We initialize a varible to store an empty array
  let stack = [];
  // We initialize a variable to store the result
  let result = 0;
  // We iterate through the postfixExp array
  for (let i = 0; i < postfixExp.length; i++) {
    // We initialize a temp variable to store the current index of the postfixExp array. For cleaner code purposes.
    let tempIdx = postfixExp[i];
    // We check conditionally for a number in the postfixExp array
    if (!isNaN(tempIdx)) {
      // We parse the current index if it's a number into a number
      tempIdx = parseInt(tempIdx);
      // We push the number into the stack array
      stack.push(tempIdx);
    }
    // We conditionally check in the postfixExp array if we found an operator
    if (postfixExp.includes(tempIdx)) {
      // We declare a varibale to hold the current operator
      let operator = postfixExp[i];
      // console.log(operator);

      // We pop the last pushed number from the stack array
      let op1 = stack.pop();

      // We pop the number before the last number pushed into the stack array
      let op2 = stack.pop();

      // Below we do various nested conidtional checks for the operators at the current index and perform the necessary operations dependent on the operator itself. At each conditional check, after the operation is stored in the result variable, we then push the result into the stack array.

      if (tempIdx.includes("*")) {
        console.log("I found a *");
        result = op1 * op2;
        stack.push(result);
        console.log("I pushed a product", result);
      }

      if (tempIdx.includes("+")) {
        console.log("I found a +");
        result = op1 + op2;
        stack.push(result);
        console.log("I pushed a sum", result);
      }

      if (tempIdx.includes("/")) {
        console.log("I found a /");
        result = op2 / op1;
        // console.log("This should have a 50 and 2", stack)
        stack.push(result);
        console.log("I pushed a quotient", result);
      }

      if (tempIdx.includes("-")) {
        console.log("I found a -");
        result = op1 - op2;
        stack.push(result);
        console.log("I pushed the difference", result);
      }
    }
  }
  console.log(stack);
  return stack;
};

evaluatePostfixExpression(postfixExp);
