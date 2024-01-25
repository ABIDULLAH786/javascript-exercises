//  Function Statement/Declaration
function statementFun(){
    console.log("statementFun is Called")
}
statementFun();
// Function Expression
const expressionFun = function(){
    console.log("expressionFun is Called")
}
expressionFun();
// What is the difference B/W function expression and function statement
/**
Answer: The differenc between them is that the function statement can hoisted where the function expression can not. 
During execution statementFun is assignened a memory and function is assigned to it, and on other hand 
the memory is assigned to expressionFun with the function only if the line execution is reached. 

*/



// Anonymous Function
// Anonymous function are used in a place where function are used as values. like we can use anonymous function as a function expression
let anonymousFun =  function (){ 
    console.log("Anonymous Function is Called")
}

// Named Function Expression
// If we use named function with the expression function instead of anonymous function it is called Named Function Expression
let namedFunExpression = function nfe(){
    console.log("Named Function Expression is Called")
}

// Difference Between
//i) Parameter and Argument
/**
 * Parameters: at the time of creating function whatever are inside the small braces are called the parameters
 * Arguments: at the time of calling function the data we pass inside small braces are called arguments
 */
//ii) First Class Function / First Class Citizens
// The ability of functions to be used as values and can be passed as argument to another function and can be return from the functions is called First Class Functions in JS
//iii) Arrow Function
// 