class Dogs {
    constructor(data) {
        // set the properties of the new dog object to match the properties of the provided data
        Object.assign(this, data)
    }
    getDogsHtml() {
        // extract the properties we need from the current dog object
        const {name, avatar, age, bio} = this

        // create a "Like" badge if the dog has been liked
        const liked = this.hasBeenLiked ? 
            `<img class="status-img" src="images/like-image.png" alt="Like badge">` 
            : ""
            // create a "Nope" badge if the dog has been swiped
        const swiped = this.hasBeenSwiped ? 
            `<img class="status-img" src="images/nope-image.png" alt="Nope badge">` 
            : ""
        
        // create the HTML for the dog photo card using the extracted properties and the created badges
        const dogHtml = `
            <div class="dog-photo-card-div">
                <img class="dog-photo-card" src="${avatar}">
                ${liked}
                ${swiped}
                <div class="dog-card-text">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
            </div>`
        
        return dogHtml
    }

    getMatchedDogsHtml() {
        // extract the properties we need from the current dog object
        const {name, avatar, age, bio} = this

        // create the HTML for the dog photo card using the extracted properties and the created badges
        const matchedDogHtml = `
            <div class="dog-card-matched">
                <img class="dog-photo-matched" src="${avatar}">
                <div class="dog-matched-text">
                    <h1>${name}, ${age}</h1>
                    <p>${bio}</p>
                </div>
            </div>`
        
        return matchedDogHtml
    }
}

export {Dogs}
