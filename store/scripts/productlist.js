const url = './data/productlist.json';
const cards = document.querySelector('#productcards'); 

const displayProductList = (products) => {
    cards.innerHTML = '';

    if (Array.isArray(products) && products.length > 0) {
        products.forEach((product) => {
            const newSection = document.createElement('section');
            newSection.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.imageURL}" alt="${product.name}" loading="lazy" height="250" onerror="this.onerror=null; this.src='default-image.jpg';">
                <h2>$${product.price}</h2>
                <a href="order.html?code=${product.code}">Order Now</a>
            `;
            cards.append(newSection);
        });
    } else {
        cards.innerHTML = '<p>No products found.</p>';
    }
};

async function fetchProductListData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayProductList(data.Product);
        } else {
            console.error('Failed to fetch data. Status:', response.status);
            cards.innerHTML = '<p>Error fetching product list.</p>';
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        cards.innerHTML = '<p>Error fetching product list.</p>';
    }
}

fetchProductListData();

