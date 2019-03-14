/**
 * @description calculate and compose the Tariff Response Object
 *
 * @param tariffType productA | productB
 * @param usage usage that is request by user
 */
const hello = (req, res, next) => {

	res.status(200);
	res.send({ "message": "Hello World!" });
	res.end();
};


const validateRequest = (req, res, next) => {
	console.log("MiddleWare Called!");
	next();
};

module.exports = { hello, validateRequest }