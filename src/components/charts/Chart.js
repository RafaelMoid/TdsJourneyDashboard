import "./style.css";
import {XYPlot, LineSeries, XAxis, YAxis, VerticalGridLines, HorizontalGridLines} from 'react-vis';

const Chart = () => {
   
    //Aqui embaixo provavelmente teremos o gráfico
    const data = [
        {x:0, y:8},
        {x:1, y:5},
        {x:2, y:4},
        {x:3, y:9},
        {x:4, y:1},
        {x:5, y:7},
        {x:6, y:6},
        {x:7, y:2},
        {x:8, y:0},
    ];    
   
    return (
        <div style={{marginTop:'15px'}}>
            <XYPlot height={300} width={300}>
            <VerticalGridLines />
            <HorizontalGridLines /> 
            <XAxis />
            <YAxis /> 
            <LineSeries data={data} color="blue" /> 
            <LineSeries data={data} color="purple" /> 
            <LineSeries data={data} color="pink" /> 
            </XYPlot>
        </div>
    )
}

export default Chart;