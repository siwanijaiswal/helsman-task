import React from "react";
import OrderDetails from "./OrderDetails.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import ProductDetails from "./ProductDetails.jsx";

const Product = () => {
  return (
    <>
      <OrderDetails />
      <PersonalDetails />
      <ProductDetails />
    </>
  );
};

export default Product;
