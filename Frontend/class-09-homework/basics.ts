//Primitives: number, strings, booleans

let age: number; //age variable must be a number or will return an error, can assign variable after type declaration or later in the code
//Number with N points to the object in js, number with n points to the primitive type, same for string
let age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

//More complex types: arrays, objects

let hobbies: string[]; //[] allows for array of strings, would be the same way with numbers or booleans
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
}; //default is any type, anything is allowed; {} sets object type for object
person = {
    name: 'Max',
    age: 32
};
person = {
    name: 'Max',
    age: 32
}[]; //by adding [] it will allow us to create an array of the people object

//Type inference

let course = 'React - The Complete Guide'; //TS will infer what the type is and set that as the assigned type for the variable
// course = 12341; //will return an error

//Union Types

let course: string | number = 'React - The Complete Guide'; //put | to add more types, can use as many as you want
//could use string | string[]; to define it as an array or a single variable

//Type alias - define a base type in which a more complex type definition is stored then use this instead of defining the types again

type Person = { 
    name: string;
    age: number;
};
let person: Person; //call like a type but use the name of the type instead; can also add [] to make is an array

//Function types, parameters
//Functions & Types

function add(a: number, b: number): number {    //can define variable type, can see the type it infers if hover over function name, type after () is the type that the return value will be (TS can infer)
    return a + b;
};

function print_(value: any) {
    console.log(value);     //since it does not return anything its type is void - it never returns 
}

//Generics

function insertAtBeginning (array: any[], value: any) {
    const newArray = [value, ...array];
    return newArray;
}

function insertAtBeginning<T>(array: any[], value: any) { //can make a generic function by adding <>, a generic type that is only available in the function; this helps TS identify the type of the variable
    const newArray = [value, ...array];
    return newArray;
}

demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); //[-1, 1, 2, 3]
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); //[a, b, c, d]