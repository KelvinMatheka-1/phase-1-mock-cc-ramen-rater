const baseUrl = 'http://localhost:3000/ramens'
const ramenMenu = document.querySelector('#ramen-menu')

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM loaded');
})

function ramen() {
    fetch(baseUrl)
    .then(res => res.json())
    .then(getAllRamen)
}

function getAllRamen(ramenArr) {
    ramenArr.forEach(getRamen)
}

function getRamen(ramenObj) {
    const ramenImg = document.createElement('img')
    ramenImg.src = ramenObj.image
    ramenMenu.append(ramenImg)

    ramenImg.addEventListener('click', () => {
        const img = document.querySelector('.detail-image')
        img.src = ramenObj.image
        img.alt = ramenObj.name

        const ramenName = document.querySelector('.name')
        ramenName.textContent = ramenObj.name
        
        const ramenResta = document.querySelector('.restaurant')
        ramenResta.textContent = ramenObj.restaurant
        
        const ratingDisplay = document.querySelector('#rating-display')
        ratingDisplay.innerText = ramenObj.rating

        const commentDisplay = document.querySelector('#comment-display')
        commentDisplay.innerText = ramenObj.comment
    })
}

function ramenForm() {
    const newRamenForm = document.getElementById('new-ramen')

    newRamenForm.addEventListener('submit', (event) => {
    event.preventDefault() 
    
    const ramenObject = {}
    ramenObject.name = document.querySelector('#new-name').value
    ramenObject.restaurant = document.querySelector('#new-restaurant').value
    ramenObject.image = document.querySelector('#new-image').value
    ramenObject.rating = document.querySelector('#new-rating').value
    ramenObject.comment = document.querySelector('#new-comment').value
    console.log(ramenObject)

    const newRamenItem = document.createElement('img')
    newRamenItem.src = ramenObject.image
    ramenMenu.append(newRamenItem)
    })
}


ramen()
ramenForm()