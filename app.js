const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require('dotenv').config();
const express = require("express");
const HelloWorldRoutes = require('./Route/HelloWorldRoutes');

let port = process.env.PORT;

const app = express();

// enable cross origin requests
app.use(cors());

// using bodyParser to parse the request bodies for application 
app.use(bodyParser.urlencoded({ extended: true }));


// Add the electricity tariff routes to application
app.use(HelloWorldRoutes);

app.listen(port, () => {
	console.log("Express Application is Started at port " + port);
});


module.exports = app;