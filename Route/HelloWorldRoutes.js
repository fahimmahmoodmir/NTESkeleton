const express = require("express");
const HelloWorldController = require('../Controller/HelloWorldController');


const HelloWorldRoutes = express.Router();

// Route Definitions for HelloWorldController
HelloWorldRoutes.get("/hello", HelloWorldController.validateRequest, HelloWorldController.hello);

// all other routes that are accessed on this server should be blocked with proper response
HelloWorldRoutes.all(/.*/, (req, res) => {
	res.status(405);
	res.send({ "status": "error", "message": "Method Not Allowed" });
	res.end();
});

module.exports = HelloWorldRoutes;