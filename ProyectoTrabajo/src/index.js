const express=require('express');//Definimos las dependencias que llamamos
const app= express();
const cors = require('cors');


app.set('port',process.env.PORT||3001); //Definimos la ruta general para todas las API
app.set('json spaces', 2)

app.use(express.json())
app.use(cors())


app.use('/archivos',require('./routes/ApiArchivos')) //Aqui pondremos las rutas de las API
app.use('/login',require('./routes/ApiAutentificar'))

app.listen(app.get('port'),()=>{  //hacemos el llamado general
    console.log(`Server en puerto ${app.get('port')}`)
})