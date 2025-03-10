import { BASE_URL } from "../utils/constants";
import axios from "axios";
export const SignupAPI = async (email, password, confirmPassword) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/register`,
      { email, password, confirmPassword },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
