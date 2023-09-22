import { motion } from 'framer-motion';

import { staggerContainer } from '../utils/motion';

const SectionWrapper = (Component: JSX.ElementType, idName: string) => 
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.15 }}
        className='sm:px-16 px-6 sm:py-8 py-5 max-w-10xl mx-auto relative z-0'
        >
          <span className='hash-span' id={idName}>
            &nbsp;
          </span>
          <Component />
        </motion.section>
    )
  };

export default SectionWrapper;