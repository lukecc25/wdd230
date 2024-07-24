//let datespan = document.querySelector("#currentYear")
// datespan.innerText = new Date().getFullYear()

// let lastmodifiedspan = document.querySelector("#lastModified")
// lastmodifiedspan.innerText = document.lastModified

// hamburger
let menu_button = document.getElementById("menu-button")
let navlist = document.querySelector("nav ul")
menu_button.addEventListener('click', () =>{
    menu_button.classList.toggle("open")
    navlist.classList.toggle("open")
})



// dark mode stuff
let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{
    darkbutton.classList.toggle("dark")
    if(darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--background-color', '#0b3344');
        document.documentElement.style.setProperty('--header-color', '#141414');
        document.documentElement.style.setProperty('--box-color', '#2d519f');
        document.documentElement.style.setProperty('--font1-color', '#F7D6E0');
        document.documentElement.style.setProperty('--font2-color', '#F7D6E0');
    }
    else{
        document.documentElement.style.setProperty('--background-color', '#ECFDFE');
        document.documentElement.style.setProperty('--header-color', '#1F2F16');
        document.documentElement.style.setProperty('--box-color', '#2D728F');
        document.documentElement.style.setProperty('--font1-color', '#F7D6E0');
        document.documentElement.style.setProperty('--font2-color', '#B2ECE1');
    }
})

