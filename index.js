const express = require('express');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const routes = require('./routes');
const  path = require('path');
const bodyParser = require('body-parser');

//extraer valores de variables.env
require('dotenv').config({path:'variables.env'});

//crear la conexion a la BD
const db = require('./config/bd');

//import model
require('./models/Proyectos');

db.sync()
    .then(()=>console.log('Conectado al Servidor'))
    .catch(error=>console.log(error));

//crear la app de express
const app = express();

// habilitar handlebars como vista 
app.engine('handlebars', 
    exphbs({
        handlebars: allowInsecurePrototypeAccess(handlebars),
        defaultLayout:'layout',
        
    })
);

app.set('view engine', 'handlebars');

// static files 
app.use(express.static(path.join(__dirname,'public')));

//habilitar bodyParser
app.use(bodyParser.urlencoded({extended:true}));

//rutas para el home
app.use('/',routes());

//Servidor y puerto 
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host,()=>{
    console.log( 'El servidor esta funcionando');
});