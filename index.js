let rigth = document.querySelector(".rigth")
let left = document.querySelector(".left")
let seccionSlider = document.querySelector(".seccion-slider")
let contentSlider = document.querySelector(".content_slider")

let slider = document.querySelectorAll(".slider")

let sliderlast = document.querySelectorAll(".slider")[slider.length -1]



contentSlider.insertAdjacentElement("afterbegin",sliderlast)






left.addEventListener("click",function(){
    let sliderlast = document.querySelectorAll(".slider")[slider.length -1]
    contentSlider.insertAdjacentElement("afterbegin",sliderlast)

    contentSlider.style.marginLeft= "0"
    contentSlider.style.transition= "all 0.5s"

    setTimeout(function(){
        contentSlider.style.transition= "none"
        contentSlider.style.marginLeft= "-100%"

    }, 500);
})




rigth.addEventListener("click",function(){
    let sliderlast = document.querySelectorAll(".slider")[slider.length -1]

    contentSlider.insertAdjacentElement("afterbegin",sliderlast)
    
    contentSlider.style.marginLeft= "-200%"
    contentSlider.style.transition= "all 0.5s"

    
    setTimeout(function(){
        contentSlider.style.transition= "none"
        contentSlider.style.marginLeft= "-100%"

    }, 500);
    
})