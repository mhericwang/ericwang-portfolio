import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";
import { motion } from "framer-motion";

import SectionWrapper from "../hoc/SectionWrapper";
import Strings from '../Constants/Strings';
import { textVariant } from "../utils/motion";

function About() {
  return (
    <motion.div variants={textVariant(0.1)} className='px-10 text-center flex flex-col items-center'>
      <BiSolidQuoteAltLeft className="bg-blue-500 p-3 text-[44px] rounded-full mt-6 text-white"/>
      <h2 className='my-6'>{Strings.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight className="bg-blue-500 p-3 text-[44px] rounded-full mt-2 text-white"/>
    </motion.div>
  )
}

export default SectionWrapper(About, 'about');