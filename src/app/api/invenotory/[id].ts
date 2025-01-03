import axios from "axios";

const updateInventory = async (productId: any) => {
    try {
      const response = await axios.get(`/api/inventory/${productId}`);
      return response.data.stock;
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };
  