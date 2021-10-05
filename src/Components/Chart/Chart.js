import React  from 'react';

import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  //code to set the maximum value to be the sum of all expenses over the whole year 
  // let [total,settotal]=useState(0);
  // for (const data of props.dataPoints){
  //     settotal(total+data.value)
  // }
//   const [yearamount,setyearamount]=useState(0);
//   let total=0;
// for (const data of props.dataPoints){
//       total+=data.value;
//    }
//    const myfunction=()=>{
//      setyearamount(total)}
// the bar will fill in a percentage of the total amount of the expenses all over the year   
let total=0;
  const dataPointValues = props.dataPoints.map(dataPoint => total+=dataPoint.value);

  //if i want to fill the bar as a percentage of the maximum expense between all months 
    // const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    // const maxexpense=Math.max(...dataPointValues)

  return (
    <div className='chart mt-4'>
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={total}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;