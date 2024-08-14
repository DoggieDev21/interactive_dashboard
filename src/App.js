import './App.css';
import LinesChart from './Componentes/LinesChart';
import BarsChart from './Componentes/BarsChart';
import PiesChart from './Componentes/PiesChart';
import Header from './Componentes/Header/Header';

function App() {
  return (
    <div className='App'> 
      <div>
        <Header/>
      </div>
      <div className='graficos'>
        <div className='charts'>
          <h2>Tendencias a lo largo del tiempo</h2>
          <LinesChart/>
        </div>
        <div className='charts'>
          <h2>Rendimiento de campañas</h2>
          <BarsChart/>
        </div>
        <div className='charts'>
          <h2>Distribuciones demográficas</h2>
          <div style={{width:"100%", height:"100%", padding:"10px 0"}}>
            <PiesChart />                       
          </div>
        </div>
        <div className='charts'>
          <h2>Gasto publicitario VS conversiones</h2>
          <LinesChart/>
        </div>
      </div>
    </div>
  );
}

export default App;
