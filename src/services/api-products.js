import axios from 'axios';
const BASE_URL = 'https://62becfba0bc9b125615fd0f7.mockapi.io/api/products';
export const fetchProducts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const postProducts = async newProduct => {
  try {
    const response = await axios({
      body: newProduct,
      url: BASE_URL,
      method: 'POST',
    });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
export const deleteProducts = async id => {
  try {
    const response = await axios({
      url: `${BASE_URL}/${id}`,
      method: 'DELETE',
    });
    return response.data;
  } catch (err) {
    throw new Error(err.message);
  }
};
