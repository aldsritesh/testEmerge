import dynamic from "next/dynamic";
import { Props } from "react-apexcharts";

const Chart = dynamic(import("react-apexcharts"), { ssr: false });

interface IChartCard {
  data: Props;
  name: string;
}

export default function ChartCard({ data, name }: IChartCard) {
  return (
    <div className="w-full p-4 mixed-chart">
      <div>
        <p className="text-xl font-semibold mb-2">{name}</p>
      </div>
      <Chart
        options={data.options}
        series={data.series}
        type={data.type}
        width={data.width}
        height={data.height}
      />
    </div>
  );
}

// import React from 'react';
// import Chart from 'react-apexcharts';

// const LineChart = () => {
//   const options = {
//     chart: {
//       id: 'line-chart',
//       background: '#f8f8f8', // Set the background color of the chart
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     },
//   };

//   const series = [
//     {
//       name: 'Red Line',
//       data: [30, 40, 25, 50, 49, 60],
//       color: '#ff0000', // Set the color of the red line
//       backgroundColor: '#ffcccc', // Set the background color of the red line
//     },
//     {
//       name: 'Green Line',
//       data: [45, 35, 50, 30, 60, 42],
//       color: '#00ff00', // Set the color of the green line
//       backgroundColor: '#ccffcc', // Set the background color of the green line
//     },
//   ];

//   return (
//     <Chart options={options} series={series} type="line" width="500" />
//   );
// };

// export default LineChart;
