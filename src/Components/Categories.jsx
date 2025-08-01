import React, { useEffect, useState } from "react";
import {
  FaMobileAlt,
  FaDesktop,
  FaCamera,
  FaHeadphones,
} from "react-icons/fa";
import { MdWatch } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import Heading from "./Heading";
import { fetchProductCategories } from '../services/api';

const categoryIcons = {
  electronics: <FaMobileAlt size={30} />,
  jewelery: <MdWatch size={30} />,
  "men's clothing": <FaDesktop size={30} />,
  "women's clothing": <FaCamera size={30} />,
};

const defaultCategories = [
  { name: "Phones", icon: <FaMobileAlt size={30} /> },
  { name: "Computer", icon: <FaDesktop size={30} /> },
  { name: "SmartWatch", icon: <MdWatch size={30} /> },
  { name: "Camera", icon: <FaCamera size={30} /> },
  { name: "Headphones", icon: <FaHeadphones size={30} /> },
  { name: "Gaming", icon: <HiSpeakerWave size={30} /> },
];

const Categories = () => {
  const [categories, setCategories] = useState(defaultCategories);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const apiCategories = await fetchProductCategories();
        const mappedCategories = apiCategories.map(cat => ({
          name: cat,
          icon: categoryIcons[cat] || <FaDesktop size={30} />
        }));
        setCategories(mappedCategories.slice(0, 6)); // Limit to 6 categories
      } catch (error) {
        console.error('Error loading categories:', error);
        // Fallback to default categories if API fails
        setCategories(defaultCategories);
      }
    };

    loadCategories();
  }, []);

  return (
    <div className="mb-14">
      <Heading className="ml-6">Categories</Heading>

      <div className="flex flex-wrap justify-center gap-6 mt-10">
        {categories.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center h-32 px-4 py-4 space-y-2 transition-all duration-300 border-2 border-gray-300 rounded-lg cursor-pointer w-36 hover:shadow-md"
          >
            {item.icon}
            <p className="text-sm font-medium text-center capitalize">{item.name}</p>
          </div>
        ))}
      </div>

      <div className="w-2/3 mx-auto mt-4 border-b-2 border-gray-300"></div>
    </div>
  );
};

export default Categories;