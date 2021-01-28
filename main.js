// 1
let proppi = document.querySelector('h1')
let fondWhite = () => {
    proppi.style.color = "white"
    proppi.style.backgroundColor = "red"
}
proppi.addEventListener('click', fondWhite) 

// 2
let proppou = document.querySelector('h3')
let pitiCaracterou = () => {
    proppou.style.fontSize = "smaller"
}

proppou.addEventListener('mouseover', pitiCaracterou)

// 3
let textou = document.querySelector('p')
let changis = () => {
    if (textou.style.backgroundColor=="blue" && textou.style.color=="gold") {
        textou.style.backgroundColor = "white"
        textou.style.color = "black"
    } else {
        textou.style.backgroundColor = "blue"
        textou.style.color = "gold"
    }
}

textou.addEventListener('click', changis)