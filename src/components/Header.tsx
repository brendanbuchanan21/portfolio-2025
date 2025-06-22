import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="p-2 flex gap-2 text-white justify-between bg-black border border-lime-400">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">Home</Link>
          <Link to='/projects'>Projects</Link>
          <p>Contact</p>
        </div>
      </nav>
    </header>
  )
}
