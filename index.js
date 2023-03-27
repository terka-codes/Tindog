import {Dogs} from "./Dog.js"
import {dogs} from "./data.js"

let dogsCounter = 0

let dog = new Dogs(dogs[dogsCounter])
render()

function addDog() {
    if (dogsCounter < dogs.length - 1) {
        dogsCounter++
        dog = new Dogs(dogs[dogsCounter])
        render()
        document.getElementById("nope-btn").classList.remove("active")
        document.getElementById("like-btn").classList.remove("active")
    } else {
        document.getElementById("main-img").innerHTML = `
            <h1 class="alert-no-more-dogs">There are no more dogs to show you 🐶</h1>`
            document.getElementById("rate-btns").innerHTML = ""
    }
}

function render() {
    document.getElementById("main-img").innerHTML = dog.getDogsHtml()
}

// TODO: Work on function that will change the dog object to the next one after the user clicks on the like or nope button but set the timeout function to 1.5 seconds so that the user can see the like or nope badge before the next dog appears or change their mind and click on the other button



function adressRateBtnClick(whatsClicked, oppositeOne, button, oppositeButton) {
    if (dog[oppositeOne]) {
        dog[oppositeOne] = false
    }

    dog[whatsClicked] = !dog[whatsClicked]
    render()

    document.getElementById(`${button}`).classList.toggle("active");
    document.getElementById(`${oppositeButton}`).classList.remove("active")

    setTimeout(() => addDog(), 1500)
}

document.getElementById("nope-btn").addEventListener("click", function() {
    adressRateBtnClick("hasBeenSwiped", "hasBeenLiked", "nope-btn", "like-btn")
})

document.getElementById("like-btn").addEventListener("click", function() {
    adressRateBtnClick("hasBeenLiked", "hasBeenSwiped", "like-btn", "nope-btn")
})
