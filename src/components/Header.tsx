import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from 'react-icons/io';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Optional: close drawer when resizing window above md breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setDrawerOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 h-[80px] bg-black transition-all duration-300 ${
          scrolled ? 'border-b border-gray-700' : ''
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-screen-xl px-6 lg:px-20 py-2 mx-auto">
          {/* Left side: Logo + Nav */}
          <div className="flex items-center gap-20">
            <Link to='/' className="text-2xl font-semibold text-[hsl(var(--primary-purple))] cursor-pointer">
              brendanbuchanan.dev
            </Link>
            <nav className="hidden md:flex gap-6 font-bold text-sm">
              <Link to="/" className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Home</Link>
              <Link to="/projects" className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Projects</Link>
              <a href="mailto:brendanbuchanan21@gmail.com" className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Contact</a>
            </nav>
          </div>

          {/* Right side: Hamburger (hidden on md+) */}
          <button className="md:hidden" onClick={() => setDrawerOpen(true)} aria-label="Open menu">
            <GiHamburgerMenu className="text-xl cursor-pointer" />
          </button>
        </div>
        {drawerOpen && (
          <div className='fixed inset-0 bg-black p-6 flex flex-col gap-5'>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-[hsl(var(--primary-purple))] text-xl'>Brendan.dev</p>
              <IoMdClose className='w-8 h-8 cursor-pointer hover:grey' onClick={() => setDrawerOpen(false)}/>
            </div>
            
            <Link to="/" onClick={() => setDrawerOpen(false)} className=''>Home</Link>
            <Link to="/projects" onClick={() => setDrawerOpen(false)} className=''>Projects</Link>
            <a href='mailto:brendanbuchanan21@gmail.com'>Contact</a>
          </div>
        )}
      </header>

      
    </>
  )
}
