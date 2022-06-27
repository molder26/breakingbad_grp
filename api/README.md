# Repaso M3

Para este homework vamos a utilizar una REST API de prueba para practicar los principales metodos de Express. La URL sobre la que vamos a estar trabajando es la siguiente:

`https://www.breakingbadapi.com/documentation`

Antes que nada deberemos hacer un `npm i` para bajar todas las dependencias necesarias.
Y deberiamos tener instalado `Postman` o `Insomnia` en el cual utilizaremos para simular pedidos a nuestro servidor.

Trabajaremos en la carpeta /src. En ella tenemos dos carpetas: routes y controllers donde pondremos nuestras rutas y su logica, respectivamente. Deberiamos seguir el siguiente flujo recomendado:

# /routes/index.js

Dentro de la carpeta routes encontraremos un index, aqui definiremos nuestras rutas pero la logica la pondremos en los controllers, porque?

<p align="center">
  <img src="./img/porque.jpg" alt="Img" />
</p>

Lo hacemos de esta manera para "modularizar" y que quede mas bonito pero, ademas, para acostumbrarnos a hacerlo de un modo eficiente y correcto.
La definicion de la ruta tiene la siguiente estructura:

`router.METHOD(PATH, HANDLER)`

- router es el router de express.
- METHOD es un método de solicitud HTTP.
- PATH es una vía de acceso en el servidor.
- HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

```
Que es express.Router???

Una instancia Router es un sistema de middleware y direccionamiento completo; por este motivo, a menudo se conoce como una “miniaplicación”.

```

# /controllers

Aqui crearemos un archivo para cada logica de nuestras rutas. Encontraras un ejemplo de como deberias modularizarlo pero no como hacer un llamado a la API.
Para ello podemos usar el metodo que ya nos provee JS que es Fetch o podemos usar alguna libreria externa, como axios.

Entonces... Como hago un llamado a una API?

```
Fetch es una API para Javascript con la cuál podemos realizar peticiones HTTP asíncronas utilizando promesas y de forma que el código sea un poco más sencillo y menos verbose.
```

# INSTRUCCIONES

Necesitaremos crear las siguientes rutas:

- **"/quote"** Aqui haremos un GET
- **"/characters"** Aqui haremos un GET
- **"/characters/:id"** Aqui haremos un GET
- **"/episodes** Aqui haremos un GET

La idea general es:

- Obtener todos los characters, qoutes y episodes.
- Ver un character específico y sus propiedades.
