const{Router}=require("express");
const router= Router();
const fileUpload = require('express-fileupload') //hacemos llamado a una dependencia para subir archivos

router.use(fileUpload()) //la definimos en un route para que coincida con nuestras rutas

router.post('/',(req,res) => {
    let EDFile = req.files.file
    EDFile.mv(`./archivos/${EDFile.name}`,err => { //lee el nombre del archivo y lo guarda en la carpeta marcada
        if(err) return res.status(500).send({ message : err })

        return res.status(200).send({ message : 'Archivo Subido' }) //sube el archivo y nos devuelve esa respuesta
    })
})
module.exports=router