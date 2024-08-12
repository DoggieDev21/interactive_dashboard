import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

function Chart() {
  const [chartData, setChartData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lógica para obtener datos y actualizar chartData
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <Line data={chartData.length > 0 ? chartData : {}} />
      )}
    </div>
  );
}

export default Chart;
