import React from 'react';
import { Pie } from 'react-chartjs-2';
import { randomColor } from '../../util/functions';

const PieChart = (props) => {
  console.log(props.label, props.value)
  const data = {
    labels: props.label,
    datasets: [
      {
        data: props.value,
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          `rgba(255, 99, 132, 0.2)`,
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          `rgba(255, 99, 132, 1)`,
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom'
      },
      title: {
        display: true,
        text: 'Sports Intrest Chart',
      },
    },
  };
  return (
    <>
      <Pie data={data} options={options} />
    </>
  )
};

export default PieChart;