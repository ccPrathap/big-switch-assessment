const products = [{
    id: 1,
    product: "react-flux-building-applications"
  },
  {
    id: 2,
    product: "clean-code"
  },
  {
    id: 3,
    product: "architecture"
  },
  {
    id: 4,
    product: "career-reboot-for-developer-mind"
  }
];

//This would be performed on the server in a real app.
const generateId = () => 1;

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
      setTimeout(() => {
        // Just simulating creation here.
        // The server would generate ids and watchHref's for new products in a real app.
        // Cloning so copy returned is passed by value rather than by reference.
        product.id = generateId(product);
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