import { createFileRoute } from '@tanstack/react-router'
import '../styles.css'
import { HiOutlineAtSymbol } from "react-icons/hi";
import { GrProjects } from 'react-icons/gr';
import SkillsSection from '@/components/skills-section';
import ContactSection from '@/components/Contact-section';
import Footer from '@/components/Footer';
import { Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
   <div className="mesh-gradient-center flex flex-col items-start justify-start mx-auto overflow-hidden bg-square-pattern h-[100vh]">
      {/* Your hero content here */}
      <div className='max-w-[50rem] w-full px-4 lg:max-auto'>
     <div className='flex flex-col md:flex-row gap-8 max-w-[50rem]'>
      <img src="/chatGptMe.png" alt="My image" className='w-30 h-30'/>
      <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] font-[inter]">
      Hey, I'm <span className="inline-block mr-2 text-[hsl(var(--primary-purple))]">Brendan&nbsp;✨</span>

      <br />
      <span className="mr-1 font-[Inter]">A </span>
      <span className='text-[hsl(var(--primary-purple))] font-[Inter]' >Software Engineer</span>
    </h1>
     </div>

    {/* the main text of hero ya know*/}
    <div className='max-w-[50rem] mt-7'>
      <p className='text-md md:text-xl'>A <span className='font-bold'>fullstack developer </span>with solid foundations in computer science principles.
        Looking to the shape the future through cutting edge technology.
      </p>
    </div>

    {/* links in hero  */}
    <div className='mt-4  max-w-[50rem] flex flex-col md:flex-row  md:items-center gap-4'>
      <div className='flex flex-row gap-4 md:gap-7'>
      <a href='mailto:brendanbuchanan21@gmail.com' className='w-[9rem] h-[2.5rem] border border-gray-700 bg-black rounded-sm flex flex-row items-center justify-center gap-2 cursor-pointer
      hover:bg-gray-700 hover:border-none'>
        <HiOutlineAtSymbol />
        Contact Me
        </a>
      <Link to="/projects" className='w-[9rem] h-[2.5rem] border border-gray-700 bg-black rounded-sm flex flex-row items-center justify-center gap-2 cursor-pointer
      hover:bg-gray-700 hover:border-none'>
        <GrProjects />
        Projects
      </Link>
      </div>

      {/* Vertical divider */}
    <div className="hidden md:flex w-px h-[1.8rem] bg-gray-400 mx-3  justify-center items-center" />

    <a href="https://github.com/brendanbuchanan21" target="_blank" rel="noopener noreferrer">
      <svg
        className="w-5 h-5 fill-white hover:fill-gray-400 transition"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 .297a12 12 0 0 0-3.79 23.4c.6.113.82-.263.82-.582v-2.257c-3.338.726-4.042-1.612-4.042-1.612-.546-1.388-1.334-1.758-1.334-1.758-1.09-.745.083-.729.083-.729 1.204.085 1.837 1.236 1.837 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.763-1.604-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.467-2.381 1.236-3.22-.124-.304-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 0 1 6 0c2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.872.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.814 1.103.814 2.222v3.293c0 .321.218.699.825.58A12 12 0 0 0 12 .297Z"/>
      </svg>
    </a>
    </div>

    </div>
    </div>

    <section className='min-h-[50rem] bg-black border-t border-t-gray-700 flex flex-col items-center'>
      <SkillsSection />
    </section>

    <section className='min-h-[40rem] bg-black flex md:px-15'>
      <ContactSection />
    </section>

    <footer className='min-h-[8rem] bg-black'>
      <Footer />
    </footer>
  </>
  )
}
