const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// Acá tenés que poner tu función. Recibimos por query (o no) el nombre de un character en especial
exports.getDeaths = async (req, res) => {

	
	const { data } = await axios(`${URL}deaths`);

	const allDeaths = data.map((c) => {
		return {
			death_id: c.death_id,
			death: c.death
		};
	});

	return res.status(200).send(allDeaths);
};