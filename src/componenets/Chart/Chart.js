
import React from "react";

import './Chart.css'
import Chartbar from "./ChartBar";


const Chart = props => {
    const valuearray= props.dataPoints.map(datapoint => datapoint.value)
    const totalmaximum=Math.max(...valuearray);


    return(
        <div className="chart"> 
        {props.dataPoints.map((dataPoints) => ( 
        <Chartbar 
        key={dataPoints.label}
        value={dataPoints.value}
        maxvalue={null}
        label={dataPoints.label}
        />
        ))}
        </div>
    )
}

export default Chart ;