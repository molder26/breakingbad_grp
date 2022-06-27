const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// Acá tenés que poner tu función. Recibimos por query (o no) el nombre de un character en especial
exports.getEpisodes = async (req, res) => {
	const { name } = req.query;

	if (name) {
		const { data } = await axios(`${URL}episodes`);
		
		const allEpisodes = data.filter((e) => e.title.toLowerCase().includes(name.toLowerCase()) || e.episode_id === parseInt(name));

		return res.status(200).send(allEpisodes);
	}

	const { data } = await axios(`${URL}episodes`);

	const allEpisodes = data.map((e) => {
		return {
			episode_id: e.episode_id,
			title: e.title,
			season: e.season,
			episode: e.episode,
			air_date: e.air_date,
			characters: e.characters,
			series: e.series
		};
	});

	return res.status(200).send(allEpisodes);
};