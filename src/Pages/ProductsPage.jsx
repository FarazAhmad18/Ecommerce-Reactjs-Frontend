import React, { useEffect, useState } from 'react';
import ProductCardGrid from '../Components/ProductCardGrid';
import Heading from '../Components/Heading';
import { fetchProducts } from '../services/api';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) {
    return <div className="py-12 text-center">Loading all products...</div>;
  }

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <Heading className="ml-6">All Products</Heading>
      <ProductCardGrid 
        products={products}
        className="mt-8"
      />
    </div>
  );
};

export default ProductsPage;