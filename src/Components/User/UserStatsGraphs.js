import React, {useState, useEffect} from 'react';
import styles from './UserStatsGraphs.module.css';
import { VictoryPie, VictoryBar, VictoryChart } from 'victory';

const UserStatsGraphs = ({data}) => {
    const [graph, setGraph] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const graphData = data.map(item => {
            return {
                x: item.title,
                y: Number(item.acessos)
            }
        })
  
        data.length > 0 && setTotal(data.map(({acessos}) => Number(acessos)).reduce((before, after) => before + after))
        
        setGraph(graphData)
        console.log(data)
    }, [data])
    if (data.length > 0)
    return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Total de acessos: {total}</p>
            </div>
            <div className={`${styles.graphItem}`}>
                <VictoryPie 
                    data={graph}
                    innerRadius={50}
                    padding={{top: 20, bottom: 20, left: 80, right: 80}}
                    style={{
                        data: {
                            fillOpacity: 0.9,
                            stroke: '#fff',
                            strokeWidth: 2,
                        },
                        labels: {
                            fontSize: 14,
                            fill: '#333',
                        }
                    }}
                />
            </div>
            <div className={`${styles.graphItem}`}>
                <VictoryChart>
                    <VictoryBar alignment="start" data={graph}/>
                </VictoryChart>
            </div>
        </section>
    )
    else return (
        <section className={`${styles.graph} animeLeft`}>
            <div className={`${styles.total} ${styles.graphItem}`}>
                <p>Total de acessos: {total}</p>
            </div>
            <div>
                Nada por aqui
            </div>
        </section>
    );
}

export default UserStatsGraphs;