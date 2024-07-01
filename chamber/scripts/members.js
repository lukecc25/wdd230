const url = './data/members.json'
const cards = document.querySelector('#cards')

const displaymembers = (members) => {
    members.forEach((members) => {
        let newsection = document.createElement("section");
        newsection.innerHTML = `
                <h2>${members.name}</h2>
                <img src="${members.imageURL}" alt="${members.websiteURL}" loading="lazy" height="200">
                <p> ${members.phone}</p>
                <ul><li><a href="${members.websiteURL}">${members.websiteURL}</a></li></ul>
                 <p> ${members.address1}<br> ${members.address2}<br> ${members.membership}</p>`
        cards.append(newsection)
    });
  }

async function getmembersData(){
    const response = await fetch(url)
    if (response.ok){
        const data = await response.json()
        displaymembers(data.members)
    }
    else{
        console.log("This no worky!")
    }
}

getmembersData()

