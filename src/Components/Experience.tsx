import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';

import SectionWrapper from '../hoc/SectionWrapper';
import Lists from '../Constants/Lists'; 

import 'react-vertical-timeline-component/style.min.css';
import { fadeIn } from '../utils/motion';

type experience = {
  title: string,
  company: string,
  link: string,
  icon: string,
  date: string,
  points: Array<string>
}

const ExperienceCard = ({ experience }: { experience: experience; }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: '#1a1440', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date}
    iconStyle={{ background: '#d3d3d3' }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img
          src={experience.icon}
          alt={experience.company}
          onClick={() => window.open(experience.link, '_blank')}
          className='w-[75%] h-[75%] bg-white rounded-full object-contain cursor-pointer hover:scale-125 transition ease-in-out'
        />
      </div>
    }>
    <div>
      <h3 className='text-[24px] font-bold'>
        {experience.title}
      </h3>
      <p className='text-[#aaa6c3] text-[16px] font-semibold' style={{ margin: 0 }}>
        {experience.company}
      </p>
    </div>

    <ul className='mt-5 list-disc ml-5 space-y-2'>
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[14px] pl-1 tracking-wider'
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

function Experience() {
  return (
    <motion.div variants={fadeIn('down', 'spring', 0.1, 1)} className=' mt-12'>
      <div className='flex items-center'>
        <div className='w-[8px] h-[8px] bg-blue-600 rounded-full shrink-0'/>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <h2 className='text-[32px] font-medium'>Experience</h2>
        <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
        <div className="w-[8px] h-[8px] bg-blue-600 rounded-full shrink-0"/>
      </div>
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline lineColor='#d3d3d3'>
          {Lists.EXPERIENCE.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Experience, 'experience');