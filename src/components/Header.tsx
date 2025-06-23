import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex justify-start text-white bg-black h-[80px]">
  <div className="flex justify-between items-center w-[35rem] px-4 py-2 ml-15">
    <p className="text-2xl font-semibold text-[hsl(var(--primary-purple))] cursor-pointer">Brendan.dev</p>
    <nav className="flex gap-10 font-bold text-sm">
      <Link to="/" className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Home</Link>
      <Link to="/projects" className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Projects</Link>
      <p className="px-3 py-1 rounded-md hover:bg-gray-700 hover:text-white transition-colors duration-300">Contact</p>
    </nav>
  </div>
</header>

  )
}
