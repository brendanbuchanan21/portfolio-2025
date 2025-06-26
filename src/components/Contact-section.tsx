import { useState } from "react"

export default function ContactSection() {

   const [formSubmitted, setFormSubmitted] = useState(false)
   const [formError, setFormError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement
    const name = (form.elements.namedItem('name') as HTMLInputElement).value.trim()
    const email = (form.elements.namedItem('email') as HTMLInputElement).value.trim()
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value.trim()

    if (!name || !email || !message) {
      e.preventDefault();
      setFormError(true);
      return;
    }

    setFormError(false);
    setFormSubmitted(true);

    setTimeout(() => {
      form.reset()
    }, 300)

  }

    return (
        <>
        <div className="w-full max-w-6xl px-5 mx-auto md:px-15">
        <div className="mesh-gradient-center z-0 relative overflow-visible min-h-[30rem] rounded-2xl border border-gray-700 mt-[8rem] mb-30">
  <div className="wave-grid absolute inset-0"></div>

  <div className="relative z-10 flex flex-col gap-10 p-8 xl:flex-row xl:gap-16">
    {/* Contact heading */}
    <div className="flex-1">
    <h1 className='text-3xl text-[hsl(var(--primary-purple))] font-bold lg:text-4xl'>
      Bringing your ideas to life.
      <br />
      Let's turn your vision into reality
    </h1>
    <p className="mt-3 lg:text-lg">
      Have a project in mind or just want to chat? Let's connect!
    </p>
  </div>

    {/* Contact form */}
    <div className="relative z-100 border border-gray-800 lg:min-w-[30rem] p-6 rounded-lg backdrop-blur-xl bg-gradient-gray">

      <form action="https://send.pageclip.co/TwyEZfLzTTZHJLrtyNDMqbHOm7CekVCN" method="post" onSubmit={handleSubmit} className="pageclip-form">
        <div className="flex flex-col gap-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="name">Name</label>
                <input className="flex h-10 w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Your Name" required type="text" name="name" />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="email">Email</label>
                <input className="flex h-10 w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="contact@example.com" required type="email" name="email" />
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="message">Message</label>
                <textarea className="flex min-h-[80px] w-full rounded-md border border-gray-800 bg-black px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 h-32" name="message" placeholder="Your message here..." required></textarea>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-800 bg-black hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ml-auto mt-2" type="submit">Send</button>
                {formSubmitted && (
                  <p className="text-green-500 text-sm mt-2">Message sent successfully! 🎉</p>
                )}
                {formError && (
                  <p className="text-red-500 text-sm mt-2">Please fill out all fields.</p>
                )}
      
      </div>
          
      </form>
    </div>
  </div>
</div>
      </div>
        </>
    )
}