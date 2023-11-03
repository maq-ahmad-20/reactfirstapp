import './chart.css'
import ChartBar from './chartbar';

const Chart = ({ dataPoints }) => {
    const valArr = dataPoints.map((datapoint) => {
        return datapoint.value;
    })
    const totalMax = Math.max(...valArr)

    return (
        <div className='chart'>
            {dataPoints.map(dataPoint => (<ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMax} label={dataPoint.label} />))}
        </div>
    )
}

export default Chart;