const URL = "https://www.breakingbadapi.com/api/";
const axios = require("axios"); // pueden usar axios o fetch

// Acá tenés que poner tu función. Recibimos por query (o no) el nombre de un character en especial
exports.getCharacters = async (req, res) => {
	const { name, pagina } = req.query;

	if (name) {
		const { data } = await axios(`${URL}characters?name=${name}`);

		const allCharacters = data.map((c) => {
			return {
				char_id: c.char_id,
				name: c.name,
				cumple: c.birthday,
				img: c.img,
				estado: c.status,
				apodo: c.nickname,
			};
		});

		return res.status(200).send(allCharacters);
	}

	if (pagina) {
		const value = pagina * 10;

		const { data } = await axios(`${URL}characters?limit=10&offset=${value}`);   //pagina 1 = offset 0 // pagina 2 = offset 10

		const allCharacters = data.map((c) => {
			return {
				char_id: c.char_id,
				name: c.name,
				cumple: c.birthday,
				img: c.img,
				estado: c.status,
				apodo: c.nickname,
			};
		});

		return res.status(200).send(allCharacters);
	}

	const { data } = await axios(`${URL}characters`);   //pagina 1 = offset 0 // pagina 2 = offset 10

	const allCharacters = data.map((c) => {
		return {
			char_id: c.char_id,
			name: c.name,
			cumple: c.birthday,
			img: c.img,
			estado: c.status,
			apodo: c.nickname,
		};
	});

	return res.status(200).send(allCharacters);
};