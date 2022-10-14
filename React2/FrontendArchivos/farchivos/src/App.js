import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subir archivo pdf o jpg
        </a>
      
      </header>
      <form action='http://localhost:3001/archivos' method="POST" enctype="multipart/form-data">
        <input type="file" name="file"></input>
        <input type="submit" value="Subir"></input>
      </form>
    </div>
  );
}

export default App;
