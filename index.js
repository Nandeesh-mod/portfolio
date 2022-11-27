const more = document.querySelector(".more"),
    hidden_div = document.querySelector(".hidden-div")

more.addEventListener("click", () => {
    hidden_div.classList.add("active")
    more.classList.add("inactive")
})

const faBars = document.querySelector(".fa-bars")
const faXmark = document.querySelector(".fa-xmark")
const nav = document.querySelector("nav")
const header = document.querySelector("header")

faBars.addEventListener("click", () => {
    faBars.classList.add("transition")
    setTimeout(() => {
        nav.classList.add("menuActive")
        header.classList.add("abc")
        faBars.style.display="none"
        faXmark.style.display = "block"
    faBars.classList.remove("transition")
        
    },300)
    
    
    
})

faXmark.addEventListener("click", () => {
    faXmark.classList.add("transition")

    setTimeout(() => {
        nav.classList.remove("menuActive")
    header.classList.remove("abc")
    
    faBars.style.display="block"
        faXmark.style.display = "none"
    faXmark.classList.remove("transition")
        
    },300)
    
})