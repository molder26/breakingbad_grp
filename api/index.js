const express = require("express");

const cors = require("cors");
const morgan = require("morgan");

const routes = require("./src/routes");

const app = express();

//==========================================//
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/", routes);

//==========================================//

app.listen(3001, () =>
	console.log("¡Aplicación de ejemplo escuchando en el puerto 3001!")
);
