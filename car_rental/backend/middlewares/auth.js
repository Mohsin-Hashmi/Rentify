
const jwt= require('jsonwebtoken');
const User= require('../models/User');
const userAuth = async (req, res, next) => {
  try {
    // Read the token
    const cookies = req.cookies;
    const { token } = cookies;
    // validate the token
    if (!token) {
      return res.status(401).send("Please Login");
    }
    const decodedObj = await jwt.verify(token, process.env.JWT_SECRET);
    if (!decodedObj) {
      throw new Error("Invalid token");
    }
    const  {id}  = decodedObj;
    const user = await User.findById(id);
    if (!user) {
      throw new Error("User Not Found");
    }

    req.user = user;
    next(); /**it is used to move control to next request handler.*/
  } catch (err) {
    res.status(400).send("ERROR: " + err.message);
  }
};

module.exports= userAuth;

