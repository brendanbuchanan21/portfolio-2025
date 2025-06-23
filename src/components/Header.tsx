import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex justify-start text-white bg-black h-[80px]">
  <div className="flex justify-between items-center w-[30rem] px-4 py-2 ml-15">
    <p className="text-2xl font-semibold text-[hsl(var(--primary-purple))]">Brendan.dev</p>
    <nav className="flex gap-10 font-bold text-sm">
      <Link to="/">Home</Link>
      <Link to="/projects">Projects</Link>
      <p>Contact</p>
    </nav>
  </div>
</header>

  )
}
