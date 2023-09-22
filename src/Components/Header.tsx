function Header() {
  const menu = [
    {
      id: 1,
      name: 'HOME',
    },
    {
      id: 2,
      name: 'SKILLS',
    },
    {
      id: 3,
      name: 'EXPERIENCE',
    },
    {
      id: 4,
      name: 'PROJECTS',
    },
    {
      id: 5,
      name: 'CONTACT',
    },
  ];
  return (
    <div className='flex h-[70px] items-center fixed top-0 z-20 w-full justify-between border-b-[1px] bg-white'>
      <div className='w-[70px] h-[70px]'>
        <img className='bg-white p-2 border-b-[1px]' src='/src/assets/logo.png'/>
      </div>
      <div className='hidden md:flex gap-14'>
        {menu.map((item) => (
          <div className='cursor-pointer hover:underline font-meidum'>
            {item.name}
          </div>
        ))}
      </div>
      <div className='w-[70px] h-[70px] bg-black rounded-md flex justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" className='fill-white' height="30" viewBox="0 -960 960 960" width="30">
          <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg>
      </div>
    </div>
  )
}

export default Header;