import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador'
import {useState} from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarcontador = () => {
    setNumClicks(0);
  }

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
        className = 'freecodecampo-logo'
        src = {freecodecamplogo}
        alt = 'Logo de freecodecamp'/>
      </div>
      <div className = 'contenedor-principal'>
        <Contador numClicks={numClicks} />
        <Boton
          texto = 'Click'
          esBotondeClick= {true}
          manejarClick= {manejarClick}/>
        <Boton
          texto= 'Reiniciar'
          esBotondeClick= {false}
          manejarClick= {reiniciarcontador}/>
      </div>
    </div>
  );
}

export default App;
