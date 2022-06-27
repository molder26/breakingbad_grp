const { Router } = require("express");
const router = Router();

// Traemos la logica
const { getQuotes } = require("../controllers/getQuotes");
const { getCharacters } = require("../controllers/getCharacters");
const { getCharactersById } = require("../controllers/getCharactersById");
const { getEpisodeById } = require("../controllers/getEpisodeById");
const {getDeaths} = require('../controllers/getDeaths');
const { getDeathById } = require("../controllers/getDeathById");
const { getEpisodes } = require("../controllers/getEpisodes");


// Aqui crearemos nuestras rutas
router.get('/quote', getQuotes);
router.get('/characters', getCharacters);
router.get('/characters/:id', getCharactersById);

router.get("/episodes", getEpisodes);
router.get("/episodes/:id", getEpisodeById);

router.get('/deaths', getDeaths);
router.get('/deaths/:name', getDeathById);

module.exports = router;
