import React from 'react'

export default function header() {
  return (
    <div>
      <div className='bg-black py-4 px-5 flex items-center gap-5'>
        <div className='flex-none'>
            <h2 className='text-2xl text-white'>Kirrivan</h2>
        </div>
        <div className='w-px bg-grey/40 h-9'></div>
        <div className='flex-1 flex items-center justify-between'>
            <h2 className='text-xl text-white'>Dashboard</h2>
            <div className='flex items-center gap-4'>
                <div className='w-80 relative text-white hidden lg:block'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='absolute text-white top-2.5 left-3' width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                    <input type='search' className='form-input rounded-full border-0 focus:ring-0 pl-10 bg-white/10 w-full' placeholder='Search Lead, contact, and more'></input>
                </div>
                <button type='button' className='h-9 w-9 rounded-full bg-[#FF7043] text-white flex items-center justify-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
                </button>
                <div className='w-px bg-grey/40 h-9 hidden sm:block'></div>
                <div className='sm:flex items-center gap-4 hidden'>
                    <button type='button' className='text-grey hover:text-white transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,48H40A16,16,0,0,0,24,64V224a15.84,15.84,0,0,0,9.25,14.5A16.05,16.05,0,0,0,40,240a15.89,15.89,0,0,0,10.25-3.78.69.69,0,0,0,.13-.11L82.5,208H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM40,224h0ZM216,192H82.5a16,16,0,0,0-10.3,3.75l-.12.11L40,224V64H216Z"></path></svg>
                    </button>
                    <button type='button' className='text-grey hover:text-white transition-all duration-300'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path></svg>
                    </button>
                    <button type='button' className='text-grey hover:text-white transition-all duration-300'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"></path></svg>
                    </button>
                </div>
                <div className='w-px bg-grey/40 h-9'></div>
                <button type="button" className='flex items-center gap-1.5 xl:gap-0'>
                    <img className='h-9 w-9 rounded-full xl:mr-3' src="assets/img/avatar-2.png" alt="Header Avatar" />
                    <div className='hidden xl:block text-left'>
                        <p className='text-sm font-medium text-white'>John Kuy</p>
                        <p className='text-xs text-white/40'>CEO, Superadmin</p>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}
