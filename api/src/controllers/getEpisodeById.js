const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// acá va tu función, vas a recibir por params el id.
exports.getEpisodeById = async (req, res) => {
    const { id } = req.params;

	const { data } = await axios(`${URL}episodes/${id}`);
	if (data.length) {
		const allEpisodes = data.map((c) => {
			return {
				episode_id: c.episode_id,
				title: c.title,
				season: c.season,
				episode: c.episode,
				air_date: c.air_date,
				characters: c.characters
			};
		});

		return res.status(200).send(allEpisodes);
	}
	return res.status(404).json({ message: "No hay data" });
};