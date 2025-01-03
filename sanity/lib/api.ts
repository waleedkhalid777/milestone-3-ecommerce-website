export const fetchProducts = async () => {
    const response = await fetch('/api/getProducts');
    return response.json();
  };
  