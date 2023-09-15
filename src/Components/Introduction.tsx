import React from 'react'

function Introduction() {
  return (
    <div className='flex justify-center flex-col items-center'>
        <div className='h-[120px] border-r-[2px] mt-[40px]'/>
        <div className='w-[10px] h-[10px] bg-blue-600 rounded-full'/>
        <h2 className='mt-5 font-medium text-[15px] tracking-widest'> HELLO! MY NAME IS</h2>
        <h2 className='text-[70px] text-center font-bold tracking-widest mt-5'>ERIC <br /> WANG</h2>
        <p className='mt-5 text-center'>FULL STACK DEVELOPER | SOFTWARE ENGINEER</p>
        <div className='mt-5 flex justify-between items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" className='ml-[-15px] fill-green-600' height="30" viewBox="0 -960 960 960" width="30">
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
            </svg>
            <p className='font-bold text-[20px] ml-2'>Toronto, ON </p>
        </div>
        <img src='/src/assets/smallpfp.JPG' className='w-[160px] h-[160px] bg-gray-200 p-7 rounded-full mt-7'/>
    </div>
  )
}

export default Introduction