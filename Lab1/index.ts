// Question 1 :

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

// Question 2 :

function logProduct(p: Product) {
  console.log(
    `ProductId: ${p.id}
        Product Name: ${p.name}
        Product price:${p.price}
        Available:${p.inStock}`
  );
}

let product1: Product = {
  id: 1,
  name: "T-shirt",
  price: 89.99,
  inStock: true,
};

logProduct(product1);

// Question 3 :

type ProductOrError = Product | string;

// Question 4 :

function wrapValue<T>(value: T): T[] {
  return [value];
}

let myProduct = wrapValue<Product>(product1);
console.log(myProduct);

interface ApiResult<T> {
  data: T;
  success: boolean;
  message: string;
}
let myProduct2: ApiResult<Product> = {
  data: product1,
  success: true,
  message: "Product Retrieved Successfully",
};

let myProduct3: ApiResult<Product> = {
  data: product1,
  success: false,
  message: "Can't Retrieve Product",
};

// Bonus Question :

function getProduct(result: ApiResult<Product>) {
  if (result.success) {
    logProduct(result.data);
  } else {
    console.log(`Error: ${result.message}`);
  }
}

getProduct(myProduct2);
getProduct(myProduct3);
