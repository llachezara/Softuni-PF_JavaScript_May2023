function storeProvision(productsInStock, productsOrdered) {

    let products = {};

    for (let i = 0; i < productsInStock.length; i += 2) {

        let currProduct = productsInStock[i];
        let quantity = Number(productsInStock[i + 1]);

        products[currProduct] = quantity;
    }

    for (let j = 0; j < productsOrdered.length; j += 2) {

        let currProduct = productsOrdered[j];
        let quantity = Number(productsOrdered[j + 1]);

        if (products.hasOwnProperty(currProduct)) {
            products[currProduct] += quantity;
        } else{
            products[currProduct] = quantity;
        }
    }

    for (const key in products) {
       console.log(`${key} -> ${products[key]}`)
    }
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7',
        'Tomatoes', '70', 'Bananas', '30'
    ]
)