import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,

    },
  },
};

const labels = ['Dec 15', 'Dec 16', 'Dec 17', 'Dec 18'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [10,75,52,100,5,65,20],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [6,45,13,68,43,90,25],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 'Dataset 3',
      data: [6,35,18,48,63,80,55],
      borderColor: '#FEB019',
      backgroundColor: '#FEB001',
    },
  ],
};


export default function Emailreport({ index }) {
  const { components, save, previewing } = useSelector(state => state.WidthObj);
  const dispatch = useDispatch();


const [showMenu, setShowMenu] = useState(false);
const _handleDelete = () => {
  setShowMenu(false);
  const tempComps = JSON.parse(JSON.stringify(components));
  tempComps.splice(index, 1);
  dispatch({type: 'COMPONENT_CHANGED', payload: []});
  setTimeout(() => {
    dispatch({type: 'COMPONENT_CHANGED', payload: tempComps});
    dispatch({type: 'CURRENT_SELECTED_INDEX', payload: -1});
  }, 0);
}
const _handleDuplicate = () => {
  setShowMenu(false);
}
  return (
    <div style={{width: '100%', height: '100%'}}>
        <div style={{width: '100%', height: '100%'}} className="bg-white rounded-md shadow w-full relative p-4">
            <div className='flex items-center justify-between gap-2 mb-4'>
                <h2 className='text-lg font-semibold text-black'>Email Peformance Report</h2>
            </div>
            <div>
              <Line options={options} data={data} />
            </div>
              
        </div>
        { !(save || previewing) && <div className="absolute right-2 top-2">
            <span className="text-black cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" ><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
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
  )
}
