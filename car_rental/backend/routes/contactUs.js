const express = require("express");
const contactUsRoute = express.Router();
const userAuth = require("../middlewares/auth");
const {validateUser} = require("../utils/validation");
const ContactUs = require("../models/contactUs");

contactUsRoute.post("/contact-us", userAuth, async (req, res) => {
  try {
    const loggedInUser = req.user;
    if (!loggedInUser) {
      return res.status(400).json({
        message: "You must have logged in to contact us",
      });
    }
    const { email, firstName, lastName, phoneNumber, message } = req.body;

    if (validateUser(req)) {
      throw new Error("Invalid user data");
    }

    const userMessage = await new ContactUs({
      email,
      firstName,
      lastName,
      phoneNumber,
      message,
      user:loggedInUser._id
    });
    await userMessage.save();
    res.status(200).json({ message: "Message sended successfully" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
module.exports = contactUsRoute;
