import * as types from '../actions/actionTypes';

const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_PRODUCTS_SUCCESS:
      return action.products;

    case types.CREATE_PRODUCT_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.products)
      ];

    // case types.UPDATE_PRODUCT_SUCCESS:
    //   return [
    //     ...state.filter(product => product.id !== action.product.id),
    //     Object.assign({}, action.product)
    //   ];

    case types.DELETE_PRODUCT_SUCCESS:
      return action.products;

    default:
      return state;
  }

};

export default productReducer;