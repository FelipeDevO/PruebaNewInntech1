import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const[usuario,setUsuario]=useState("")
  const[contrasena,setContrasena]=useState("") //definimos las variables para el login
  const magia= (e) =>{
    e.preventDefault(); //es lo que nos permite copiar
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "usuario": usuario,  //de aqui recibimos las variables del backend y las comparamos con las del frontend
  "contrasena": contrasena 
});

var requestOptions = {
  method: 'POST',  //ponemos el metodo que nos haya devuelto el postman
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:3001/login/autenticar", requestOptions) //hacemos el llamado al backend
  .then(response => response.text())
  .then(result => console.log(result)) //podemos elegir lo que queramos que aparezca cuando el usuario coincida
  .catch(error => console.log('error', error));
  }
  return (// Aqui haremos el front, donde usamos react, definimos los espacios de formulario y los seteamos con lo valores consecuentes
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Iniciar Sesion
        </a>
      
      <form onSubmit={magia}> 
        <input className='' type="text" placeholder='Usuario' value={usuario} onChange={(e)=>setUsuario(e.target.value)}></input>
        <input type="text" placeholder='Contraseña' value={contrasena} onChange={(e)=>setContrasena(e.target.value)}></input>
        <button type='submit' > login </button> 
      </form> 
      </header>

    </div>
  );
}

export default App;
