import Card from "./Card";

const OrderDetails = () => {
  const orderDetails = {
    id: "ORD12345678",
    date: "2024-08-14",
    billingAddress: {
      addressLine1: "123, MG Road",
      addressLine2: "Near Central Mall",
      addressLine3: "Indiranagar",
      location: "Bengaluru, Karnataka, 560038",
    },
    shippingAddress: {
      addressLine1: "456, Park Street",
      addressLine2: "Opposite City Hospital",
      addressLine3: "Sector 5, Salt Lake",
      location: "Kolkata, West Bengal, 700064",
    },
  };

  return (
    <div className="p-8">
      <Card heading="Order Details">
        <div className="space-y-2">
          <div className="flex justify-between">
            <button className="bg-green-100 py-2 px-4 rounded-lg ">
              Order Approved
            </button>
            <div className="space-x-4">
              <button className="bg-red-100 py-2 px-4 rounded-lg text-red-400">
                Request Payment
              </button>
              <button className="bg-cyan-300 py-2 px-4 rounded-lg text-white">
                Cancel Order
              </button>
            </div>
          </div>
          <div className="flex justify-between">
            <button className="bg-red-100 py-2 px-4 rounded-lg">
              Pending Payment
            </button>
            <button className="bg-cyan-600 py-2 px-4 rounded-lg text-white">
              Send Order in Process
            </button>
          </div>
        </div>
        <div className="h-[1px] bg-gray-800 my-4"></div>
        <div className="grid grid-cols-2">
          <div className="space-y-4">
            <div>
              <p className="my-2">Billing to:</p>
              <p className="my-2 text-cyan-600">Location</p>
              <div>
                <p>{orderDetails.billingAddress.addressLine1}</p>
                <p>{orderDetails.billingAddress.addressLine2}</p>
                <p>{orderDetails.billingAddress.addressLine3}</p>
              </div>
            </div>
            <div>
              <p className="my-2">Order Id:</p>
              <p>{orderDetails.id}</p>
            </div>
            <div>
              <p className="my-2">Order Date:</p>
              <p>{orderDetails.date}</p>
            </div>
          </div>
          <div>
            <p className="my-2">Shipping To:</p>
            <p className="my-2 text-cyan-600">Location</p>
            <div>
              <p>{orderDetails.shippingAddress.addressLine1}</p>
              <p>{orderDetails.shippingAddress.addressLine2}</p>
              <p>{orderDetails.shippingAddress.addressLine3}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default OrderDetails;
