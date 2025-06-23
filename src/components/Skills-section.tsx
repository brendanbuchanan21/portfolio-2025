
import { FaLaptopCode } from "react-icons/fa"
import { LiaToolsSolid } from "react-icons/lia"
import { FaHandshake } from "react-icons/fa"
import { GrProjects } from "react-icons/gr"

export default function SkillsSection() {
    return (
        <>
        <div className="mt-[7rem] w-[50rem]">
            <h1 className="text-4xl font-bold">Building Digital Experiences</h1>
            <p className="mt-2 text-gray-400">I specialize in creating stunning user interfaces and developing high-quality applications that stand out.</p>
        </div>
        
        {/* card section */}
        <div className="w-[50rem]  min-height-[30rem] mt-13 flex flex-col gap-5">

            {/* individual card */}
            <div className="border border-gray-700 rounded-lg p-6 card-bg backdrop-blur-3xl">
                <div className="flex flex-row items-center gap-5">
                    <FaLaptopCode className="w-10 h-10 color text-[hsl(var(--primary-purple))]"/>
                    <h2 className="text-2xl font-bold">What I can do</h2>
                </div>
                <p className="text-gray-400">I can help develop solutions that will help you grow your business</p>
                <ul className="mt-3">
                    <li className="list-disc list-inside font-bold">UI/UX</li>
                    <li className="list-disc list-inside font-bold">FullStack Web Development</li>
                    <li className="list-disc list-inside font-bold">API Integration</li>
                    <li className="list-disc list-inside font-bold">Website Optimization</li>
                    <li className="list-disc list-inside font-bold">Bug free code</li>
                </ul>
            </div>

            {/* individual card */}
            <div className="p-6 border border-gray-700 rounded-lg card-bg backdrop-blur-3xl">
                <div className="flex flex-row items-center gap-5">
                    <LiaToolsSolid className="text-[hsl(var(--primary-purple))] w-10 h-10"/>
                    <h2 className="text-2xl font-bold">Tools I Use</h2>
                </div>
                 <p className="text-gray-400">I use the latest tools and techhnologies to build functional and scalable products:</p>
                <ul className="mt-3">
                    <li className="font-bold">Frontend:</li>
                    <p className="text-gray-400">React, Typescript, Tailwind CSS, Redux Toolkit, Tanstack ecosystem</p>
                    <li className="font-bold">Backend:</li>
                    <p className="text-gray-400">Spring Boot, Django, Node.JS, PostgreSQL, MongoDb</p>
                    <li className="font-bold">Workflow Tools:</li>
                    <p className="text-gray-400">Firebase Auth, Docker, Google Storage</p>
                </ul>
            </div>

            {/* individual card */}
            <div className="p-6 border border-gray-700 rounded-lg card-bg">
                <div className="flex flex-row items-center gap-5">
                    <FaHandshake className="text-[hsl(var(--primary-purple))] w-10 h-10"/>
                    <h2 className="text-2xl font-bold">What I bring to the Team</h2>
                </div>
                 <p className="text-gray-400">More than just coding, I focus on effective communication and a positive contribution to any project or team environment</p>
                <ul className="mt-3">
                    <li className="font-bold">Clear Communication:</li>
                    <p className="text-gray-400 mt-1">Translating complex technical concepts for all stakeholders.</p>
                    <li className="font-bold">Adaptability & Resilience:</li>
                    <p className="text-gray-400 mt-1">Thriving in dynamic environments and overcoming obstacles</p>
                    <li className="font-bold">Attention to Detail:</li>
                    <p className="text-gray-400 mt-1">Ensuring high quality and a polished user experience.</p>
                    <li className="font-bold">Proactive Problem-Solving:</li>
                    <p className="text-gray-400 mt-1">Identifying and addressing potential issues before they escalate.</p>
                </ul>
            </div>
        </div>

        <div className="w-[50rem] flex justify-end">
            <div className='w-[13rem] h-[2.5rem] border border-gray-700 bg-black rounded-sm flex flex-row items-center justify-center gap-2 cursor-pointer
                  hover:bg-gray-700 hover:border-none mt-5 p-5'>
                    <GrProjects />
                    View My Projects
            </div>
        </div>
        </>
    )
}