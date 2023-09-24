import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function SideBar() {
  return (
    <div className='w-[70px] h-screen border-r-[2px] fixed hidden sm:flex flex-col justify-around items-center mt-[70px]'>
      <h2 className='-rotate-90 tracking-widest'>HOMEPAGE</h2>
      <div className='flex flex-col gap-10 text-[28px]'>
        <IoLogoGithub 
          onClick={()=> window.open('https://github.com/mhericwang')}
          className='cursor-pointer hover:scale-125 transition-all ease-in-out'
        />
        <IoLogoLinkedin 
          onClick={() => window.open('https://www.linkedin.com/in/ericmhwang/')}
          className='cursor-pointer hover:scale-125 transition-all ease-in-out'
        />
      </div>
    </div>
  )
}

export default SideBar;