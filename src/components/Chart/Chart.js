import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api/index';
import { Line, Bar } from 'react-chartjs-2';
import './Chart.css';

function Chart(props) {
    const { data, data: { confirmed, recovered, deaths }, country } = props;
    const [dailyData, setDailyData] = useState([]);
    useEffect(() => {
        const fetchDailyDataAPI = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchDailyDataAPI();
    }, []);
    const lineChart = (
        dailyData?.length ?
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [
                        {
                            data: dailyData.map(({ confirmed }) => confirmed),
                            label: 'Infected',
                            borderColor: '#3333ff',
                            fill: true
                        },
                        {
                            data: dailyData.map(({ deaths }) => deaths),
                            label: 'Deaths',
                            borderColor: 'red',
                            backgroundColor: 'rgba(255, 0, 0, 0.5)',
                            fill: true
                        }
                    ]
                }}
            /> : null
    );
    const barchart = (
        data.confirmed ?
            <Bar
                data={{
                    labels: ['Infected', 'Recovered', 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 255, 0.5)'
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current state in a ${country}` }
                }}
            /> : null
    );
    return (
        <div className="chart-conatiner">
            {country ? barchart : lineChart}
        </div>
    );
}

export default Chart;