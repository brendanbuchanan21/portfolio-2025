import { Link } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])



  return (
  <header
  className={`fixed top-0 w-full z-50 h-[60px] bg-black transition-all duration-300 ${
    scrolled ? 'border-b border-gray-700' : ''
  }`}
>
  <div className="flex justify-between items-center w-full max-w-screen-xl px-6 lg:px-20 py-2 mx-auto">
    {/* Left side: Logo + Nav */}
    <div className="flex items-center gap-20">
      <p className="text-2xl font-semibold text-[hsl(var(--primary-purple))] cursor-pointer">
        Brendan.dev
      </p>
      <nav className="hidden md:flex gap-6 font-bold text-sm">
        <Link to="/" className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Home</Link>
        <Link to="/projects" className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Projects</Link>
        <p className="px-2 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Contact</p>
      </nav>
    </div>

    {/* Right side: Hamburger (hidden on md+) */}
    <div className="md:hidden">
      <GiHamburgerMenu className="text-xl" />
    </div>
  </div>
</header>


  )
}
