//Importa la aplicación Express desde app.js.
const app =require('./app');
//Puerto libre que usara el servidor
const port = 5500;
//Indica que puede manejar operaciones asíncronas
(async () =>{
    //Muestra un mensaje inicial antes de iniciar el servidor
    console.log('Sarting server...');
    app.listen(port, () => {
        //Muestra el puerto donde se ejecuta el servidor
        console.log(`Server is running on port ${port}`);

    });
})();
