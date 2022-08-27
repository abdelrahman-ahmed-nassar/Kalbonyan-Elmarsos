const sgMail = require("@sendgrid/mail");
const e = require("express");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abdelrhman.ahmed.nassar@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCloseEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "abdelrhman.ahmed.nassar@gmail.com",
    subject: "Sorry to see you go!",
    text: `Goodbye, ${name}. I hope to see you soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCloseEmail,
};
