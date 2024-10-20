import Image from 'next/image'
import React from 'react'
import heroSectionImage from '../asset/Untitled_design__4_-removebg.png'

const Page = () => {
  return (
    <React.Fragment>
      <div className='min-h-screen bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300'>
      
        {/* About Section */}
        <h1 className='text-5xl md:text-6xl font-bold text-center text-gray-800 p-10'>
          About
        </h1>

        <div className="h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-20 space-y-10 md:space-y-0 gap-10">
        
          {/* Image Container */}
          <div className="w-96 h-96 md:w-80 md:h-80 border border-gray-400 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-500">
            <Image
              src={heroSectionImage}
              alt="Hero Section"
              width={9000}
              height={9000}
              className="object-cover w-full h-full"
            />
          </div>
          
          {/* Text Section */}
          <div className="text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              <span className="text-blue-600">Know How</span> I'M
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700 max-w-lg">
              I am in GIAIC Batch 01 and SMIT Batch 11, focusing on Generative AI, MERN stack, and React Native for mobile app development. Excited to enhance my skills in building dynamic web applications and mobile experiences.
            </p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white py-16 px-6 md:px-20 mt-10 shadow-lg rounded-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 text-center mb-10">
            My Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center items-center text-center">
            
            {/* Skill Item */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-white text-2xl font-bold">HTML</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">HTML5</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-500 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-white text-2xl font-bold">CSS</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">CSS3</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-yellow-400 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-black text-2xl font-bold">JS</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">JavaScript</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-white text-2xl font-bold">TS</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">TypeScript</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-yellow-500 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-black text-2xl font-bold">FB</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">Firebase</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-blue-300 flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-black text-2xl font-bold">React</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">ReactJS</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center shadow-md hover:shadow-xl transition-shadow">
                <span className="text-white text-2xl font-bold">Next.js</span>
              </div>
              <p className="text-lg font-medium text-gray-700 mt-2">Next.js</p>
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Page  
