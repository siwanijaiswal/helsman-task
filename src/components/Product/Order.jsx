import React from "react";
import Card from "./Card";

const Order = () => {
  const OrderSummary = {
    Total: 20000,
    Discount: 1540,
    DeliveryCharges: 700,
    OrderDate: "27/03/2024",
  };

  const Total =
    OrderSummary.Total - OrderSummary.Discount + OrderSummary.DeliveryCharges;
  console.log(Total);

  return (
    <div className="pt-[17px] pb-[20px] w-[450px]">
      <div className="rounded-[12px] pt-0 pr-6 pb-4 pl-6  bg-[#E9E9E9]">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-left">Order Summary</h2>
        </div>
        <div className="h-[1px] bg-[#AABAB9] mx-6"></div>
        <div className="px-6 py-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <p className="text-lg text-gray-400">Total</p>
              <p className="text-[#36403F]">₹{OrderSummary.Total} </p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-400">Discount</p>
              <p className="text-[#36403F]">-₹{OrderSummary.Discount}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-gray-400">Delivery Charges</p>
              <p className="text-[#36403F]">₹{OrderSummary.DeliveryCharges}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg text-[#36403F]">Total</p>
              <p className="text-[#36403F]">₹{Total}</p>
            </div>

            <div className="rounded-lg shadow-lg bg-[#5999A4] w-[360px] h-[150px] mt-[60px]">
              <div className="px-6 py-1">
                <h2 className="text-l font-semibold text-left text-[#E6F0F1]">
                  Payment Method
                </h2>
              </div>
              <div className="px-6 py-1">
                <div className="">
                  <p className="text-[#B2D0D5]">Order Date:</p>
                  <p className="text-[#E6F0F1]">₹{OrderSummary.OrderDate}</p>
                </div>
                <div className="flex justify-between">
                  <div className="">
                    <p className="text-[#B2D0D5]">Amount:</p>
                    <p className="text-[#E6F0F1]">₹{Total}</p>
                  </div>
                  <button className="bg-[#E6F0F1] h-[35px] w-[165px] mt-[20px]  bottom-0 right-0 py-0 px-4 rounded-lg text-[#076777]">
                    Request Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
