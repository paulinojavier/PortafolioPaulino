const express = require('express');
const router = express.Router();

//importar express validator
const {body} = require('express-validator/check');



const proyectosControllers = require('../controllers/proyectosController');
//const email = require('../handlers/email');

module.exports = function (){
    //rutas para el home

    router.get('/',proyectosControllers.proyectosHome);
    router.get('/nuevo-proyecto',proyectosControllers.formularioProyectos);
    router.post('/nuevo-proyecto',
    body(['nombre','categoria']).not().isEmpty().trim().escape(),
    proyectosControllers.nuevoProyecto);

    // Ejemplo de descarga---- router.get('/dowload/:id',proyectosControllers.descargaCv);
    router.post('/send-email',proyectosControllers.correoContacto);//router.post('/send-email',email.correoContacto);

    
    return router;
}