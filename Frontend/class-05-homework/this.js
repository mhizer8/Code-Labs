// this - a keyword used to reference the object that is executing the current running function


//Examples
function test(){
    console.log(this)
}

test();

const user = {
    firstName: 'Patrick';
    lastName: 'Scott';
    fullName: function(){
        console.log(this)
        console.log(this.firstName + " " + this.lastName)
    }
}
user.fullName();  //this refers to 'user' in this case

//arrow functions don't have a 'this' scope. They will inherit the nearest regular functions 'this' scope **if there is no regular function it will inherit the global scope

