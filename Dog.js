class Dogs {
    constructor(data) {
        Object.assign(this, data)
    }
    getDogsHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        const liked = this.hasBeenLiked ? `<img class="status-img" src="images/like-image.png" alt="Like badge">` : ""
        const swiped = this.hasBeenSwiped ? `<img class="status-img" src="images/nope-image.png" alt="Nope badge">` : ""
        
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
}
/*  name: "Rex",
    avatar: "images/dog-rex.jpg",
    age: 25,
    bio: "Art. Literature. Natural wine. Yoga.",
    hasBeenSwiped: false,
    hasBeenLiked: false */

export {Dogs}
