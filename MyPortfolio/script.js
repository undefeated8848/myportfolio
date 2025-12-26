let nav = document.querySelector(".nav");
let openIcon = document.querySelector(".openIcon");
let closeIcon = document.querySelector(".closeIcon")

openIcon.addEventListener("click", ()=>{
   nav.classList.add("active")
})
closeIcon.addEventListener("click", ()=>{
   nav.classList.remove("active")
})