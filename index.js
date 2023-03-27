import {Dogs} from "./Dog.js"
import {dogs} from "./data.js"

// Keep track of the current dog being shown
let dogsCounter = 0
let dog = new Dogs(dogs[dogsCounter])

// Render the initial dog card
render()

// Show the next dog when the user clicks either "Nope" or "Like"
function addDog() {
    // Check if there are any dogs left to show
    if (dogsCounter < dogs.length - 1) {
        dogsCounter++
        dog = new Dogs(dogs[dogsCounter])
        render()
        // Remove the "active" class from both buttons
        document.getElementById("nope-btn").classList.remove("active")
        document.getElementById("like-btn").classList.remove("active")
    } else {
        // If there are no more dogs left, show an alert message and remove the buttons
        document.getElementById("main-img").innerHTML = `
            <div class="matched-dogs-div">
                <h1 class="alert-no-more-dogs">Dogs you matched with: 🐶</h1>
                ${renderMatchedDogsHtml()}
            </div>`
        document.getElementById("rate-btns").remove()
    }
}

// This function returns an HTML string that represents a list of dogs that have been liked by the user
function renderMatchedDogsHtml() {
    // Create an empty array to store the HTML strings for the matched dogs
    const matchedDogsHtml = []
  
    // Loops through the array of dogs data
    for (let i = 0; i < dogs.length; i++) {
        // Create a new Dogs object for each dog in the array
        let doggie = new Dogs(dogs[i])
        // If the dog has been liked by the user, get its HTML string and add it to the matchedDogsHtml array
        if (doggie.hasBeenLiked) {
            matchedDogsHtml.push(doggie.getMatchedDogsHtml())
        }
    }
  
    // If there are matched dogs, join the HTML strings in the array and return it as a single string
    if (matchedDogsHtml.length > 0) {
        return matchedDogsHtml.join('')
    // If there are no matched dogs, return a default HTML string
    } else {
        return '<p>No dog matches 😢</p>'
    }
}

// Render the current dog image
function render() {
    document.getElementById("main-img").innerHTML = dog.getDogsHtml()
}

// Handle when the user clicks either "Nope" or "Like"
function handleRateBtnClick(whatsClicked, oppositeOne, button, oppositeButton) {
    // If the opposite button was clicked before, reset its state
    if (dog[oppositeOne]) {
        dog[oppositeOne] = false
    }

    // Toggle the state of the clicked button
    dog[whatsClicked] = !dog[whatsClicked]
    dogs[dogsCounter][whatsClicked] = !dogs[dogsCounter][whatsClicked]
    render()

    // Toggle the "active" class for the clicked button and remove it from the opposite button
    document.getElementById(`${button}`).classList.toggle("active");
    document.getElementById(`${oppositeButton}`).classList.remove("active")

    // Show the next dog after 1.5 seconds
    setTimeout(() => addDog(), 1500)
}

// Handle when the "Nope" button is clicked
document.getElementById("nope-btn").addEventListener("click", function() {
    handleRateBtnClick("hasBeenSwiped", "hasBeenLiked", "nope-btn", "like-btn")
})

// Handle when the "Like" button is clicked
document.getElementById("like-btn").addEventListener("click", function() {
    handleRateBtnClick("hasBeenLiked", "hasBeenSwiped", "like-btn", "nope-btn")
})
