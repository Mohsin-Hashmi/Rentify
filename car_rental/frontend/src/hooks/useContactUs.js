 
 import { ContactUsAPI } from "../services/ContactUsAPI";
 /**API call function */
  const handleSubmit = async (e, formData, resetForm) => {
    e.preventDefault();
    try {
      const {firstName, lastName, email, phoneNumber, message} = formData;
      const response = await ContactUsAPI(firstName, lastName, email, phoneNumber, message)
      if (response?.token) {
        localStorage.setItem("token", response.token);
        console.log("Message send Successfully!!!", response);
      }
      resetForm();  
    } catch (err) {
      console.error(err);
    }
  };
  export default handleSubmit;