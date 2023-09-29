//class 3 - exercise 2

let me: string = 'Madison';

console.log(me)

//class 3 - exercise 3

function area (a:number, b:number):number {
    let rArea:number = a * b;
    return rArea;
};
console.log(area(4,4))

//class 3 - exercise 6

function sayHi (person: string) {
    person = prompt("Enter your name: ");
    return (`Hello ${person}`);
}

// console.log(sayHi(27)) //does not work; Argument of type 'number' is not assignable to parameter of type 'string'.

console.log(sayHi());


