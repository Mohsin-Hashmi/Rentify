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
    throw new Error("All fields are required")
  }
};
module.exports= validateCarsInfo;