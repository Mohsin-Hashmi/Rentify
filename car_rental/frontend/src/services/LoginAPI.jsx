import { BASE_URL } from "../utils/constants";
import axios from "axios";
export const LoginAPI = async (email, password) => {
  try {
    const response = axios.post(
      `${BASE_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    throw err.response?.data || { message: "Something went wrong" };
  }
};
