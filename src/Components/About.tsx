import { BiSolidQuoteAltLeft,BiSolidQuoteAltRight } from "react-icons/bi";

import Strings from '../Constants/Strings';

function About() {
  return (
    <div className='px-20 text-center flex flex-col items-center'>
      <BiSolidQuoteAltLeft className="bg-blue-500 p-3 text-[44px] rounded-full mt-6 text-white"/>
      <h2 className='my-6'>{Strings.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight className="bg-blue-500 p-3 text-[44px] rounded-full mt-2 text-white"/>
    </div>
  )
}

export default About