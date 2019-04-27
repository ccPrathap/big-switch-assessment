const products = [{
    id: 1,
    product: "iPhone X",
    brand: "Apple",
    category: "Phones",
    price: "749.99",
    inStock: true,
    rating: 4
  },
  {
    id: 2,
    product: "Inspiron 15",
    brand: "Dell",
    category: "Computers",
    price: "1400.00",
    inStock: false,
    rating: 3
  },{
    id: 3,
    product: "Pixed 2 XL",
    brand: "Google",
    category: "Phones",
    price: "600.00",
    inStock: false,
    rating: 4
  },{
    id: 4,
    product: "EOS Rebel",
    brand: "Canon",
    category: "Cameras",
    price: "345.49",
    inStock: true,
    rating: 5
  }
];

class ProductApi {
  static getAllProducts = () => new Promise(resolve => {
    setTimeout(() => {
      resolve(Object.assign([], products));
    });
  });

  static saveProduct = product => {
    // To avoid manipulating object passed in.
    product = Object.assign({}, product);
    return new Promise((resolve, reject) => {
      const productIds = products.map(item => item.id);
      setTimeout(() => {
        // Just simulating creation here.
        // The server would generate ids and watchHref's for new products in a real app.
        // Cloning so copy returned is passed by value rather than by reference.
        if (productIds.includes(parseInt(product.id)))
          reject("ID Alredy exists!");
        products.push(product);
        resolve(product);
      });
    });
  };

  static deleteProduct = productId => new Promise(resolve => {
    setTimeout(() => {
      const indexOfProductToDelete = products.findIndex(a => a.id === productId);
      products.splice(indexOfProductToDelete, 1);
      resolve(Object.assign([], products));
    });
  });
}

export default ProductApi;