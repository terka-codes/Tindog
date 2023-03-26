import {Dogs} from "./Dog.js"
import {dogs} from "./data.js"

let dog = new Dogs(dogs[0])
document.getElementById("main-img").innerHTML = dog.getDogsHtml()

document.getElementById("nope-btn").addEventListener("click", () => {
    dog.this.hasBeenSwiped ? false : true
})

document.getElementById("like-btn").addEventListener("click", () => {
    dog.this.hasBeenLiked ? false : true
})
