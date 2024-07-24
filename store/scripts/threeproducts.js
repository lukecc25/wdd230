document.addEventListener('DOMContentLoaded', async () => {
    const url = './data/productlist.json';
    const cardsContainer = document.querySelector('#cards');

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const products = data.Product;

            // Ensure we only take the first 3 products
            const productsToShow = products.slice(0, 3);

            productsToShow.forEach(product => {
                const card = document.createElement('section');
                card.className = 'card';
                
                card.innerHTML = `
                    <h2>${product.name}</h2>
                <img src="${product.imageURL}" alt="${product.name}" loading="lazy" height="250"  onerror="this.onerror=null; this.src='default-image.jpg';">
                <h2>$${product.price}</h2>
                <a href="order.html?code=${product.code}">Order Now</a>
            `;

                cardsContainer.appendChild(card);
            });
        } else {
            console.error('Failed to fetch product list. Status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
});
