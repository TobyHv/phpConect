//Importa el módulo Express que es un framework para manejar servidores HTTP en Node.js.
const express = require('express');
//Crea una instancia de la aplicación Express, que se usará para definir rutas y manejar solicitudes.
const app = express();
//Middleware que permite a Express interpretar JSON en las solicitudes entrantes. Esto es útil para manejar datos en formato JSON en peticiones POST, PUT, PATCH.
app.use(express.json());

//Define una ruta HTTP tipo GET en la raíz ('/').
//Cuando se hace una solicitud GET a '/', el servidor responde con el texto "Hola mundo".
app.get('/', (reg, res) => {
    res.send('Hola mundo');
});

//Exporta la instancia de app para que pueda ser utilizada en otros archivos
module.exports = app;
