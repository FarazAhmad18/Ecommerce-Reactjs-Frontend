import React from "react";
import Button from "../Components/Button";
import { GrPowerCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import ProductCardGrid from "../Components/ProductCardGrid";
import Heading from "../Components/Heading";

const ProductDetail = ({ product }) => {
  const relatedProducts = [
    // This would normally come from props or API
    // Placeholder data for example
  ];

  return (
    <div className="mt-5">
      <div className="flex flex-col items-center justify-around sm:items-start md:flex-row">
        <div>
          <img src={product.img} alt={product.title} className="object-contain w-64 h-64" />
        </div>
        <div>
          <div className="flex flex-col mt-5 gap-y-3">
            <p className="text-3xl font-bold">{product.title}</p>
            <p className="text-2xl">Price: {product.price}</p>
            <p>Ratings: {product.rating}</p>
            <Button>Add to Cart</Button>
          </div>

          <div className="w-full px-3 py-2 mt-10 border border-black md:max-w-sm">
            <div className="flex items-center gap-x-2">
              <TbTruckDelivery className="h-10 w-7" />
              <p className="font-semibold">Fast Delivery</p>
            </div>
            <p className="break-words">Enter Your postal code for delivery and availability</p>
          </div>
          <div className="px-3 py-2 border border-t-0 border-black">
            <div className="flex items-center gap-x-2">
              <GrPowerCycle className="h-10 w-7" />
              <p className="font-semibold">Return Delivery</p>
            </div>
            <p>Free 30 day delivery return</p>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <Heading className="ml-20">Related Items</Heading>
        <ProductCardGrid products={relatedProducts} className="ml-1" />
      </div>
    </div>
  );
};

export default ProductDetail;