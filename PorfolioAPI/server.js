const express = require('express'); // importing Express, a web framework for Node.js to build APIs

const nodemailer =  require('nodemailer') // importing nodemailer, another helper that lets us send emails from our server

const bodyParser = require('body-parser') // importing body-parser, this helper makes it easy to read data sent to server

const cors = require('cors'); // This helper allows our server to accept requests from other domains

require('dotenv').config(); // importing the dotenv helper to read the environment variables

const app = express(); // creating an instance of Express 

// setting the port 
const port = 3000;

// using cors middlweware

app.use(cors( {origin: 'http://localhost:5173'})); // commands the server to use cors helper to accept requests from other domains
app.use(bodyParser.json()); // commands the server to read data sent from the server in JSON format 

  
const transporter = nodemailer.createTransport({ 
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
    }
   });


// create a POST endpoint 
/**
 * The idea here is to create a special door (endpoint) call /contact where people can 
 * send data to our server. 
 * 
 * @route POST /connect
 */
app.post('/contact', async (req, res) => {
   const { name, email, employment, message } = req.body; // takes the parameters from the data sent to our server

   const mailOptions = { 
    from: process.env.GMAIL_USER, // email address 
    to: 'trungly123@gmail.com',
    subject: `Portfolio Contact Form: ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nEmployment: ${employment}\nMessage: ${message}`,
   };


   try{
    let info = await transporter.sendMail(mailOptions); // send the email
    console.log(`Message sent: ${info.messageId}`);
    res.status(200).send('Message sent');
   } catch (error) {
    console.error(`Error: ${error.message}`);
    res.status(500).send('Error sending message');
   }      
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });