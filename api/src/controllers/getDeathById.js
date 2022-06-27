const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// Acá tenés que poner tu función. Recibimos por query (o no) el nombre de un character en especial
exports.getDeathById = async (req, res) => {
	let { name } = req.params;
	let names;
	names = name.split(' ');
	console.log(names)
	name = names.length > 2 ? names[0] : name.replaceAll(' ','+');
	
	const { data } = await axios(`${URL}death?name=${name}`);
	if (data.length) {
		const allDeaths = data.map((c) => {
			return {
				death_id: c.death_id,
				death: c.death,
				cause: c.cause,
				responsible: c.responsible,
				last_words: c.last_words,
				season: c.season,
				episode: c.episode,
				number_of_deaths: c.number_of_deaths
			};
		});

		return res.status(200).send(allDeaths[0]);
	}
	return res.status(404).json({ message: "No hay data" });
};