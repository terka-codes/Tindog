# Dog Matchmaking App
This is a web application that allows users to rate and match with dogs. Users can clisk the swipe (Nope) button or Like button under the dog cards that are displayed on the screen. If a user Likes a dog and the dog, then the dog will be added to the list of dogs that the user has matched with.

## Take a look at the project

👉[LIVE SITE HERE](https://sprightly-toffee-4f1ce1.netlify.app/)👈

https://user-images.githubusercontent.com/107133029/227925723-bb32115c-b35b-4837-b659-80bb4f8d25ca.mov


## How it Works
The application uses JavaScript and the Document Object Model (DOM) to manipulate the HTML and CSS on the web page. The Dog.js module defines the Dogs class, which represents a dog and its properties. The data.js module contains an array of dog objects, which are used to create instances of the Dogs class.

The index.js module contains the main logic of the application. It keeps track of the current dog being shown and updates the HTML and CSS when the user rates a dog. If the user Likes a dog and the dog also Likes the user back, the dog object is updated to indicate that it has been matched with the user. The application also uses setTimeout to delay showing the next dog card after the user rates a dog.
