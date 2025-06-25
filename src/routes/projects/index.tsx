import { createFileRoute } from '@tanstack/react-router'
import { IoMdHappy } from 'react-icons/io'
import { LuMessageCircleDashed } from 'react-icons/lu'
import Footer from '@/components/Footer'

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <>
      <section className="flex flex-col py-25 px-5 sm:px-20 xl:px-52 bg-black min-h-[800px]">
        <div>
          <h1 className='text-4xl font-bold mb-2'>Projects</h1>
          <p className='text-gray-400'>Here you will find a selection of projects I have worked on.</p>
        </div>

        <div className='pt-8 grid grid-cols-2 gap-x-3 items-start'>
          <div className='grid grid-cols-1 gap-12px gap-y-4'>
            <a href="">
              <div className="relative rounded-lg overflow-hidden group border-gray-300">
                <div className='relative'>
                  <img src="/pt-img.png" alt="" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                  {/* hover text on img card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className='p-4'>
                      <h1 className='text-white text-xl font-bold'>OrthoNeuro</h1>
                      <p className='text-white'>A Physical Therpay Business Plan</p>
                      <div className='flex flex-wrap gap-2 mt-2'>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">React</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Vite</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Javascript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Typescript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Java</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Tailwind</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">PostgreSQL</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Springboot</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Docker</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Firebase Auth</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Tanstack Router</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Google Cloud Storage</div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </a>
            <a href="">
              <div className="relative rounded-lg overflow-hidden group border border-gray-300">
                <div className='relative'>
                  <img src="/expense-img.png" alt="" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                  {/* hover text on img card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className='p-4'>
                      <h1 className='text-white text-xl font-bold'>Expense Tracker</h1>
                      <p className='text-white'>A finance tracker to visualize your spending</p>
                      <div className='flex flex-wrap gap-2 mt-2'>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">React</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Vite</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">PostgreSQL</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Django</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Python</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Javascript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Typescript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Firebase Auth</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Redux Toolkit</div>
                      
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className='grid grid-cols-1 gap-12px'>
            <a href="">
              <div className="relative rounded-lg overflow-hidden group border-gray-300">
                <div className='relative'>
                  <img src="/making-progress-img.png" alt="" className="w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"/>
                  {/* hover text on img card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className='p-4'>
                      <h1 className='text-white text-xl font-bold'>MakingProgress</h1>
                      <p className='text-white'>A workout app to track your progress overtime</p>
                      <div className='flex flex-wrap gap-2 mt-2'>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">React</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Vite</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Javascript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Typescript</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Node.JS</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Express</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">MongoDB</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Redux Toolkit</div>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-[hsl(var(--primary-purple))] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">Firebase Auth</div>
                      
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </a>

            <div className='rounded-lg min-h-[250px] flex flex-col items-center justify-center gap-4 mt-5'>
            <IoMdHappy className='h-18 w-18 text-[hsl(var(--primary-purple))]'/>
            <h1 className='font-bold text-xl'>Let's Work Together!</h1>
            <p className='text-gray-500'>Have a project in mind? Let's talk about it.</p>
            <a aria-label="Contact Me" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-2" href="mailto:brendanbuchanan21@gmail.com">
            <LuMessageCircleDashed />
            Contact Me
            </a>

            </div>

            {/* end of cards content */}
          </div>
        </div>

      </section>
      <Footer/>
      </>
  )
}
