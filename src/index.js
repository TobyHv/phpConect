const app =require('./app');
const port = 5500;

(async () =>{
    console.log('Sarting server...');
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);

    });
})();