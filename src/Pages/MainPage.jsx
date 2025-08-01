import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import ProductCardGrid from '../Components/ProductCardGrid';
import Categories from '../Components/Categories';
import Featured from '../Components/Featured';
import Heading from '../Components/Heading';
import banner1 from '../assets/banner.png';
import banner2 from '../assets/b2.png';
import { fetchProducts } from '../services/api';

const MainPage = () => {
  const [todayProducts, setTodayProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        // Get random 4 products for "Today's" section
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        setTodayProducts(shuffled.slice(0, 4));
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  return (
    <div>
      <Banner 
        image={banner1}
        title="Upto 10% off voucher"
        subtitle="Summer Collection"
        buttonText="Shop Now"
        highlightText="Special Offer"
      />
      
      <ProductCardGrid 
        products={todayProducts}
        title="Today's"
        loading={loading}
      />
      
      <Categories />
      
      <Banner 
        image={banner2}
        title="Enhance Your Music Experience"
        subtitle="Categories"
        buttonText="Buy Now"
        theme="light"
        highlightText="Electronics"
        className="mb-20"
      />
      
      <Featured />
      
      <ProductCardGrid 
        products={todayProducts.length > 0 ? todayProducts.slice(0, 8) : []}
        title="Our Products"
        showViewAll
      />
    </div>
  );
};

export default MainPage;