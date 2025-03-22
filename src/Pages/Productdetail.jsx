import React from "react";
import p1 from "../assets/1p.png";
import Button from "../Components/Button";
import { GrPowerCycle } from "react-icons/gr";
import { TbTruckDelivery } from "react-icons/tb";
import TodaysCard from "../Components/TodaysCard";
import Heading from "../Components/Heading";
const Productdetail = () => {
  const item = [
    {
      id: 1,
      img: p1,
      price: 25000,
      title: "LED 40 inches",
      rating: 4,
    },
  ];
  return (
    <div className="mt-5">
      <div className="flex justify-around flex-col items-center sm:items-start md:flex-row">
        <div>
          <img src={p1} alt="" className="h-64 w-64 object-contain" />
        </div>
        <div>
          {item.map((i) => {
            return (
              <div className="flex gap-y-3 flex-col mt-5">
                <p className="text-3xl font-bold">{i.title}</p>
                <p className="text-2xl">Price: {i.price}</p>
                <p>Ratings: {i.rating}</p>
                <Button>Add to Cart</Button>
              </div>
            );
          })}

          <div className="w-full md:max-wd-sm mt-10 border border-black px-3 py-2">
            <div className="flex items-center gap-x-2">
          <TbTruckDelivery className="h-10 w-7" />
            <p className="font-semibold">Fast Delivery</p>
            </div>
            <p className="break-words">Enter Your postal code for delivery and availability</p>
          </div>
          <div className=" border border-black px-3 py-2 border-t-0">
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
        <TodaysCard className='ml-1'/>
      </div>
    </div>
  );
};

export default Productdetail;
