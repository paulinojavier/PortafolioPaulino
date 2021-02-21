const { sync } = require('../config/bd');
const Proyectos = require('../models/Proyectos');
const nodemailer = require('nodemailer');




exports.proyectosHome = async (req,res)=>{
     const proyectos = await Proyectos.findAll();

    res.render('home',{
        nombrePagina:'JP Portafolio',
        tagline:'Mis trabajos independientes que he realizado',
        proyectos
    });
}

exports.formularioProyectos =(req,res)=>{
    res.render('nuevoProyecto',{
        nombrePagina:'Nuevo Proyecto'
    })
}

exports.nuevoProyecto= async (req,res) =>{
    // validar que tengamos algo en ell imput
    const {nombre,categoria,url,imagen}= req.body;

    let errores =[];

    if(!nombre){
    errores.push({'texto':'Agregar un Nombre al proyecto'});
    }

    //si hay errores
    if(errores.length > 0){
        res.render('nuevoProyecto',{
            nombrePagina:'Nuevo Proyecto',
            errores
        })
    }else{
        //No hay errores
        //insertar en la db
       
        const proyecto= await Proyectos.create({nombre,categoria,url,imagen});
        res.redirect('/');
                 
    }
}

/* Ejemplo de descargar un archivo sin la opcion de desca del boton
exports.descargaCv=(req,res)=>{
const fileName = req.params.id
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })

}
*/


exports.correoContacto = async (req,res)=>{
  const {nombref,apellido,email,telefono,descripcion} = req.body;

  let errores =[];

    if(!nombref){
    errores.push({'texto':'Agregar los datos indicados'});
    }

    //si hay errores
    if(errores.length > 0){
        res.redirect('/',{
            nombrePagina:'Contacto',
            errores
        })
    }else{
        //No hay errores
        //insertar en la db
       
        contentHtml=`
               <h1>User information</h1>
               <ul>
                   <li>Nombre:${nombref}</li>
                   <li>Apellido:${apellido}</li>
                   <li>Correo: ${email}</li>
                   <li>Teléfono:${telefono}</li>
                   
               </ul>
               <p>${descripcion}</p>
               `;
      
               
   const transporter = nodemailer.createTransport({
       host:'smtp.gmail.com',
       port:25,
       secure:false,
       auth:{
         user:'paulinojavier83@gmail.com',
         pass:'haqbnddhvhnlaycz'
       },
       tls:{
         rejectUnauthorized:false
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
    }
  
}