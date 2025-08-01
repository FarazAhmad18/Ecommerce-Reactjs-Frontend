import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import prod7 from "../assets/7p.png";
import prod8 from "../assets/8p.png";
import prod9 from "../assets/9p.png";
import prod6 from "../assets/6p.png";
import Button from "./Button";
const TodaysCard = () => {
  const cardContent = [
    {
      id: 1,
      img: prod6,
      price: 25000,
      title: "The North Coat",
      rating: 4,
    },
    {
        id: 2,
        img: prod7,
        price: 18000,
        title: 'S-series comfort chair',
        rating: 4.5,
      },
      {
        id: 3,
        img: prod8,
        price: 15000,
        title: 'Small BookShelf',
        rating: 4.2,
      },
      {
        id: 4,
        img: prod9,
        price: 12000,
        title: 'RGB Liquid CPU',
        rating: 3.8,
      },
  ];
  return (
    <div className="px-6 mt-12 mb-12">
      <Heading>Today's</Heading>
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-6 mx-auto mt-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
        {cardContent.map((i) => {
          return(
          <Card
            src={i.img}
            price={i.price}
            title={i.title}
            rating={i.rating}
          />)
        })}
      </div>
      <div className="w-2/3 mx-auto mt-16 border-b-2 border-gray-300"></div>

    </div>
  );
};

export default TodaysCard;
