import React from "react";
import OrderDetails from "./OrderDetails.jsx";
import PersonalDetails from "./PersonalDetails.jsx";
import ProductDetails from "./ProductDetails.jsx";
import Quotation from "./Quotation.jsx";
import IssueRaised from "./IssueRaised.jsx";
import Order from "./Order.jsx";
import Header from "./Header.jsx";

const ManageOrders = () => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Header />
        </div>
        <div className="pr-[50px] mt-[40px] w-[1200px] rounded-tl-[20px] rounded-tr-[20px] rounded-br-[0px] rounded-bl-[0px] bg-[#F2F5F5]">
          <div className="flex justify-between">
            <div className=" flex flex-col space-y-2  ">
              <OrderDetails />
              <ProductDetails />
              <IssueRaised />
            </div>
            <div className="flex flex-col space-y-2 mr-[50px]">
              <PersonalDetails />
              <Quotation />
              <Order />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
