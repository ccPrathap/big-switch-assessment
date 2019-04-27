import React from "react";
import {
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Products from "./components/product/Products.Container";
import AddProduct from "./components/product/AddProduct.Container";

export default (
  <Switch>
    <Route exact path="/" component={Products} />
    <Route path="/product" component={AddProduct} />
    <Redirect path="*" to="/" />
  </Switch>
);