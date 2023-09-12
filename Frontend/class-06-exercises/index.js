//exercise 1 
    // Create three functions: one global, one as an object method, and an arrow function inside an object.
    // Print the value of this inside each function.
    // Discuss or note down the differences you observe in the value of this across the three scenarios.

//function 1: global
function sayHello() {
    console.log('Hello!')
    console.log(this) //this refers to the window
}
//function 2: object method
const myPet = {
    animalType: 'cat',
    petName: 'Znaeb',
    petIntro: function () {
        console.log (`I have a ${this.animalType} named ${this.petName}!`)
        console.log(this) //returns {animalType: 'cat', petName: 'Znaeb', petIntro: ƒ}
    }
}

//function 3: arrow function
let sayBonjour = () => {
    console.log ("Bonjour!");
    console.log(this) //refers to window
}

sayHello();
myPet.petIntro();
sayBonjour();


//exercise 2-5
    // Define a Person class with properties name and age.
    // Add a method greet() to this class which outputs a greeting.
    // Instantiate two different Person objects and invoke their greet methods.
    //3
    // Modify your Person class. The constructor should now accept and initialize name and age properties.
    // Create two different Person instances with unique names and ages.
    //4
    // Add a static method called info() to the Person class. This method should return a statement like, "This is a Person class".
    // Try accessing this method both from the class itself and from an instance of the class. Document the outcomes.  
    //5
    // Within your Person class, add getters and setters for the age property.
    // Ensure with the setter that age can't be set to a negative value.
    // Instantiate a Person object, try setting a negative age, and observe the results.

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age
    }
    get greet() {
        return "Hello my name is " + this.name + " and I am " + this.age
    }
    static info() {
        return "This is a Person Class";
    }
    get howOld () {
        return this.age
    }
    set old(age) {
        if (typeof value == "number" && value > 0) {
            console.log ("You can't be negative years old!")
        } else {
            this.age = age;
        }
    }
}

const Me = new Person('Madison',23);
console.log(Me.greet)

const person2 = new Person ('John',25)
console.log(person2.greet)

console.log(Person.info()) //returns This is a Person Class
// console.log(Me.info()) //does not work

const alive = new Person('Fetus', -1)
console.log(alive.old)
console.log(alive.howOld)


//exercise 6 -- in ./private-fields-in-classes
    // Visit this repository.
    // Click Use this template follow by Create a new repository.
    // Give this repository a name of private fields in classes.
    // Make sure this is a public repository.
    // Read the readMe.md file for further instructions.


//exercise 7
    // As a challenge, design a Library class. This class should be able to store book objects.
    // For book objects, you should have a Book class. This class should have private fields for ISBN and public fields like title, author, and yearPublished.
    // The Library should feature methods that allow a user to add a book, remove a book, and list all books.
    // Implement this system and run a series of operations, such as adding a book, listing books, etc.


//exercise 8
// Create a class Student with properties name and grades. Implement methods to add grades and compute the average. How does the this keyword behave differently in arrow functions compared to regular functions?

class Student{
    constructor(name){
        this.name = name;
    }
    set addGrade(grade) {
        this.grades.push(grade);
    }
    get AvgGrade(){
        let sum = 0;
        for (const grade of this.grades){
            sum += grade;
        }
        return sum / this.grades.length;
    }
}

const grade1 = new Student('Stacy', 95)
console.log(grade1.Student)