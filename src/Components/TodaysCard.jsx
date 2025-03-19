import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import prod1 from "../assets/2p.png";
import prod2 from "../assets/1p.png";
import prod3 from "../assets/3p.png";
import prod4 from "../assets/5p.png";
import Button from "./Button";
// import prod5 from "../assets/5p.png";

const TodaysCard = () => {
  const cardContent = [
    {
      id: 1,
      img: prod1,
      price: 25000,
      title: "Kids Electric car",
      rating: 4,
    },
    {
        id: 2,
        img: prod2,
        price: 18000,
        title: 'Led 40 inches',
        rating: 4.5,
      },
      {
        id: 3,
        img: prod3,
        price: 15000,
        title: 'Nike Shoes n4',
        rating: 4.2,
      },
      {
        id: 4,
        img: prod4,
        price: 12000,
        title: 'Gaming Console S3',
        rating: 3.8,
      },
  ];
  return (
    <div className="mt-12 px-6 mb-12">
      <Heading>Today's</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-4 mt-12 px-6 mb-12 max-w-screen-xl mx-auto">
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
      <div className="flex justify-center mt-16">
      <Button children={"View All Products"}/>
      </div>
      <div className="w-2/3 border-b-2 border-gray-300 mx-auto mt-6"></div>

    </div>
  );
};

export default TodaysCard;
