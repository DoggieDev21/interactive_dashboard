import { Chart } from 'chart.js';
import { Line } from 'react-chartjs-2';

function Chart() {
    const [chartData, setChartData] = useState({});   
  
  
    // ... lógica para obtener los datos y actualizar chartData
  
    return (
      <div>
        <Line data={chartData} />
      </div>
    );
  }
  
  export default Chart;
