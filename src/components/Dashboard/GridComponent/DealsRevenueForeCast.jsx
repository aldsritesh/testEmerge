import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";

export default function DealsRevenueForecast({ breakpoint, size, index }) {
  const [isSmall, setIsSmall] = useState((breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'xs') && size == 3);
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

  const state = {
    series: [30],
    options: {
      chart: {
        type: "radialBar",
      },
      stroke: {
        lineCap: "round",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            margin: 15,
            size: "60%",
          },
          dataLabels: {
            value: {
              color: "#111",
              fontSize: "20px",
              show: true,
              fontWeight: "bold",
            },
            total: {
              show: true,
              label: "Febuary Goals",
              color: "#A6A4A6",
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return "$300,000";
              },
            },
          },
        },
      },
    },
  };

  return (
    <div style={{height: "auto", width: '100%'}}>
    <div className="bg-white p-4 rounded-md shadow w-full h-auto relative" style={{ width: '100%'}}>

        <div className="flex justify-between">
            <span className="font-semibold">Deal Revenue Forecast</span>
            <div className="flex items-center text-xs font-semibold text-[#FF7145] mr-5">
            <button >View More</button>
            <span><FiChevronRight/></span>
            </div>
        </div>

<div className="flex gap-5 mt-5 ">
        <div className=" flex flex-col items-center  ">
            <div className="text-base text-black font-medium">
              Company Goals
            </div>
            <div className=" w-44">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="radialBar"
                height={250}
              />
            </div>
        </div>

        <div className="w-full ">
            <div className="text-base text-black font-medium mb-3">Team Goals</div>
            <div className="mt-5 ">
            <div className="space-y-1  mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-sm text-black">Marketing</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$29,000/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-2/12"></div>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-sm text-black">Sales</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$120,060/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-8/12"></div>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-sm text-black">Digital Marketing</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$139,100/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-10/12"></div>
              </div>
            </div>
            </div>
        </div>

</div>

 { !(save || previewing) && <div className="absolute right-2 top-3">
            <span className="text-black cursor-pointer flex items-center  " onClick={() => setShowMenu(!showMenu)}>
                <div className="font-semibold text-[#FF7145]"><BsThreeDotsVertical className="scale-75"/>    </div>   
            </span>
            <ul className={`absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap ${ showMenu ? '' : 'hidden' }`} >
                <li onClick={_handleDuplicate}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                    Duplicate Widget
                    </a>
                </li>
                <li onClick={_handleDelete}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                    Delete Widget</a>
                </li>
            </ul>
        </div>  } 
    </div>
    </div>
  );
}









 {/* <div className="flex flex-wrap gap-2">
          <div className="">
            <p className="text-base text-black font-semibold mb-4">
              Company Goals
            </p>

            <div>
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="radialBar"
                height={250}
              />
            </div>
          </div>
        </div>
        <div
          className="grid grid-flow-row gap-3"
          style={isSmall ? { width: "100%" } : {}}
        >
          <p
            className={`text-base text-black font-semibold ${
              isSmall ? "" : "mb-4"
            }`}
          >
            Team Goals
          </p>
          <div>
            <div className="space-y-1 mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-base text-black">Marketing</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$29,000/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-2/12"></div>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-base text-black">Sales</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$120,060/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-8/12"></div>
              </div>
            </div>
            <div className="space-y-1 mb-5">
              <div
                className={`${isSmall ? "" : "flex"} ${
                  isSmall ? "items-left" : "items-center"
                } justify-between gap-2`}
              >
                <p className="text-base text-black">Digital Marketing</p>
                <p className="text-sm font-semibold text-[#A6A4A6]">
                  <span className="text-black font-bold">$139,100/</span>{" "}
                  $150,000
                </p>
              </div>
              <div className="w-full h-2 bg-black/10 rounded-full">
                <div className="bg-[#ff7043] h-2 rounded-full w-10/12"></div>
              </div>
            </div>
          </div>
        </div> */}
