document.addEventListener('DOMContentLoaded', async () => {
    // Function to get query parameter values
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // Retrieve values from query parameters
    const productCode = getQueryParam('product-code');
    const firstName = getQueryParam('firstname');
    const lastName = getQueryParam('lastname');
    const email = getQueryParam('email');
    const phone = getQueryParam('phone');
    const streetAddress = getQueryParam('street-address');
    const city = getQueryParam('city');
    const state = getQueryParam('state');
    const zipCode = getQueryParam('zip-code');
    const giftMessage = getQueryParam('gift-message');

    if (!productCode) {
        console.error('Product code is missing.');
        return;
    }

    try {
        const response = await fetch('./data/productlist.json');
        if (response.ok) {
            const data = await response.json();
            const product = data.Product.find(p => p.code === productCode);

            if (product) {
                const priceBeforeTax = product.price;
                const salesTax = (priceBeforeTax * 0.05).toFixed(2);
                const totalPrice = (priceBeforeTax + parseFloat(salesTax)).toFixed(2);

                document.querySelector('#product-name').textContent = product.name || 'N/A';
                document.querySelector('#product-code').textContent = product.code || 'N/A';
                document.querySelector('#price').textContent = priceBeforeTax.toFixed(2);
                document.querySelector('#tax').textContent = salesTax;
                document.querySelector('#total').textContent = totalPrice;
            } else {
                console.error('Product not found.');
            }
        } else {
            console.error('Failed to fetch product list. Status:', response.status);
        }
    } catch (error) {
        console.error('Error fetching product details:', error);
    }

    // Display customer information
    document.querySelector('#first-name').textContent = firstName || 'N/A';
    document.querySelector('#last-name').textContent = lastName || 'N/A';
    document.querySelector('#email').textContent = email || 'N/A';
    document.querySelector('#phone').textContent = phone || 'N/A';
    document.querySelector('#street-address').textContent = streetAddress || 'N/A';
    document.querySelector('#city').textContent = city || 'N/A';
    document.querySelector('#state').textContent = state || 'N/A';
    document.querySelector('#zip-code').textContent = zipCode || 'N/A';
    document.querySelector('#gift-message').textContent = giftMessage || 'N/A';
});
