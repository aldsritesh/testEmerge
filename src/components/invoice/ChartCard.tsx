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
        <p className=" text-xl font-bold mb-2">{name}</p>
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
