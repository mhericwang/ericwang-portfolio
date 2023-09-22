import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Lists from "../Constants/Lists";
import SectionWrapper from "../hoc/SectionWrapper";

type project = {
  id: number,
  title: string,
  desc: string,
  link: string,
  img: string,
}

const ProjectCard = ({ project } : { project: project }) => (
  <motion.div variants={fadeIn('down', 'spring', project.id * 0.5, 0.75)}>
    <div className='bg-[#151030] p-5 rounded-2xl sm:w-[360px] w-full'>
      <div className='relative w-full h-[230px]'>
        <img 
          src={project.img}
          alt='project_image'
          className='w-full h-full object-cover rounded-2xl'
          />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(project.link, '_blank')}
            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img 
                src='/src/assets/github.png'
                alt='source code'
                className='w-1/2 h-1/2 object-contain hover:scale-125'
              />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='text-white font-bold text-[24px]'>{project.title}</h3>
        <p className='mt-2 text-gray-200 text-[14px]'>{project.desc}</p>
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <motion.div variants={fadeIn('down', 'spring', 0.1, 1)} className='px-12 mt-12'>
      <div className='flex items-center'>
      <div className='w-[20px] h-[10px] bg-blue-600 rounded-full'/>
      <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
      <h2 className='text-[32px] font-medium'>Projects</h2>
      <div className='w-full border-[1px] mx-4 mt-[-2px]'/>
      <div className="w-[20px] h-[10px] bg-blue-600 rounded-full"/>
      </div>
      <div className='mt-20 flex flex-wrap gap-7 justify-around'>
        {Lists.PROJECTS.map((project : project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  )
}

export default SectionWrapper(Projects, 'projects')