import './App.css'
import Header from './Components/Header'
import SideBar from './Components/SideBar'
import Introduction from './Components/Introduction'
import About from './Components/About'
import Skills from './Components/Skills'
import Experience from './Components/Experience'

function App() {
  return (
    <>
    <div className='relative z-0'>
      <div className='bg-cover bg-no-repeat bg-center'>
        <Header/>
        <SideBar/>
      </div>
      <div className='ml-[90px]'>
        <div className='p-5'>
          <Introduction/>
          <About/>
          <Skills/>
          <Experience/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
