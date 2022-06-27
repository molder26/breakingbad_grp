const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// acá va tu función, vas a recibir por params el id.
exports.getCharactersById = async (req, res) => {
    const { id } = req.params;

	const { data } = await axios(`${URL}characters/${id}`);
	if (data.length) {
		const allCharacters = data.map((c) => {
			return {
				char_id: c.char_id,
				name: c.name,
				birthday: c.birthday,
				img: c.img,
				status: c.status,
				nickname: c.nickname,
			};
		});

		return res.status(200).send(allCharacters);
	}
	return res.status(404).json({ message: "No hay data" });
};