let confirmitem = document.querySelector("#confirm")

confirmitem.addEventListener("focusout", ()=> {
    let passworditem = document.querySelector("#password")
    if (confirmitem.value != passworditem.value){
        let messageitem = document.querySelector("#message").innerHTML = "Passwords don't match!"
        passworditem.focus()
    }
    else{
        document.querySelector("#message").innerText= ""
    }
})


const myrange = document.getElementById("rangevalue");
const range = document.getElementById("range");

// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    myrange.innerHTML = range.value;
}