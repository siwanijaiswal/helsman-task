import Card from "./Card";

const ProductDetails = () => {
  const product = {
    images: [1, 2, 3],
    name: "Custom Printed T-Shirt",
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
    <Card>
      <div className="space-y-4">
        <div className="flex flex-wrap">
          {product.images.map((image, ind) => (
            <img src="/" key={ind} />
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
              <p>{product.productInfo.height}</p>

              <p className="font-semibold">Length:</p>
              <p>{product.productInfo.length}</p>

              <p className="font-semibold">Width:</p>
              <p>{product.productInfo.width}</p>
            </div>
          </div>
          <div>
            <p className="text-lg text-gray-400">Quantity:</p>
            <p>{product.qty} Items</p>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-400">Any additional comments</p>
          <p>{product.additionInfo}</p>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
