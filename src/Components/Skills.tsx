import { motion } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Lists from "../Constants/Lists";
import { textVariant } from "../utils/motion";

function Skills() {
  return (
    <motion.div variants={textVariant(0.1)} className='px-12 mt-12'>
      <div className='flex items-center'>
        <div className='w-[20px] h-[10px] bg-blue-600 rounded-full'/>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <h2 className='text-[32px] font-medium'>Skills</h2>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <div className="w-[20px] h-[10px] bg-blue-600 rounded-full"/>
      </div>
      <div className='flex justify-around mt-16 mx-[-20px]'>
        {Lists.SKILLS.map((item) => (
          <div className='text-center flex flex-col justify-center items-center gap-6 mx-3'>
            <div className='bg-gray-200 rounded-full w-[100px] h-[100px]'>
              <img src={item.img} className='rounded-full w-[100px] h-[100px] p-4 hover:scale-110 transition-all'/>
            </div>
            <h2 className='mt-4 font-bold'>{item.title}</h2>
            <h2 className='text-sm'>{item.desc}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Skills, 'skills');