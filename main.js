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
    proppou.innerText = proppou.innerText.substring(0, proppou.innerText.length -1)
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


// AUTRE METHODEEEEE

let clique = false
console.log(clique);
console.log(!clique);

monP.addEventListener('click', () => {
    if (!clique) {
        monP.style.cssText = "background-color:blue; color:grid"
        clique = true
    } else{
        monP.style = ""
        clique =false
    }
})

// méthode toogle
// monP.addEventListener('click', () => {
//     monP.classList.toggle('color')
// })

// methode2
// let i = 2
// console.log(i % 2);
// monP.addEventListener('click', () => {
//     if (i % 2 == 0) {
//         monP.style.cssText = "background-color:blue; color:grid"
//         i++
//     } else {
//         monP.style = ""
//         i++
//     }
// })