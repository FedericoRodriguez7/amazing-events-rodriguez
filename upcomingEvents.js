console.log(data)
let cards = document.getElementById('cards')
console.log(cards)

for (let i = 0; i < data.length; i++) {

    if (data[i].date > "2022-01-01") {

        let div = document.createElement('div')
        div.className = 'card'
        div.innerHTML +=
            `
        <h5>${data[i].name}</h5> 
        <img src="${data[i].image}" alt="${data[i].name}" />
        <p> <strong>Date:</strong> ${data[i].date}</p>
        <p> <strong>Description:</strong> ${data[i].description}</p>
        <a class="more" href="./details.html">More...</a>
        `
        cards.appendChild(div)
    }
}