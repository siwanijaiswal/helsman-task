import Card from "./Card";
import Bag from "../../assets/bag.jfif";
import Prod1 from "../../assets/Prod1.jfif";
import Prod2 from "../../assets/Prod2.jfif";
import Prod3 from "../../assets/Prod3.jfif";
import Prod4 from "../../assets/Prod4.jfif";
import Prod5 from "../../assets/Prod5.jfif";

const ProductDetails = () => {
  const product = {
    images: [1, 2, 3],
    name: "BOPP Bags",
    qty: 300,
    productInfo: {
      height: "30 inch",
      length: "70 inch",
      width: "50 inch",
    },
    printing: [1, 2, 3, 4, 5],
    additionInfo:
      "Made of 100% cotton, available in multiple sizes and colors.",
  };

  return (
    <div className="pt-0 pr-[20px] pb-4 pl-8 w-[700px]">
      <Card heading="Product Details">
        <div className="space-y-4">
          <div className="flex flex-wrap">
            {product.images.map((image, ind) => (
              <img
                className=" w-[160px] h-[100px] m-[20px] rounded-[12px]"
                src={Bag}
                key={ind}
              />
            ))}
          </div>
          <div className="grid grid-cols-2">
            <div className="space-y-4">
              <div>
                <p className="text-lg text-gray-400">Product Name:</p>
                <p>{product.name}</p>
              </div>
              <div className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2">
                <p className="font-semibold">Height:</p>
                <p className="text-cyan-600">{product.productInfo.height}</p>

                <p className="font-semibold">Length:</p>
                <p className="text-cyan-600">{product.productInfo.length}</p>

                <p className="font-semibold">Width:</p>
                <p className="text-cyan-600">{product.productInfo.width}</p>
              </div>
            </div>
            <div>
              <p className="text-lg text-gray-400">Quantity:</p>
              <p>{product.qty} Items</p>
            </div>
          </div>
          <p className="text-lg text-gray-400">Printing:</p>
          <div className="flex flex-wrap">
            <img
              className="w-[80px] h-[80px] rounded-[12px] m-[5px]"
              src={Prod1}
            />
            <img
              className="w-[80px] h-[80px] rounded-[12px] m-[5px]"
              src={Prod2}
            />
            <img
              className="w-[80px] h-[80px] rounded-[12px] m-[5px]"
              src={Prod3}
            />
            <img
              className="w-[80px] h-[80px] rounded-[12px] m-[5px]"
              src={Prod4}
            />
            <img
              className="w-[80px] h-[80px] rounded-[12px] m-[5px]"
              src={Prod5}
            />
          </div>
          <div>
            <p className="text-lg text-gray-400">Any additional comments</p>
            <p>{product.additionInfo}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetails;
