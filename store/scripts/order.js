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
                const productCodeElement = document.querySelector('#product-code');

                if (productName && productImage && productCodeElement) {
                    productName.textContent = product.name || 'No name available';
                    productImage.src = product.imageURL || 'default-image.jpg';
                    productImage.alt = product.name || 'Product image';
                    productCodeElement.textContent = product.code || 'No code available';
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
