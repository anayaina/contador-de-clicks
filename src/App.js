import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png'
import Boton from './componentes/Boton';

function App() {

  const manejarClick = () => {
    console.log('Click');
  }
  const reiniciarcontador = () => {
    console.log('Reiniciar');
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
