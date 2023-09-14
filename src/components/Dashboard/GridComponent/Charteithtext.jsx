import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Charteithtext( { breakpoint, size, index } ) {
    const [isSmall, setIsSmall] = useState(breakpoint === 'md' && size === 3);

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
            <div className='flex flex-wrap items-center justify-between gap-2 mb-4'>
                <h2 className='text-lg font-semibold text-black'>Deal Revenue Forecast</h2>
                <a href='#' className='flex items-center gap-1 text-sm font-medium text-[#ff7043]'>
                    <p className=''>View More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
        
                </a>
            </div>
            <div className='flex flex-wrap gap-2'>
                <div className=''>
                    <p className='text-base text-black font-semibold mb-4'>Company Goals</p>
                    <div className="svg-item">
                        <svg width="100%" height="100%" viewBox="0 0 40 40" className="donut">
                            <circle className="donut-hole" cx="20" cy="20" r="15.91549430918954" fill="#fff"></circle>
                            <circle className="donut-ring" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5"></circle>
                            <circle className="donut-segment donut-segment-3" cx="20" cy="20" r="15.91549430918954" fill="transparent" strokeWidth="3.5" stroke-dasharray="30 70" stroke-dashoffset="25"></circle>
                            <g className="donut-text donut-text-2">
                                <text y="40%" transform="translate(0, 2)">
                                    <tspan x="50%" text-anchor="middle" className="donut-data">February Goals</tspan>   
                                </text>
                                <text y="55%" transform="translate(0, 2)">
                                    <tspan x="50%" text-anchor="middle" className="donut-percent">$300,000</tspan>   
                                </text>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className='grid grid-flow-row gap-3' style={isSmall ? {width: '100%'} : {}}>
                    <p className={`text-base text-black font-semibold ${ isSmall ? '' : 'mb-4'}`}>Team Goals</p>
                    <div>
                    <div className='space-y-1 mb-5'>
                        <div className={`${isSmall ? '' : 'flex'} ${isSmall ? 'items-left' : 'items-center'} justify-between gap-2`}>
                            <p className='text-base text-black'>Marketing</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$29,000/</samp> $150,000</p>
                        </div>
                        <div className="w-full h-2 bg-black/10 rounded-full"><div className="bg-[#ff7043] h-2 rounded-full w-2/12"></div></div>
                    </div>
                    <div className='space-y-1 mb-5'>
                        <div className={`${isSmall ? '' : 'flex'} ${isSmall ? 'items-left' : 'items-center'} justify-between gap-2`}>
                            <p className='text-base text-black'>Sales</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$120,060/</samp> $150,000</p>
                        </div>
                        <div className="w-full h-2 bg-black/10 rounded-full"><div className="bg-[#ff7043] h-2 rounded-full w-8/12"></div></div>
                    </div>
                    <div className='space-y-1 mb-5'>
                        <div className={`${isSmall ? '' : 'flex'} ${isSmall ? 'items-left' : 'items-center'} justify-between gap-2`}>
                            <p className='text-base text-black'>Digital Marketing</p>
                            <p className='text-sm font-semibold text-grey'><samp className='text-black'>$139,100/</samp> $150,000</p>
                        </div>
                        <div className="w-full h-2 bg-black/10 rounded-full"><div className="bg-[#ff7043] h-2 rounded-full w-10/12"></div></div>
                    </div>
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
    </div>
    </div>
  )
}
