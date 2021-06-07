let quoteDiv = document.getElementById('quote');

fetch('https://api.kanye.rest/')
.then(res => res.json())
.then(quote => {
    quoteDiv.innerHTML += `<p> ${quote.quote} </p>`
})

let catButton = document.getElementById('give-cat');

catButton.addEventListener('click', evt => {
    let catDiv = document.getElementById('cat-pic')

    fetch('//api.thecatapi.com/v1/images/search?')
        .then(res => res.json())
        .then(catpic => {
            catpic.forEach(catpic => {
                catDiv.innerHTML = `<h3>Here is your cat!</h3> <img src="${catpic.url}" alt="kitty"/>`
            })
        })
})

const setRandomBGColor = () => {
        const randomColor = Math.floor(Math.random() * 12345563).toString(16);
        document.body.style.backgroundColor = '#' + randomColor;
        randomColor.innerHTML = '#' + randomColor;
    }

let genNew = document.getElementById('give-cat')   

genNew.addEventListener('click', setRandomBGColor);
setRandomBGColor();