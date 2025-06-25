


export default function Footer() {

    return (
        <>
        <div className="border-t-1 border-border bg-black pt-8 pb-4 px-5 sm:px-20 xl:px-52 flex flex-col ">
            <div className="flex flex-col">
                <p className="font-bold">Brendan Buchanan</p>
                <p className="text-gray-400">Based in Chicago, IL 🇺🇸</p>
            </div>
            <div className="mt-6">
                <p className="text-gray-400">Website built with Vite, React, Typescript, Tailwind CSS, Tanstack Router</p>
            </div>
        </div>
        <div className=" pb-4 px-5 sm:px-20 xl:px-52 flex flex-row justify-between">
            <p>© 2025 Brendan. All rights are reserved.</p>
        </div>
        </>
    )
}