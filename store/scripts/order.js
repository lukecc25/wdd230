const url = './data/productlist.json';

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const productCode = getQueryParam('code');

async function fetchProductDetails() {
    if (!productCode) {
        console.error('No product code provided in query parameters.');
        return;
    }

    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            const products = data.Product;
            
            const product = products.find(p => p.code === productCode);

            if (product) {
                const productName = document.querySelector('#product-name');
                const productImage = document.querySelector('#product-image');
                const priceElement = document.querySelector('#price');
                const taxElement = document.querySelector('#tax');
                const totalElement = document.querySelector('#total');

                if (productName && productImage && priceElement && taxElement && totalElement) {
                    productName.textContent = product.name || 'No name available';
                    productImage.src = product.imageURL || 'images/question-mark.webp'; // Fallback to placeholder
                    productImage.alt = product.name || 'Product image';
                    
                    const price = product.price;
                    const salesTax = (price * 0.05).toFixed(2);
                    const totalPrice = (price + parseFloat(salesTax)).toFixed(2);

                    priceElement.textContent = price.toFixed(2);
                    taxElement.textContent = salesTax;
                    totalElement.textContent = totalPrice;

                    // Set the product code in the hidden input field
                    document.querySelector('#product-code').value = product.code;
                } else {
                    console.error('Required elements not found in the document.');
                }
            } else {
                console.error('Product not found.');
            }
        } else {
            console.error('Failed to fetch product list. Status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

fetchProductDetails();
