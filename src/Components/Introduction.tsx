import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";

import ProfilePic from "./ProfilePic";

function Introduction() {
  return (
    <motion.div variants={fadeIn('right', 'spring', 0.1, 1)} className="bg-gray-200 mr-6">
      <div className='grid grid-cols-1 lg:grid-cols-2 mr-4 align-bottom'>
        <motion.div 
          variants={fadeIn('right', 'spring', 0.1, 1)}
          className='flex bg-gray-200 justify-center flex-col items-center lg:pl-24'>
            <div className='h-[150px] border-r-[2px] border-gray-400'/>
            <div className='w-[10px] h-[10px] bg-blue-600 rounded-full'/>
            <h2 className='mt-5 font-medium text-[15px] tracking-widest'> HELLO! MY NAME IS</h2>
            <h2 className='text-[70px] text-center font-bold tracking-widest mt-5'>ERIC <br /> WANG</h2>
            <p className='mt-5 text-center'>FULL STACK DEVELOPER | SOFTWARE ENGINEER</p>
            <div className='mt-5 flex justify-between items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className='ml-[-15px] fill-blue-600' height="30" viewBox="0 -960 960 960" width="30">
                <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
              </svg>
              <p className='font-bold text-[20px] ml-2'>Toronto, ON </p>
            </div>
            <img src='/src/assets/smallpfp.JPG' className='w-[160px] h-[160px] bg-gray-200 p-7 rounded-full mt-7 mb-3'/>
        </motion.div>
          <motion.div variants={fadeIn('right', 'spring', 0.1, 1)} className='hidden lg:block'>
            <ProfilePic/>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default SectionWrapper(Introduction, 'introduction');