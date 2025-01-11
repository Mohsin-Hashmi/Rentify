const validateCarsInfo = (req) => {
  const {
    carName,
    carImage,
    pricePerDay,
    carLocation,
    description,
    availabilityFrom,
    availabilityTo,
    contactNumber,
  } = req.body;

  if (
    !carName ||
    !carImage ||
    !pricePerDay ||
    !carLocation ||
    !description ||
    !availabilityFrom ||
    !availabilityTo ||
    !contactNumber
  ) {
    throw new Error("All fields are required");
  }
};

const validateUser = (req) => {
  const { email, firstName, lastName, phoneNumber, message } = req.body;

  if (!email || !firstName || !lastName || !phoneNumber || !message) {
    throw new Error("All fields are required");
  }
};

module.exports = {validateCarsInfo, validateUser};
