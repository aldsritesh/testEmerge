import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    type: "area",
    height: 350,
    zoom: {
      enabled: false,
    },
  },
  xaxis: {
    categories: ["Lead", "Proposal", "Negotiation"],
  },
};
const series = [
  {
    name: "series-1",
    data: [42, 36, 24],
    color: "#1258fc",
  },
  // {
  //   name: "series-2",
  //   data: [10, 20, 55, 20, 63, 38, 70, 11],
  // },
];

export default function PipelineSalesChart({ index }) {
  const { components, save, previewing } = useSelector(
    (state) => state.WidthObj
  );
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const _handleDelete = () => {
    setShowMenu(false);
    const tempComps = JSON.parse(JSON.stringify(components));
    tempComps.splice(index, 1);
    dispatch({ type: "COMPONENT_CHANGED", payload: [] });
    setTimeout(() => {
      dispatch({ type: "COMPONENT_CHANGED", payload: tempComps });
      dispatch({ type: "CURRENT_SELECTED_INDEX", payload: -1 });
    }, 0);
  };
  const _handleDuplicate = () => {
    setShowMenu(false);
  };
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div
        className="bg-white p-4 rounded-md shadow w-full relative"
        style={{ height: "100%", width: "100%" }}
      >
        <div className="flex justify-between">
          <div className="flex  gap-4 mb-4 mr-4">
            <p className="text-md text-black font-semibold flex items-center h-7">
              Sales Pipeline
            </p>
            <div className="relative">
              <select
                name="country"
                autoComplete="country-name"
                className="block w-32 rounded-md border py-1.5 pl-6 text-sm text-gray-900 border-grey/50 focus:ring-0"
              >
                <option>This Month</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-2.5 left-1 w-4 h-4"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path>
              </svg>
            </div>
          </div>

          <div className="flex flex-col justify-end   mb-4">
            <div className="border-b-2 border-gray-300 pb-3">
              <p className="text-2xl text-black font-semibold mb-2">
                $1,195,500
              </p>
              <h4 className="text-xs text-[#9F9E9F]  font-medium text-end">
                Total Amount
              </h4>
            </div>

            <div>
              <p className="text-2xl text-black font-semibold my-2 text-end">
                89
              </p>
              <h4 className="text-xs text-[#9F9E9F]  font-medium text-end">
                Total Deals
              </h4>
            </div>
          </div>
        </div>

        <div>
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={320}
           
          />
        </div>
      </div>
      {/* {!(save || previewing) && <div className="absolute right-2 top-4">
              <span className="text-black cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
              </span>
              <ul className={`absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap ${showMenu ? '' : 'hidden'}`}>
                  <li onClick={_handleDuplicate}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                    Duplicate Widget
                    </a></li>
                  <li onClick={_handleDelete}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                    Delete Widget</a>
                    </li>
              </ul>
          </div>} */}
    </div>
  );
}
