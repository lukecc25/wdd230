
// Sets the current year
let year = new Date().getFullYear();
let currentYearSpan = document.querySelector("#currentYear")
currentYearSpan.innerHTML = `${year}`

// Sets the last modified date
let lastModifiedParagraph = document.querySelector("#lastModified")
lastModifiedParagraph.innerHTML = `last Modified: ${document.lastModified}`