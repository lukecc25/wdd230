let datespan = document.querySelector("#currentYear")
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

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
        document.documentElement.style.setProperty('--background-color', '#330051');
        document.documentElement.style.setProperty('--header-color', '#451082');
        document.documentElement.style.setProperty('--accent-color', '#2d519f');
        document.documentElement.style.setProperty('--font-color', '#ff8832');
        document.documentElement.style.setProperty('--font2-color', '#ff8832');
    }
    else{
        document.documentElement.style.setProperty('--background-color', '#d0d1ff');
        document.documentElement.style.setProperty('--header-color', '#231651');
        document.documentElement.style.setProperty('--accent-color', '#68C5DB');
        document.documentElement.style.setProperty('--font-color', '#4f2506');
        document.documentElement.style.setProperty('--font2-color', '#D1F5BE');
    }
})