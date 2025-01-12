const express = require("express");
const contactUsRoute = express.Router();
const userAuth = require("../middlewares/auth");
const { validateUser } = require("../utils/validation");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
const ContactUs = require("../models/contactUs");

dotenv.config();
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
      user: loggedInUser._id,
    });
    await userMessage.save();
    /**Email Configuration */
    /**const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.PASSWORD_USER,
      },
    });
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender info
      to: "mnadeemhashmi2000@gmail.com", // Your official email address
      subject: "New Contact Us Message",
      html: `
        <h3>New Message from Contact Us Form</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };
    await transporter.sendMail(mailOptions);*/
    res.status(200).json({ message: "Message sended successfully" });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
module.exports = contactUsRoute;
