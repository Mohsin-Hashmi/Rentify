const validateForm = ( fromData, setEmailError, setPasswordError) => {
    let isValid = true;
    const { email, password } = fromData;
  
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid Email");
      isValid = false;
    }
  
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }
  
    return isValid;
  };
  
  export default validateForm;
  