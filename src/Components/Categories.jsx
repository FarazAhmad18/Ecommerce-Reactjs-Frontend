import React from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaHeadphones,
} from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import Heading from "./Heading";

const Categories = () => {
  const iconCard = [
    { icon: <FaMobileAlt size={30} />, title: "Phones" },
    { icon: <FaDesktop size={30} />, title: "Computer" },
    { icon: <MdWatch size={30} />, title: "SmartWatch" },
    { icon: <FaCamera size={30} />, title: "Camera" },
    { icon: <FaHeadphones size={30} />, title: "Headphones" },
    { icon: <HiSpeakerWave size={30} />, title: "Gaming" },
  ];

  return (
    <div>
      <Heading className="ml-6">Categories</Heading>

      <div className="flex justify-center flex-wrap gap-6 mt-10 mb-14">
        {iconCard.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer w-36 h-32 border-2 border-gray-300 rounded-lg px-4 py-4 flex flex-col items-center justify-center space-y-2 hover:shadow-md transition-all duration-300"
          >
            {item.icon}
            <p className="text-sm font-medium text-center">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="w-2/3 border-b-2 mx-auto border-gray-300 mt-4"></div>
    </div>
  );
};

export default Categories;
