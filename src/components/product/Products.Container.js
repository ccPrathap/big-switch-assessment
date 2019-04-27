import React, {
  Fragment
} from 'react';
import PropTypes from 'prop-types';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';
// import toastr from 'toastr';
// import ProductList from './ProductList';
import * as productActions from '../../actions/productActions';

const ProductsPage = props => {

  const redirectToAddProduct = () => props.history.push('/product');

  // const deleteProduct = product => props.actions.deleteProduct(product.id)
  //   .then(toastr.success('Product deleted successfully!'))
  //   .catch(error => {
  //     toastr.error(error);
  //   });

    return (
      <Fragment>
        <h1>Products</h1>
        <input
          type="submit"
          value="Add Product"
          onClick={redirectToAddProduct} />
        {/* <ProductList products={props.productList} onDelete={deleteProduct} /> */}
      </Fragment>
    );
};

ProductsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  productList: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  productList: state.products
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);