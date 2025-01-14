
import { BASE_URL } from "../utils/constants";
import axios from "axios";
export const ContactUsAPI = async (
  firstName,
  lastName,
  email,
  phoneNumber,
  message
) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/contact-us`,
      { firstName, lastName, email, phoneNumber, message },
      { withCredentials: true }
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};
