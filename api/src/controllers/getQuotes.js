const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// función básica para obtener un random, pueden usar el endpoint "quote/random"

exports.getQuotes = async (req, res) => {
    const { data } = await axios(`${URL}quote/random`);

	res.status(200).send(data);
};