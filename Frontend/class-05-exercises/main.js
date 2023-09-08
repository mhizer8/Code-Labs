// exercise 1
// Given the code snippet. Explain what scopes are in this current context of the code.
function outerFunction() {
    let outerVar = "I'm outside!";

    function innerFunction() {
        let innerVar = "I'm inside!";
        console.log(outerVar); // Can we access outerVar? -- yes, local scopes
        console.log(innerVar); // Can we access innerVar? -- yes
    }

    innerFunction();
}
outerFunction();


//exercise 2
// Draft a JavaScript function where you call a function before its declaration.
// Analyze the behavior and understand how hoisting impacts the outcome.
// function mainFunction() {
//     // Call the hoistedFunction here
//     console.log(hoistedFunction);
//     // Now, declare the hoistedFunction below
//     let hoistedFunction='';
// } //cannot call function because must declare variable before calling it

// mainFunction();


//exercise 3
//Develop a JavaScript function that returns another function.
// The inner function should have access to variables from the outer function's scope.
function getPet() {
    let pet1 = 'Dog';
    console.log(`I have a ${pet1}`);
    function getAnotherPet() {
        let pet2 = 'Cat';
        console.log(`I have a ${pet1} and a ${pet2}`)
    }
    
}


//exercise 4
// Declare a global variable outside of any function.
// Create a function that tries to modify that global variable.
// Create another function that declares a local variable with the same name.
// Observe the behavior when calling both functions.

// Declare a global variable here
let cat = 'Znaeb';

function modifyGlobal() {
    // Try to modify the global variable here
    let cat = "That's not Znaeb!";
    console.log(cat)
}

function localScopeTest() {
    // Declare a local variable with the same name as the global variable
    let cat = "That's not even a cat"
    console.log(cat)
}

// Call both functions here
console.log(cat);
console.log(modifyGlobal(cat));
console.log(localScopeTest())


//exercise 5
// Design a function that accepts a parameter.
// The function should return another function that uses the parameter in some way.
param = 'Hello'

function functionFactory(param) {
    // Return a function that makes use of 'param'

}
console.log(functionFactory())

// Create an instance of the inner function by invoking functionFactory with a parameter


//exercise 6
//Declare a variable after a console.log statement that tries to print that variable. Observe the behavior, and deduce how JavaScript hoists variable declarations.
function hoistingTest() {
    // Try printing a variable here

    // Declare the variable after the console.log
}

hoistingTest();


//exercise 7
// Create a function that sets up a counter using closures.
// The outer function should define a count variable.
// The inner function should increment and print the count each time it's invoked.
function setupCounter() {
    // Define a count variable here
    let count = 0;
    function countUp() {
        count++;
        // Increment and print the count
    }
    return countUp;
    console.log()
}

console.log(setupCounter())
// Create a counter instance and invoke it to test


//exercise 8
// Create a function that initializes a counter variable. This function should return another function.
// The returned function, when invoked, should increment the counter and print its value. However, if the counter reaches a certain value (e.g., 10), it should reset itself.
// Notice how hoisting affects the behavior when you try to declare and initialize the counter after referencing it.
// Comment on the role of closure in maintaining the counter's state across multiple invocations of the returned function.


//exercise 9
// Define two functions: one that modifies a global variable and another that tries to modify a local variable (which is not yet declared).
// Inside the second function, declare and initialize the local variable after attempting to modify it. Observe how hoisting comes into play.
// Now, make use of closures: Modify the first function so that it becomes a factory function returning another function. This inner function should use the outer function's variables.
// Reflect on how the local scope of the outer function is preserved for the inner function through closures, even after the outer function has finished execution.
let globalvar = 'Global'

function modGlobal() {
    
}

function modLocal() {
    
}