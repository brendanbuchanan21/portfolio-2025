import { createFileRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
   <div className="mesh-gradient-center flex justify-center items-center p-6 min-h-[calc(100vh-80px)] mx-auto overflow-hidden">
      {/* Your hero content here */}
     <div>
      <img src="/chatGptMe.png" alt="My image" className='w-30 h-30'/>
      <h1 className="text-white text-5xl font-bold leading-relaxed">
      Hey, I'm <span className="mr-2 text-[hsl(var(--primary-purple))]">Brendan</span>
      <span className="inline-block mr-2">✨</span>
      <br />
      <span className="mr-1">A</span>
      <span className='text-[hsl(var(--primary-purple))]'>Software Engineer</span>
    </h1>
     </div>


    </div>
  )
}
