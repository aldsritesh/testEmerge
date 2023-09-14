import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { useDispatch, useSelector } from 'react-redux';

export default function Gantt({ index }) {
    const [series, setSeries] = useState([
      {
        data: [
          {
            x: 'Code',
            y: [
              new Date('2019-03-02').getTime(),
              new Date('2019-03-04').getTime()
            ]
          },
          {
            x: 'Test',
            y: [
              new Date('2019-03-04').getTime(),
              new Date('2019-03-08').getTime()
            ]
          },
          {
            x: 'Validation',
            y: [
              new Date('2019-03-08').getTime(),
              new Date('2019-03-12').getTime()
            ]
          },
          {
            x: 'Deployment',
            y: [
              new Date('2019-03-12').getTime(),
              new Date('2019-03-18').getTime()
            ]
          }
        ]
      }
    ]);
    const [options, setOptions] = useState({
      chart: {
        height: 350,
        type: 'rangeBar',
        toolbar: 'none'
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      xaxis: {
        type: 'datetime'
      }
    }) 
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
    <div style={{height: '100%', width: '100%'}}>
         <div style={{height: '100%', width: '100%'}} className="bg-white p-4 rounded-md shadow w-full relative">
            <ReactApexChart options={options} series={series} type="rangeBar" height={'100%'} />
          </div>
          {!(save || previewing) &&  <div className="absolute right-2 top-2">
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
