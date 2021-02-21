/*

const nodemailer = require('nodemailer');
//const handlebars = require('handlebars');
//const juice = require ('juice');
//const htmlToText= require('html-to-text');
//const util = require('util');
const emailConfig = require('../config/email');



exports.correoContacto = async (req,res)=>{
  const {nombref, apellido, email, telefono, descripcion} = req.body;
  
  contentHtml=`
               <h1>User information</h1>
               <ul>
                   <li>Nombre:${nombref}</li>
                   <li>Apellido:${apellido}</li>
                   <li>Correo: ${email}</li>
                   <li>Teléfono:${telefono}</li>
               </ul>
               
               <p>${descripcion}</p>
               `
               ;
      
               
   const transporter = nodemailer.createTransport({
       host:emailConfig.host,
       port:emailConfig.port,
       secure:false,
       auth:{
         user:emailConfig.user,
         pass:emailConfig.pass
       },
       tls:{
        rejectUnauthorized: false
       }
       
     });

     const info = await transporter.sendMail({
      from:'"Portafolio de Javier"<paulinojavier83@gmail.com>',
      to:'paulinojavier83@gmail.com',
      subject:'Formulario de mi Portafolio :)',
      html: contentHtml
      
    });
    
    console.log('message send', info.messageId);
     
    res.redirect('/');


  
}*/