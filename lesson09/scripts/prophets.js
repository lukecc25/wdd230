const url = './data/prophets.json'
const cards = document.querySelector('#cards')

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
                <h2>${prophet.name} ${prophet.lastname}</h2>
                <img src="${prophet.imageurl}" alt="${prophet.name} ${prophet.lastname}" loading="lazy" height="400">`
        cards.append(newsection)
    });
  }

async function getProphetData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json()
        displayProphets(data.prophets)
    }
    else{
        console.log("This no worky!")
    }
}

getProphetData()