import * as types from './actionTypes';
import productApi from '../api/mockProductApi';

export const loadProductsSuccess = products => ({
  type: types.LOAD_PRODUCTS_SUCCESS,
  products
});

export const createProductSuccess = product => ({
  type: types.CREATE_PRODUCT_SUCCESS,
  product
});

export const deleteProductSuccess = products => ({
  type: types.DELETE_PRODUCT_SUCCESS,
  products
});

export const loadProducts = () => dispatch =>
  productApi.getAllProducts().then(products => {
    dispatch(loadProductsSuccess(products));
  }).catch(error => {
    throw (error);
  });

export const saveProduct = product => dispatch =>
  productApi.saveProduct(product).then(product => {
    dispatch(createProductSuccess(product));
  }).catch(error => {
    throw (error);
  });

export const deleteProduct = productId => dispatch =>
  productApi.deleteProduct(productId).then(products => {
    dispatch(deleteProductSuccess(products));
  }).catch(error => {
    throw (error);
  });