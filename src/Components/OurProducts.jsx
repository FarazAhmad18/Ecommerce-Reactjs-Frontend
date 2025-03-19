import React from "react";
import Heading from "./Heading";
import Card from "./Card";
import prod1 from "../assets/2p.png";
import prod2 from "../assets/1p.png";
import prod3 from "../assets/3p.png";
import prod4 from "../assets/5p.png";
import prod10 from "../assets/10p.png";
import prod11 from "../assets/11p.png";
import prod8 from "../assets/8p.png";
import prod5 from "../assets/5p.png";
import prod6 from "../assets/6p.png";
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
        img: prod10,
        price: 12000,
        title: 'Lenovo H2',
        rating: 3.8,
      },
      {
        id: 5,
        img: prod5,
        price: 25000,
        title: "Gaming Console",
        rating: 4,
      },
      {
          id: 6,
          img: prod8,
          price: 18000,
          title: 'Small BookShelf',
          rating: 4.5,
        },
        {
          id: 7,
          img: prod11,
          price: 15000,
          title: 'Cannon DSLR',
          rating: 4.2,
        },
        {
          id: 8,
          img: prod6,
          price: 12000,
          title: 'The North Coat',
          rating: 3.8,
        },
  ];
  return (
    <div className="mt-12 px-6 mb-12">
      <Heading>Our Products</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 lg:grid-cols-4">
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
