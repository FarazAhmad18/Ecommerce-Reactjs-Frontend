const API_BASE_URL = 'https://fakestoreapi.com';
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export const fetchProductCategories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }
};