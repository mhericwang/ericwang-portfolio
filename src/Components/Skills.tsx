import { motion } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Lists from "../Constants/Lists";
import { textVariant } from "../utils/motion";

const TechBubble = ({ img } : { img: string }) => (
  <div className='bg-gray-200 rounded-full w-[70px] h-[70px] flex flex-col justify-center items-center'>
    <img className='rounded-full w-[80%] h-[80%]' src={img}/>
  </div>
)

function Skills() {
  return (
    <motion.div variants={textVariant(0.1)} className='mt-12 items-center'>
      <div className='flex items-center'>
        <div className='w-[8px] h-[8px] shrink-0 bg-blue-600 rounded-full'/>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <h2 className='text-[32px] font-medium'>Skills</h2>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <div className="w-[8px] h-[8px] shrink-0 bg-blue-600 rounded-full"/>
      </div>
      <div className='flex justify-center mt-16 ml-[-10px]'>
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
      <div className='flex justify-center ml-[-15px]'>
        <div className='mt-20 grid lg:grid-cols-6 grid-cols-3 justify-center items-center gap-20'>
          {Lists.SKILLS_TECH.map((tech: string) => (
            <TechBubble img={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Skills, 'skills');