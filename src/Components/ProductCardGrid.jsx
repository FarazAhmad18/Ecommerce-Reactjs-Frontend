import React from 'react';
import Card from './Card';
import Button from './Button';
import Heading from './Heading';
import { useNavigate } from 'react-router-dom';

const ProductCardGrid = ({ 
  products = [], // Default empty array
  title = "Today's", 
  showViewAll = false,
  className = '',
  loading = false
}) => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate('/products');
  };

  if (loading) {
    return (
      <div className={`mt-12 px-6 mb-12 ${className}`}>
        <Heading>{title}</Heading>
        <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-6 mx-auto mt-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-md animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className={`mt-12 px-6 mb-12 ${className}`}>
        <Heading>{title}</Heading>
        <div className="py-12 text-center">No products found</div>
      </div>
    );
  }

  return (
    <div className={`mt-12 px-6 mb-12 ${className}`}>
      {title && <Heading>{title}</Heading>}
      <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-6 mx-auto mt-12 mb-12 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
      
      {showViewAll && (
        <div className="flex justify-center mt-16">
          <Button onClick={handleViewAll}>View All Products</Button>
        </div>
      )}
      
      <div className="w-2/3 mx-auto mt-6 border-b-2 border-gray-300"></div>
    </div>
  );
};

export default ProductCardGrid;