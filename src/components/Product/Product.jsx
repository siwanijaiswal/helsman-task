import React from "react";
import OrderDetails from "./OrderDetails.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import ProductDetails from "./ProductDetails.jsx";

const Product = () => {
  return (
    <>
      <div className="flex justify-between">
        <OrderDetails />
        <PersonalDetails />
      </div>
      <ProductDetails />
    </>
  );
};

export default Product;
