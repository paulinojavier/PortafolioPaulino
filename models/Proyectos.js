const Sequelize = require('sequelize');
const db = require('../config/bd');

/*const slug = require('slug');
const shotid = require('shortid');*/

const Proyectos = db.define('proyectos',{
    id: {
        type: Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
    nombre:Sequelize.STRING,
    categoria:Sequelize.STRING,
    imagen:Sequelize.STRING,
    url:Sequelize.STRING


});

module.exports = Proyectos;