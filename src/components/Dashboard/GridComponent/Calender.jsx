import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function Calender({ index }) {
  const [dropDown, setDropDown] = useState(false);
  const { components, save, previewing } = useSelector(state => state.WidthObj);
  const dispatch = useDispatch();
  const _toggleDropDown = () => setDropDown(!dropDown);
  const _handleDuplicate = () => {
      setDropDown(false);
  }
  const _handleDelete = () => {
      setDropDown(false);
      const tempComps = JSON.parse(JSON.stringify(components));
      tempComps.splice(index, 1);
      dispatch({type: 'COMPONENT_CHANGED', payload: []});
      setTimeout(() => {
        dispatch({type: 'COMPONENT_CHANGED', payload: tempComps});
        dispatch({type: 'CURRENT_SELECTED_INDEX', payload: -1});
      }, 0);
  }
  return (
    <div style={{width: '100%', height: '100%'}}>
    <div style={{width: '100%', height: '100%'}} className="bg-white p-4 rounded-md shadow w-full relative">
         <div className="flex items-center justify-between gap-2 mb-4 mr-4">
             <p className="text-sm text-black font-semibold">Amount by stage</p>  
         </div>
         <div className="grid grid-flow-row gap-2 max-h-[90%] overflow-auto" style={{paddingRight: '7px'}}>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
                   <p className='text-grey text-[12px] font-medium'>She interested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
               <p className='text-grey text-[12px] font-medium'>Sheinterested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
               <p className='text-grey text-[12px] font-medium'>She interested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
               <p className='text-grey text-[12px] font-medium'>She interested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
               <p className='text-grey text-[12px] font-medium'>She interested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           <div className='border border-grey/50 rounded-md p-3'>
               <div className='flex flex-wrap items-center gap-2 justify-between mb-4'>
                 <h3 className='text-base text-accent font-semibold line-clamp-1'>Yolanda Viera-Nu...</h3>
                 <div className='flex items-center gap-3'>
                     <p className='text-sm font-semibold text-black'>Physical Therapy Room</p>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,16V88H32V64Zm0,128H32V104H224v88Zm-16-24a8,8,0,0,1-8,8H168a8,8,0,0,1,0-16h32A8,8,0,0,1,208,168Zm-64,0a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,168Z"></path></svg>
                 </div>
               </div>
               <div className='flex flex-wrap items-center gap-2 justify-between'>
               <p className='text-grey text-[12px] font-medium'>She interested in our new product line.</p>
                   <div className='flex items-center gap-3'>
                       <div className='flex items-center gap-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" className='text-accent' width="20" height="20" fill="currentcolor" viewBox="0 0 256 256"><path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path></svg>
                           <p className='text-sm text-black font-medium'>09:00 am</p>
                       </div>
                       <button type='button'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"></path></svg>
                       </button>
                   </div>
               </div>
           </div>
           
         
         </div>
         
         {!(save || previewing) && <div className="absolute right-2 top-4">
             <span className="text-black cursor-pointer" onClick={_toggleDropDown}>
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M112,60a16,16,0,1,1,16,16A16,16,0,0,1,112,60Zm16,52a16,16,0,1,0,16,16A16,16,0,0,0,128,112Zm0,68a16,16,0,1,0,16,16A16,16,0,0,0,128,180Z"></path></svg>         
             </span>
             <ul className={`absolute z-50 mt-1 min-w-[120px] rounded bg-white p-0 py-2 text-sm shadow right-0 whitespace-nowrap ${dropDown ? '' : 'hidden'}`}>
                 <li onClick={_handleDuplicate}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 hover:bg-black/5 hover:text-black'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"></path></svg>
                   Duplicate Widget
                   </a></li>
                 <li onClick={_handleDelete}><a className='cursor-pointer flex items-center px-4 gap-1 py-2 text-primary hover:bg-black/5'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"></path></svg>
                   Delete Widget</a>
                   </li>
             </ul>
         </div>}
     </div>
</div>
  )
}
