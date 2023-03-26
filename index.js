import {Dogs} from "./Dog.js"
import {dogs} from "./data.js"

let dog = new Dogs(dogs[0])
render()

function render() {
    document.getElementById("main-img").innerHTML = dog.getDogsHtml()
}

// TODO: Work on function that will change the dog object to the next one after the user clicks on the like or nope button but set the timeout function to 1.5 seconds so that the user can see the like or nope badge before the next dog appears or change their mind and click on the other button

function adressRateBtnClick(whatsClicked, oppositeOne) {
    if (dog[oppositeOne]) {
        dog[oppositeOne] = false
    }

    dog[whatsClicked] = !dog[whatsClicked]
    render()
}

document.getElementById("nope-btn").addEventListener("click", function() {
    adressRateBtnClick("hasBeenSwiped", "hasBeenLiked")
})

document.getElementById("like-btn").addEventListener("click", function() {
    adressRateBtnClick("hasBeenLiked", "hasBeenSwiped")
})
