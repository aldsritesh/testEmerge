import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function Numbers( { breakpoint, size, index } ) {
  const [ShowDropDown, SetShowDropDown] = useState(false);
  const ChangeDropDown = async () => {
    SetShowDropDown(!ShowDropDown)
  };
  const [smallCondition, setSmallCondition] = useState((breakpoint === 'sm' || breakpoint === 'md' || breakpoint === 'xs') && size == 3);

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
        <div className={`bg-white ${smallCondition ? 'p-2' : 'p-6'} rounded-md shadow w-full relative`} style={{width: '100%', height: '100%'}}>
              <div className="flex items-center gap-2 text-grey/80 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z"></path></svg>
                  <p className="text-sm">Active deals</p>
              </div>
              <div className="flex flex-wrap gap-2 items-center">
                  <p className={`${smallCondition ? 'text-2xl' : 'text-5xl'} text-black font-semibold`}>$1,000</p>
                    {smallCondition && <p>
                      <span className='text-green-600 items-center gap-px px-2 py-1 text-[10px] bg-green-100 rounded-full inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path></svg>
                          0.08%
                      </span>
                    </p>}
                  <div className='grid grid-flow-row gap-1 text-left'>
                  {!smallCondition && <p>
                      <span className='text-green-600 items-center gap-px px-2 py-1 text-[10px] bg-green-100 rounded-full inline-flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" className='w-3 h-3' width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z"></path></svg>
                          0.08%
                      </span>
                    </p>}
                    <p className='text-xs text-grey'>vs Last Month: <span className='font-bold text-black'>$220,000</span></p>
                  </div>
              </div>
              {!(save || previewing) && <div className="absolute right-2 top-2">
                  <span className="text-black cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256" onClick={() => {ChangeDropDown();}}><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
                  </span>
                  <ul className="absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap "  style={{ visibility: ShowDropDown == true? 'visible': 'hidden'}}>
                      <li onClick={_handleDuplicate}><a className=' cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                        Duplicate Widget
                        </a></li>
                      <li onClick={_handleDelete}><a className=' cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                        Delete Widget</a>
                        </li>
                  </ul>
              </div>}
          </div>
    </div>
  )
}
