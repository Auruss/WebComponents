/**
 * In real life applications these functions would actually do ajax requests to responsible service
 */

/**
 * Gets all available products
 * @returns {*[]}
 */
export function getProducts () {
    return [
        { id: 0, name: 'Test product #1', desc: 'This is a test product', price: 12.5, category: 0 },
        { id: 1, name: 'Test product #2', desc: 'This is a test product', price: 22.5, category: 0 },
        { id: 2, name: 'Test product #3', desc: 'This is a test product', price: 32.5, category: 1 },
        { id: 3, name: 'Test product #4', desc: 'This is a test product', price: 42.5, category: 1 },
        { id: 4, name: 'Test product #5', desc: 'This is a test product', price: 62.5, category: 2 }
    ]
}

/**
 * Gets all available products in a category
 * @param categoryId
 */
export function getProductsInCategory (categoryId) {
    var products = getProducts();
    var output = [];

    for (var i = 0; i < products.length; i++) {
        if (products[i].category == categoryId) {
            output.push(products[i]);
        }
    }

    return output;
}
