import * as types from "../actions/actionTypes";


const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    case types.CREATE_PRODUCT_SUCCESS:
      const products = Object.assign([], state);
      products.push(action.product);
      return products;

    case types.DELETE_PRODUCT_SUCCESS:
      return action.products;

    default:
      return state;
  }

};

export default productReducer;