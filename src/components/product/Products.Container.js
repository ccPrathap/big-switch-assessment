import React, {
  Fragment
} from "react";
import PropTypes from "prop-types";
import {
  connect
} from "react-redux";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  bindActionCreators
} from "redux";
import toastr from "toastr";
// import ProductList from "./ProductList";
import * as productActions from "../../actions/productActions";

const ProductsPage = props => {

  const redirectToAddProduct = () => props.history.push("/product");

  const deleteProduct = productId => props.actions.deleteProduct(productId)
    .then(toastr.success("Product deleted successfully!"))
    .catch(error => {
      toastr.error(error);
    });

    return (
      <Fragment>
        <h1>Products</h1>
        <div style={{paddingBottom: "10px"}}>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-primary"
            onClick={redirectToAddProduct}
          />
        </div>
        <ReactTable
          data={props.productList}
          filterable
          defaultFilterMethod = {
            (filter, row) =>
            String(row[filter.id]).toLowerCase()
            .indexOf(filter.value.toLowerCase()) >= 0
          }
          columns={[
            {
              Header: "Product details",
              columns: [
                {
                  Header: "ID",
                  accessor: "id"
                },
                {
                  Header: "Product",
                  accessor: "product"
                },
                {
                  Header: "Brand",
                  accessor: "brand"
                },
                {
                  Header: "Category",
                  accessor: "category"
                },
                {
                  Header: "Price",
                  accessor: "price",
                  Cell: ({ value }) => `$${value ? value : ''}`
                },
                {
                  Header: "In Stock",
                  accessor: "inStock",
                  filterMethod: (filter, row) => filter.value &&
                    String(row[filter.id] ? "yes" : "no")
                    .indexOf(filter.value.toLowerCase()) >= 0,
                  Cell: ({
                    value
                  }) => value ? "Yes" : "No"
                },
                {
                  Header: "Rating",
                  accessor: "rating"
                },
                {
                  Header: "",
                  Filter: () => <div />,
                  sortable: false,
                  Cell: row => (
                    <button
                      className="btn btn-link"
                      onClick={() => deleteProduct(row.original.id)}
                    >
                      Delete
                    </button>
                  )
                }
              ]
            }
          ]}
          defaultSorted={[
            {
              id: "id",
              asc: true
            }
          ]}
          defaultPageSize={5}
          className="-striped -highlight"
        />
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