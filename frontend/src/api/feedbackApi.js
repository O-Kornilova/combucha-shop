import axios from "axios";
import API_BASE_URL from "../utils/config";

export const getFeedbacks = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/api/feedback`);
  return data;
};
