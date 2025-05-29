// Question 1 :
// Question 2 :
function logProduct(p) {
    console.log("ProductId: ".concat(p.id, "\n        Product Name: ").concat(p.name, "\n        Product price:").concat(p.price, "\n        Available:").concat(p.inStock));
}
var product1 = {
    id: 1,
    name: "T-shirt",
    price: 89.99,
    inStock: true,
};
logProduct(product1);
// Question 4 :
function wrapValue(value) {
    return [value];
}
var myProduct = wrapValue(product1);
console.log(myProduct);
var myProduct2 = {
    data: product1,
    success: true,
    message: "Product Retrieved Successfully",
};
var myProduct3 = {
    data: product1,
    success: false,
    message: "Can't Retrieve Product",
};
// Bonus Question :
function getProduct(result) {
    if (result.success) {
        logProduct(result.data);
    }
    else {
        console.log("Error: ".concat(result.message));
    }
}
getProduct(myProduct2);
getProduct(myProduct3);
