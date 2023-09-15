//exercise 1
    // Add methods to the Subject class to addObserver, removeObserver, and notifyObservers.
    // When notifyObservers is called on a Subject instance, each observer's update method should be invoked.
    // Instantiate the Subject and add multiple observers. Afterward, call notifyObservers and ensure each observer gets updated.

// class Subject {
//     constructor() {
//         this.observers = [];
//     }
      
//     // Add an observer to the list of observers
//     addObserver(observer) {
//         this.observers.push(observer);
//     }
      
//     // Remove an observer from the list of observers
//     removeObserver(observer) {
//         const index = this.observers.indexOf(observer);
//         if (index !== -1) {
//           this.observers.splice(index, 1);
//         }
//     }
      
//     // Notify all observers by calling their update method
//     notifyObservers() {
//         this.observers.forEach(observer => {
//           observer.update();
//         });
//     }
// }
      
// class Observer {
//     update() {
//         console.log('Observer updated!');
//     }
// }
      
// // Instantiate the Subject
// const subject = new Subject();
      
// // Create multiple observers
// const observer1 = new Observer();
// const observer2 = new Observer();
// const observer3 = new Observer();
      
// // Add the observers to the subject
// subject.addObserver(observer1);
// subject.addObserver(observer2);
// subject.addObserver(observer3);
     
// // Call notifyObservers to update all observers
// subject.notifyObservers();


//exercise 2
    // Destructure the person object to extract the name and age properties into variables.
    // Use array destructuring to get the second and fourth items from the fruits array.
    // Extract the city and country properties from the address object nested within the person object using nested destructuring.

const person = {
    name: 'John',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA',
    },
};
const {name, age} = person
console.log(name); //returns John
console.log(age); //returns 30

const {address:{city, country}} = person
console.log(city); //returns New York
console.log(country); //returns USA

const fruits = ['apple', 'banana', 'cherry', 'date'];
const [a, b, c, d] = fruits;
console.log(b); //returns banana
console.log(d); //returns date


//exercise 3
    // Create an async function named fetchPosts that retrieves the first 10 posts from the JSONPlaceholder API.
    // Handle any potential errors using a try/catch block within the async function. If an error occurs, log an appropriate error message.
    // Invoke the fetchPosts function and log the results.

async function fetchPosts() {
    const url = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');

    // Your async/await code here
    try{
        const res = await url.json();
        console.log('ASYNC/AWAIT: ', res)
    }catch (err) {
        console.log('err: ', err)
    }
}
    
// Call the function to fetch posts
fetchPosts();


//exercise 4
    // Extend the Subject class to include an async method fetchAndNotify() that retrieves the first 10 posts from the JSONPlaceholder API and then notifies its observers.
    // The data passed to each observer's update method should be the list of posts fetched.
    // Handle potential errors using a try/catch block. If an error occurs, invoke the update method of observers with an appropriate error message.
    // Within the Observer class's update method, destructure the received posts to log the title of the first post. If an error message is received instead, just log it.
    // Instantiate the Subject, add multiple observers, call fetchAndNotify(), and ensure each observer logs the title of the first post or an error message.

class Subject {
	constructor() {
		this.observers = [];
	}

    // Add an observer to the list of observers
    addObserver(observer) {
        this.observers.push(observer);
    }
      
    // Remove an observer from the list of observers
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index !== -1) {
          this.observers.splice(index, 1);
        }
    }
      
    // Notify all observers by calling their update method
    notifyObservers(data) {
        this.observers.forEach(observer => {
          observer.update(data);
        })
    }

	async fetchAndNotify() {
		const url = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');
        try{
            const data = await url.json();
            this.notifyObservers(data);
            console.log('ASYNC/AWAIT: ', data)
        }catch (data) {
            console.log('err: ', data)
        }

		// TODO: Fetch data from the API and notify observers
	}
}

class Observer {
	async update() {
		// TODO: Handle the received data. If it's an error message, log it.
		// If it's the list of posts, destructure and log the title of the first post.
        const url = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=10');
        return url.json();
        try{
            // const data = url.json;
            const {title} = url
            console.log('Title: ', title)
        }catch (data) {
            console.log('err: ', data)
        }
	}
}

// TODO: Instantiate the Subject, add observers, and call the fetchAndNotify method
const subject = new Subject();
      
const observer1 = new Observer();
const observer2 = new Observer();
const observer3 = new Observer();
      
subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);
     
subject.fetchAndNotify();