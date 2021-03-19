let modeJour = document.querySelector('#btnJour')
let modeNuit = document.querySelector('#btnNuit')

modeJour.addEventListener('click', ()=>{
    let fondNoir = document.querySelectorAll('.bg-dark')
    let textNoir = document.querySelectorAll('.text-white')
    console.log("salut");
    fondNoir.forEach(element => {
        element.classList.remove('bg-dark')
        element.classList.remove('navbar-dark')
        element.classList.add('bg-white')
        element.classList.add('navbar-light')
    })
    textNoir.forEach(element =>{
        element.classList.remove('text-white')
        element.classList.add('text-dark')
    })
})

modeNuit.addEventListener('click', ()=>{
    let fondBlanc = document.querySelectorAll('.bg-white')
    let fondBlanc2 = document.querySelectorAll('.bg-light')
    let textBlanc = document.querySelectorAll('.text-dark')
    console.log("salut");
    fondBlanc.forEach(element => {
        element.classList.remove('bg-white')
        element.classList.remove('bg-light')
        element.classList.add('bg-dark')
    })
    textBlanc.forEach(element => {
        element.classList.remove('text-dark')
        element.classList.add('text-white')
    })
})

export {modeJour, modeNuit}