import React, {
  Component
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import {
  bindActionCreators
} from "redux";
import toastr from "toastr";
import ProductForm from "./ProductForm";
import * as productActions from "../../actions/productActions";

const categories = [
  "Computers",
  "TVs",
  "Phones",
  "Cameras",
  "Smart Home Devices",
  "Video Games"
];
const ratings = [1, 2, 3, 4, 5];

class AddProductPage extends Component {
  state = {
    product: {
      id: "",
      product: "",
      brand: "",
      category: categories[0],
      price: "",
      inStock: false,
      rating: ratings[0]
    },
    errors: {
      id: "",
      product: "",
      brand: "",
      price: ""
    },
    saving: false
  };

  validateInput = (field, value) => {
    const errors = Object.assign({}, this.state.errors);
    switch (field) {
      case "id":
        if (isNaN(parseInt(value))) errors.id = "Id Should be number.";
        else errors.id = "";
        return this.setState({
          errors
        });
      case "product":
        if (value.length > 50) errors.product = "Max 50 characters are allowed.";
        else errors.product = "";
        return this.setState({
          errors
        });
      case "brand":
        if (value.length > 50) errors.brand = "Max 50 characters are allowed.";
        else errors.brand = "";
        return this.setState({
          errors
        });
      case "price":
        if (isNaN(Number(value))) errors.price = "Price Should be number/double.";
        else errors.price = "";
        return this.setState({
          errors
        });
      default:
        return this.setState({
          errors
        });
    }
  };

  updateProductState = event => {
    let value;
    const field = event.target.name;
    const { product } = this.state;

    if(field === "inStock") {
      value = event.target.value === "Yes";
    } else {
      value = event.target.value;
    }
    product[field] = value;
    this.validateInput(field, value);
    return this.setState({product: product});
  };

  saveProduct = event => {
    event.preventDefault();
    const {
      id,
      product,
      brand,
      price
    } = this.state.product;
    if (!(id.trim() || product.trim() || brand.trim() || price.trim()))
      return toastr.error("All fields are mandatory!");
    else {
      this.setState({
        saving: true
      });
      this.props.actions.saveProduct(this.state.product)
        .then(() => this.redirect())
        .catch(error => {
          toastr.error(error);
          this.setState({
            saving: false
          });
        });
    }
  };

  redirect = () => {
    this.setState({saving: true});
    toastr.success("Product saved.");
    this.props.history.push("/");
  };

  render() {
    return (
        <ProductForm 
          allCategories={categories.map(item => ({
            text: item,
            value: item
          }))}
          ratings={ratings.map(item => ({
            text: item,
            value: item
          }))}
          productInfo={this.state.product}
          errors={this.state.errors}
          onChange={this.updateProductState}
          onSave={this.saveProduct}
          saving={this.state.saving} />
    );
  }
}

AddProductPage.propTypes = {
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  productList: state.products
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(productActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage);