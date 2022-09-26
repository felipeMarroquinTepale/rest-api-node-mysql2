const express = require('express')
const app= express();

//Settings
app.set('port',process.env.PORT || 3000);


//middlewares: funciones que se ejecutan cuando procesar algo
app.use(express.json())

//Routes
app.use(require('./routes/student'));

//starting server
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});