import { LoginAPI } from "../services/LoginAPI";
import validateForm from "../utils/validate";

// Handle login form submission
const handleSubmit = async (e, resetFrom, fromData) => {
    e.preventDefault();

    const { email, password } = fromData;
    if (validateForm()) {
        try {
            // Make the API call
            const response = await LoginAPI(email, password);
            // Store token if required
            if (response?.token) {
                localStorage.setItem("token", response.token);
                console.log("login Successfully!!!", response);
            }

            // Clear form fields and errors
            resetFrom();


        } catch (err) {
            console.error("Login Failed", err);
        }
    }
};
export default handleSubmit;