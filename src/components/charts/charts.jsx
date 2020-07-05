import React, {useState, useEffect} from 'react';
import {dailyData} from '../../api';
import {Line, Bar} from 'react-chartjs-2';
import styles from './charts.module.css';

const Chart = ({data : {confirmed, deaths, recovered}, country}) =>{
    const [daily, setDaily] = useState([]);
    console.log(daily);

    useEffect(()=> {
        const fetchDaily = async () =>{
            setDaily(await dailyData());
        } 
        fetchDaily();
        // console.log(daily);

    }, [])

    const lineChart = (
        daily.length!==0 ? (<Line 
        data={{
            labels : daily.map(({date}) =>date),
            datasets : [{
                data:daily.map(({confirmed}) => confirmed),
                label:'Infected',
                borderColor:'#333fff',
                fill:true,

            }, {
                data:daily.map(({deaths}) => deaths),
                label:'Infected',
                borderColor:'rgba(255,0,0,0.5)',
                fill:true,

            }],
        }}
        />):null

    )
    const barChart = (
        confirmed ? (
            <Bar 
            data = {{
                labels : ['Infected', 'Recovered', 'Deaths'],
                datasets:[{
                    label:'People',
                    backgroundColor:[
                        'rgba(0,0,255,0.5)',
                        'rgba(0,255,0,0.5)',
                        'rgba(255,0,0,0.5)',

                    ],
                    data : [confirmed.value, recovered.value, deaths.value]

                }]

            }}
            options = {{
                legend : {display: false},
                title : {display : true, text : `Current state in ${country}`},
            }}
         />
        ):null

    )
    return(
        <div className={styles.continer}>
            {country ? barChart : lineChart}
        </div>
    )
}

export default Chart;
