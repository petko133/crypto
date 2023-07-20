import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CryptoState } from '../../../context';
import axios from 'axios';
import { HistoricalChart } from '../../config/api';
import {chartDays} from '../../../components/config/chart'
import { Button } from 'react-bootstrap';
import classes from './CoinChart.module.css'
import ChartJS from 'chart.js/auto';

import { CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale,PointElement);


const CoinChart = ({ coin }) => {
  const [historicalData, setHistoricalData] = useState();
  const [days, setDays] = useState(1);
  const [flag, setFlag] = useState(false);

  const { currency } = CryptoState();

  const fetchHistocalData = async () => {
    const { data } = await axios.get(
      HistoricalChart(coin.id, days, currency.toLowerCase())
    );
    setFlag(true);
    setHistoricalData(data.prices);
  };

  useEffect(() => {
    fetchHistocalData();
  }, [days]);

  // console.log(coin);
  // console.log(historicalData);

  return (
		<>
			{!historicalData | flag===false ? (<h1>Loading</h1>) : (
				<>
					<Line
              data={{
                labels: historicalData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicalData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
						<div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <Button className={classes.btn}
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setFlag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </Button>
              ))}
            </div>
				</>
			)}
		</>
  );
};

export default CoinChart;
