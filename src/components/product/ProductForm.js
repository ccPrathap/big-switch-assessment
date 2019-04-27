import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const ProductForm = ({
  productInfo,
  allCategories,
  ratings,
  onSave,
  onChange,
  saving,
  errors
}) => {
  const hasError = Object.values(errors).filter(item => Boolean(item)).length > 0;
  return (
    <form>
      <h2>Add Product</h2>
      <TextInput
        name="id"
        label="ID"
        value={productInfo.id}
        onChange={onChange}
        error={errors.id}
      />
      <TextInput
        name="product"
        label="Product"
        value={productInfo.product}
        onChange={onChange}
        error={errors.product}
      />
      <TextInput
        name="brand"
        label="Brand"
        value={productInfo.brand}
        onChange={onChange}
        error={errors.brand}
      />
      <SelectInput
        name="category"
        label="Category"
        value={productInfo.category}
        options={allCategories}
        onChange={onChange}
        error={errors.category}
      />
      <TextInput
        name="price"
        label="Price (In dollars)"
        value={productInfo.price}
        onChange={onChange}
        error={errors.price}
      />
      <SelectInput
        name="inStock"
        label="In Stock"
        value={productInfo.inStock ? "Yes" : "No"}
        options={[{
            text: "Yes",
            value: "Yes"
          },
          {
            text: "No",
            value: "No"
          }
        ]}
        onChange={onChange}
      />
      <SelectInput
        name="rating"
        label="Rating"
        value={String(productInfo.rating)}
        options={ratings}
        onChange={onChange}
      />
      <input
        type="submit"
        disabled={saving || hasError}
        value={saving ? "Saving..." : "Save"}
        className={`btn ${hasError ? "btn-secondary" : "btn-primary"}`}
        onClick={onSave}
      />
    </form>
  );
};

ProductForm.propTypes = {
  productInfo: PropTypes.object.isRequired,
  allCategories: PropTypes.array.isRequired,
  ratings: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ProductForm;