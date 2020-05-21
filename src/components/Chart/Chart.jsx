import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Line, Bar } from 'react-chartjs-2';

import styles from './Chart.module.css';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {

  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    }

    fetchAPI();
  }, []);

  const lineChart = (
    dailyData.length !== 0
      ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [{
              data: dailyData.map(({ confirmed }) => confirmed),
              label: 'Infectados',
              borderColor: '#3333ff',
              fill: true
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: 'Mortes',
              borderColor: 'red',
              backgroundColor: 'rgba(255, 0, 0, 0.5)',
              fill: true
            }],
          }}
        />) : null
  );

  const barChart = (
    confirmed
      ? (
        <Bar
          data={{
            labels: ['Infectados', 'Curados', 'Mortos'],
            datasets: [{
              label: 'Pessoas',
              backgroundColor: [
                'rgba(0, 255, 0, 0.5)',
                'rgba(0, 0, 255, 0.5)',
                'rgba(255, 0, 0, 0.5)',
              ],
              data: [confirmed.value, recovered.value, deaths.value],
            }]
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Cenário atual no(a) ${country}`}
          }}
        />
      ) : null
  );

  return (
    <div className={styles.container}>
      {country ? barChart : lineChart}
    </div>
  )
}

export default Chart;