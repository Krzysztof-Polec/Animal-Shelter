window.addEventListener("load", () =>{
    const body = document.querySelector("body");
    const header = document.querySelector(".header");
    const headerInfo = document.querySelector(".header-info");
    
    header.style.setProperty("animation","fade-in 1s ease-in");
    headerInfo.style.setProperty("animation","fade-in 1s ease-in");

    setTimeout(()=>{
        header.style.removeProperty("animation","fade-in 1s ease-in");
        headerInfo.style.removeProperty("animation","fade-in 1s ease-in");
    },1000);
});

window.addEventListener("scroll", () =>{
    const reveals = document.querySelectorAll(".reveal");
  
    for(let i = 0; i < reveals.length; i++){
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 25;
  
        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add("active");
        }else{
            reveals[i].classList.remove("active");
        }
    }
});