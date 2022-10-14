const express = require('express')
      bodyParser = require('body-parser'),
      jwt = require('jsonwebtoken'),
      app = express();
      config=require('./config/config');
      const{Router}=require('express')
      const cors = require('cors');
const router=Router()
app.use(cors({origin:'*',credentials:true,optionsSuccessStatus:200}))	

app.set('llave', config.llave); //indicamos la configuracion de la llave
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); //seteamos para que la informacion del usuario se convierta en un json
app.get('/', function(req, res) {
    res.json({ message: 'recurso de entrada' }); //arrancamos el servidor y creamos un punto de inicio
});
router.post('/autenticar', (req, res) => {
    if(req.body.usuario === "asfo" && req.body.contrasena === "holamundo") {
		const payload = {
			check:  true  //aqui generamos el archivo de autenticacion, donde solo podra generar el token el unico usuario que tenemos
		};
		const token = jwt.sign(payload, app.get('llave'), {
			expiresIn: "99999m" //asignamos el tiempo de expiracion del
		});
		res.json({
			mensaje: 'Autenticación correcta',
			token: token
		});
    } //si el usuario y contraseña coinciden entonces nos retornara el token
})

// 6
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['access-token'];
    if (token) {
      jwt.verify(token, app.get('llave'), (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.'  //aqui definimos que si el token expiro o cambio el antiguo ya no sera valido
      });
    }
 });

router.get('/datos', rutasProtegidas, (req, res) => { //estos son los datos de valor get que nos retornara si al ejecutar el post el resultado es exitoso
	const datos = [
		{ id: 1, nombre: "Asfo" },
		{ id: 2, nombre: "Denisse" },
		{ id: 3, nombre: "Carlos" },
    { id: 5, nombre: "pepe"}
	];
	
	res.json(datos);
});
module.exports=router