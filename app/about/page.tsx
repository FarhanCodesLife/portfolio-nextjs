import Image from 'next/image'
import React from 'react'
import heroSectionImage from '../asset/Untitled_design__4_-removebg.png'

const Page = () => {
  return (
    <main className='min-h-screen bg-gray-900 text-white'>
      {/* Hero Section */}
      <section className='container mx-auto py-24 px-6'>
        <div className="flex flex-col md:flex-row items-center justify-between gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className='text-5xl md:text-7xl font-bold'>
              Hello, I'm <br />
              <span className='text-orange-500'>Your Name</span>
            </h1>
            <p className='text-xl text-gray-400'>
              A <span className='text-green-400'>Full Stack Developer</span> from Your Location
            </p>
            <p className='text-lg text-gray-400 leading-relaxed'>
              I'm a passionate developer focused on MERN stack and React Native development, 
              currently advancing my skills through GIAIC and SMIT programs.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-3 bg-orange-500 rounded-full hover:bg-orange-600 transition-colors">
                About Me
              </button>
              <button className="px-8 py-3 border border-orange-500 rounded-full hover:bg-orange-500/10 transition-colors">
                Download CV
              </button>
            </div>
          </div>

          {/* Image Container with design elements */}
          <div className="relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={heroSectionImage}
                alt="Professional Portrait"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Add floating design elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20">
              <Image
                src="/path-to-your-ai-icon.png"
                alt="AI Icon"
                width={80}
                height={80}
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20">
              <Image
                src="/path-to-your-ps-icon.png"
                alt="PS Icon"
                width={80}
                height={80}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <div className="bg-gray-800/50 p-8 rounded-xl text-center hover:bg-gray-800 transition-colors">
            <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-orange-500 text-2xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Pixel Perfect</h3>
            <p className="text-gray-400">Attention to detail in every project</p>
          </div>
          {/* Add two more similar feature cards */}
        </div>
      </section>

      {/* Skills section can remain similar but with updated colors */}
      <section className="bg-gray-800 py-20 px-6 mt-10">
        <div className="container mx-auto">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 text-center mb-16">
            Technical <span className="text-blue-600">Skills</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 justify-items-center">
            {/* Skill items - showing just one as example, repeat pattern for others */}
            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-orange-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-white text-2xl font-bold">HTML</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-orange-500 transition-colors">HTML5</p>
            </div>
            
            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-blue-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-white text-2xl font-bold">CSS</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-blue-500 transition-colors">CSS3</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-300 to-yellow-500 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-yellow-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-black text-2xl font-bold">JS</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-yellow-500 transition-colors">JavaScript</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-blue-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-white text-2xl font-bold">TS</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-blue-500 transition-colors">TypeScript</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-yellow-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-black text-2xl font-bold">FB</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-yellow-500 transition-colors">Firebase</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-300 to-blue-500 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-blue-300/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-black text-2xl font-bold">React</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-blue-500 transition-colors">ReactJS</p>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-gray-800 to-black 
                            flex items-center justify-center shadow-lg 
                            group-hover:shadow-gray-400/50 group-hover:scale-110 
                            transition-all duration-300 ease-in-out">
                <span className="text-white text-2xl font-bold">Next.js</span>
              </div>
              <p className="text-lg font-semibold text-gray-700 mt-4 group-hover:text-gray-900 transition-colors">Next.js</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page  
