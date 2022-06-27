const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// función básica para obtener un random, pueden usar el endpoint "quote/random"

exports.getQuotes = async (req, res) => {
    let {name} = req.query;
    if (name){
        name = name.replaceAll(" ", "+");
        const { data } = await axios(`${URL}quote/random?author=${name}`);
        return res.status(200).send(data);
    }
    
    const { data } = await axios(`${URL}quote/random`);
    return res.status(200).send(data);

};