// Object-oriented programming

// What is Object oriented programming (OOP)
// One of several programming paradigms
//     functional
//     logic
//     event-driven
//     many more
// A way to manage and think about state    
// **state is data in our application that is organized in specific ways and needs to be updated, changed and managed
// Model interactions within and between states
// based on the concepts of "objects"
// "Objects" have data and code associated with them

// 4 Main Ideas of OOP
//     Inheritance
//     Encapsulation
//     Abstraction
//     Polymorphism

// JavaScript Specifics
//     JS is NOT a traditional "OOP Language"
//     "Classes" are built on top of Prototypes
//     We have an actual "Object" type in JS
//     We can "simulate" most of the OOP concepts

//bad Example
// const player = {
//     name: '?',
//     hp: 100,
//     mp: 0,
//     items: [],
// };
// const hanSolo = player;
// hanSolo.name = "Han Solo";
// hanSolo.hp = 80;
// hanSolo.mp = 20;
// hanSolo.items = ['Blaster'];

// const darthVader = player; //since both are equal to player darthVader will take on the values of hanSolo

// console.log(hanSolo);
// console.log(darthVader);


//better example but not the best
// const createPlayer = (name, hp, mp, items) => {
//     return{
//         name, //same as typing name: name
//         hp,
//         mp,
//         items,
//     }
// }
// const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
// hanSolo.hp = 150;
// console.log(hanSolo);

// const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]);
// console.log(darthVader);


//Manual Class -- Way to do it!
class Player {
    age = 20; //same as initiating with this.age = 20
    constructor(name, hp, mp, items) {
      this.name = name;
      this.hp = hp;
      this.mp = mp;
      this.items = items;
      // this.age = 20;
    }
  
    speak(phrase) {
      console.log(`${this.name} says: ${phrase}`);
    }
  }
  
  const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
  hanSolo.speak("Never tell me the odds!");
  hanSolo.age = 50;
  console.log(hanSolo);
  console.log(Object.getOwnPropertyNames(hanSolo));
  console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
  const nader = new Player("Nader", 10, 5, ["Computer"]);
  // nader.speak("Monkeys are the best animal!");
  // console.log(nader);
  // console.log(Object.getOwnPropertyNames(nader));
  // console.log(Object.getOwnPropertyNames(nader.__proto__));
  
  function AnotherPlayer(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }
  
  AnotherPlayer.prototype.speak = function (phrase) {
    console.log(`${this.name} says: ${phrase}`);
  };
  
  const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
  console.log(darthVader);
  darthVader.speak("Hshfsfiihhhhhh");
  console.log(Object.getOwnPropertyNames(darthVader));
  console.log(Object.getOwnPropertyNames(darthVader.__proto__));