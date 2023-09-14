import React, { useState ,useContext,useEffect} from 'react'


import { useDispatch, useSelector } from 'react-redux';

import { dashContext } from '../Header/Maindashboard';

import { CalendarIcon, ChevronRightIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/solid';
import { BsCheck2 } from 'react-icons/bs';



export default function Task( { breakpoint, size, index } ) {
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


  return (
    <div style={{height: '100%', width: '100%'}}>
          <div className="font-main mt-4 w-full rounded-lg border border-gray-100 bg-white shadow-sm">
            <div className="px-3 py-2 flex items-center border-b border-b-gray-100">
              <ChevronRightIcon className="w-4 h-4 text-grey stroke-2" />
      
              <span className="ml-4 p-1 rounded-full bg-blue-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#1066cf"
                  className="w-4 h-4"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"
                  />
                </svg>
              </span>
              <span className="pl-3 text-sm font-medium text-gray-700">
                Task <span className="text-main font-light">created</span> Easther
                Howard
              </span>
      
              <span className="flex items-center ml-auto text-sm">
                <span className="font-light text-sm text-gray-400 pr-2">Due: </span>
                <CalendarIcon className="w-5 h-5 text-gray-500" />
                <time className="pl-2 text-sm font-medium text-gray-700">
                  Today, 12:00 PM
                </time>
                <span className={`ml-2 p-2 relative  cursor-pointer rounded-full hover:bg-gray-50 active:bg-gray-100 transition-all duration-200 ${!(save || previewing) ? "" : "hidden"}`}>
                  <EllipsisHorizontalIcon  onClick={() => setShowMenu(!showMenu)} className="w-6 h-6 text-gray-400 stroke-2" />
                </span>
                {console.log("threedots",showMenu)}
                {showMenu &&   <ul className={`absolute z-50  mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 top-5 whitespace-nowrap ${showMenu ? '' : 'hidden'}`}>
                      <li onClick={_handleDuplicate}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                        Duplicate Widget
                        </a></li>
                      <li onClick={_handleDelete}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                        Delete Widget</a>
                        </li>
                  </ul>}
              </span>
            </div>
      
            <div className="p-5 flex">
            <span className=" flex justify-center items-center border border-gray-200 bg-gray-100 w-10 h-7 rounded-full mr-4" >
                <BsCheck2 className="h-5 w-5 text-orange-500"/>
              </span>
              <div>
                <p className="leading-7 font-semibold">
                  Prepare quote for Jerome Bell
                </p>
                <p className="pt-2 text-sm text-gray-400 font-light tracking-wider">
                  She&apos;s interested in our new product line and wants our very best
                  price. Please include a detailed breakdown of costs.
                </p>
              </div>
            </div>
           
          </div>
          </div>
        );
     

}

