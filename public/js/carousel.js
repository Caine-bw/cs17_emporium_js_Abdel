let indicator = document.getElementsByClassName('indic');
let img = document.querySelectorAll('.img');
    indicator[0].addEventListener('click',()=>{
    img[0].style.transform = "translateX(0%)"
    img[1].style.transform = "translateX(150%)"
    img[2].style.transform = "translateX(300%)"
    img[3].style.transform = "translateX(450%)"
    img[4].style.transform = "translateX(600%)"
    img[5].style.transform = "translateX(750%)"
    img[6].style.transform = "translateX(900%)"

})
indicator[1].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-150%)"
    img[1].style.transform = "translateX(0%)"
    img[2].style.transform = "translateX(150%)"
    img[3].style.transform = "translateX(300%)"
    img[4].style.transform = "translateX(450%)"
    img[5].style.transform = "translateX(600%)"
    img[6].style.transform = "translateX(750%)"

})
indicator[2].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-300%)"
    img[1].style.transform = "translateX(-150%)"
    img[2].style.transform = "translateX(0%)"
    img[3].style.transform = "translateX(150%)"
    img[4].style.transform = "translateX(300%)"
    img[5].style.transform = "translateX(450%)"
    img[6].style.transform = "translateX(600%)"

}
)
indicator[3].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-450%)"
    img[1].style.transform = "translateX(-300%)"
    img[2].style.transform = "translateX(-150%)"
    img[3].style.transform = "translateX(0%)"
    img[4].style.transform = "translateX(150%)"
    img[5].style.transform = "translateX(300%)"
    img[6].style.transform = "translateX(450%)"

}
)
indicator[4].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-600%)"
    img[1].style.transform = "translateX(-450%)"
    img[2].style.transform = "translateX(-300%)"
    img[3].style.transform = "translateX(-150%)"
    img[4].style.transform = "translateX(0%)"
    img[5].style.transform = "translateX(150%)"
    img[6].style.transform = "translateX(300%)"

}
)
indicator[5].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-7500%)"
    img[1].style.transform = "translateX(-600%)"
    img[2].style.transform = "translateX(-450%)"
    img[3].style.transform = "translateX(-300%)"
    img[4].style.transform = "translateX(-150%)"
    img[5].style.transform = "translateX(0%)"
    img[6].style.transform = "translateX(150%)"

}
)
indicator[6].addEventListener("click",() =>{
    img[0].style.transform = "translateX(-900%)"
    img[1].style.transform = "translateX(-750%)"
    img[2].style.transform = "translateX(-600%)"
    img[3].style.transform = "translateX(-450%)"
    img[4].style.transform = "translateX(-300%)"
    img[5].style.transform = "translateX(-150%)"
    img[6].style.transform = "translateX(0%)"

}
)
export {indicator,img}