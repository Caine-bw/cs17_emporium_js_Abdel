let inscrit = document.querySelector(".inscrit")
let enregistre = document.querySelector(".enregistre")
let g = document.querySelector(".gauche")
let d = document.querySelector(".droite")

inscrit.addEventListener("click", () => {
    if (!d.classList.contains('hide-content')) {
        d.classList.add('hide-content');
    }
    if (g.classList.contains('hide-content')) {
        g.classList.remove('hide-content');
    }
})

enregistre.addEventListener("click", () => {
    if (!g.classList.contains('hide-content')) {
        g.classList.add('hide-content');
    }
    if (d.classList.contains('hide-content')) {
        d.classList.remove('hide-content');
    }
})

export {inscrit,enregistre};