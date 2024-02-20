import axios from 'axios';

const API_URL = 'artgallerybackend-production-e5bc.up.railway.app'; 

const productService = {
  getAllProducts: async () => {
    try {
      const response = await axios.get(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching all products:', error);
      return [];
    }
  },
  getProductsByCategory: async (category) => {
    try {
      const response = await axios.get(`${API_URL}/products/${category}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching products by category ${category}:`, error);
      return [];
    }
  }
};

export default productService;
