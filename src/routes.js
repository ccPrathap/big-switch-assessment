import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Products from './components/product/Products.Container';
// import AddProduct from './components/product/AddProduct.Container';
// import NotFound from './components/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Products} />
    {/* <Route path="/product" component={AddProduct} /> */}
    {/* <Route path="*" component={NotFound} /> */}
  </Switch>
);