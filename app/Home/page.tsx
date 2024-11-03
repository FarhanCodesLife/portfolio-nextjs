import Image from 'next/image'
import Navbar from '../components/Navbar'
import profile from '../asset/download.png'
const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar/>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto px-4 pt-20 lg:pt-28">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="space-y-6 max-w-xl w-full">
            {/* Hello Badge */}
            <div className="inline-block">
              <span className="border border-gray-300 rounded-full px-4 py-1.5 text-sm md:text-base">
                Hello!
                <span className="text-orange-500 ml-1">✨</span>
              </span>
            </div>
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              I'm <span className="text-orange-500">John</span>,<br />
              Software Engineer
            </h1>

            {/* Stats Section */}
            <div className="flex justify-between items-start gap-4">
              {/* Quote */}
              <div className="max-w-[200px]">
                <p className="text-gray-600 text-xs md:text-sm">
                  "Building robust and scalable applications with modern technologies"
                </p>
                <p className="font-medium mt-1 text-sm md:text-base">Highly Recommended</p>
              </div>

              {/* Rating */}
              <div className="text-right">
                <div className="flex text-orange-500 text-sm md:text-base">
                  {Array(5).fill('★').map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <div>
                  <span className="text-lg md:text-xl font-bold">5 Years</span><br />
                  <span className="text-xs md:text-sm text-gray-600">Experience</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="px-5 md:px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors flex items-center gap-2 text-sm md:text-base">
                Portfolio
                <span className="text-lg">→</span>
              </button>
              <button className="px-5 md:px-6 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors text-sm md:text-base">
                Hire me
              </button>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative mt-12 md:mt-0 w-full max-w-[400px]">
            <div className="w-full aspect-square bg-orange-200 rounded-t-full absolute bottom-0 -z-10"></div>
            <Image 
              src={profile} // Your image source
              alt="Professional portrait"
              width={400}
              height={400}
              className="relative z-10 object-cover w-full h-full"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Page