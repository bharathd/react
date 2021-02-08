import axios from "axios";

// Get recent order
export const getRecentOrder = async () => {
  const result = await axios.get("http://localhost:3001/orders");
  return result.data;
};

// Get order details by id
export const getOrder = async (id) => {
  const result = await axios.get("http://localhost:3001/orders/" + id);
  return result.data;
};
