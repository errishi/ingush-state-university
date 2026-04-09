import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Users, BookOpen, GraduationCap, Building2, ArrowRight } from 'lucide-react'

const Home = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  // Carousel data for main banner
  const carouselSlides = [
    {
      id: 1,
      title: "ШКОЛА ФЕРМЕРА",
      subtitle: "In April, a new enrollment for the Farmer's School in Ingushetia will open.",
      image: "/image1.jpg",
      bgColor: "bg-gradient-to-r from-yellow-300 via-lime-200 to-green-300"
    },
    {
      id: 2,
      title: "EDUCATIONAL PROGRAMS",
      subtitle: "Explore our comprehensive educational programs designed for your future.",
      image: "/image2.jpg",
      bgColor: "bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300"
    },
    {
      id: 3,
      title: "EXPLORE OUR PROGRAMS",
      subtitle: "Discover a wide range of educational opportunities at Ingush State University.",
      image: "/image3.jpg",
      bgColor: "bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300"
    }
  ]

  // News data
  const newsItems = [
    { id: 1, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/anouncement.jpg" },
    { id: 2, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/anouncement.jpg" },
    { id: 3, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/image3.jpg" },
    { id: 4, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/anouncement.jpg" },
    { id: 5, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/anouncement.jpg" },
    { id: 6, title: "ANNOUNCEMENT", category: "ANNOUNCEMENT", icon: "/image2.jpg" }
  ]

  // Quick links data
  const quickLinks = [
    {
      id: 1,
      icon: Users,
      title: "For applicants",
      links: ["Admissions Committee", "Documents and certificates"],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      accentColor: "text-blue-600"
    },
    {
      id: 2,
      icon: BookOpen,
      title: "For students",
      links: ["Educational materials", "Electronic information and educational environment of IngSU"],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      accentColor: "text-green-600"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "To graduates",
      links: ["Employment Assistance Center"],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      accentColor: "text-purple-600"
    }
  ]

  const handleCarouselPrev = () => {
    setCurrentCarouselIndex((prev) => (prev === 0 ? carouselSlides.length - 1 : prev - 1))
  }

  const handleCarouselNext = () => {
    setCurrentCarouselIndex((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
  }

  const handleNewsPrev = () => {
    setCurrentNewsIndex((prev) => (prev === 0 ? Math.max(0, newsItems.length - 4) : prev - 1))
  }

  const handleNewsNext = () => {
    setCurrentNewsIndex((prev) => (prev === Math.max(0, newsItems.length - 4) ? 0 : prev + 1))
  }

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev === Math.max(0, newsItems.length - 4) ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [newsItems.length])

  // Auto-slide carousel banner
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCarouselIndex((prev) => (prev === carouselSlides.length - 1 ? 0 : prev + 1))
    }, 6000) // Change carousel every 6 seconds

    return () => clearInterval(interval)
  }, [carouselSlides.length])

  return (
    <div className="min-h-screen bg-white">
      {/* Section 1: Main Carousel Banner */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Carousel Container */}
            <div 
              className={`rounded-3xl overflow-hidden shadow-2xl relative h-120 flex items-center justify-center transition-all duration-500`}
              style={{
                backgroundImage: carouselSlides[currentCarouselIndex].image 
                  ? `url(${carouselSlides[currentCarouselIndex].image})`
                  : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay for better text visibility */}
              <div className="absolute inset-0 bg-black opacity-30"></div>
              
              {/* Fallback gradient if no image */}
              {!carouselSlides[currentCarouselIndex].image && (
                <div className={`absolute inset-0 ${carouselSlides[currentCarouselIndex].bgColor}`}></div>
              )}
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2 z-0"></div>

              {/* Content */}
              <div className="text-center z-20 px-8 relative">
                <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
                  {carouselSlides[currentCarouselIndex].title}
                </h2>
                <p className="text-white text-xl font-semibold max-w-2xl mx-auto drop-shadow">
                  {carouselSlides[currentCarouselIndex].subtitle}
                </p>
              </div>

              {/* Left Arrow */}
              <button
                onClick={handleCarouselPrev}
                className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl z-30"
              >
                <ChevronLeft size={28} />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleCarouselNext}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl z-30"
              >
                <ChevronRight size={28} />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`rounded-full transition-all ${
                    index === currentCarouselIndex 
                      ? 'bg-blue-600 w-8 h-3' 
                      : 'bg-gray-300 w-3 h-3 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Latest News */}
      <section className="py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="mb-16">
            <div className="relative inline-block w-full">
              <h2 className="text-3xl font-extrabold text-center text-white bg-linear-to-r from-blue-900 to-blue-700 py-3 rounded-2xl shadow-xl">
                Latest News
              </h2>
            </div>
          </div>

          {/* News Carousel */}
          <div className="relative px-12">
            <div className="flex gap-6 overflow-hidden">
              {newsItems.slice(currentNewsIndex, currentNewsIndex + 4).map((news, idx) => {
                const isImageIcon = typeof news.icon === 'string'
                const IconComponent = !isImageIcon ? news.icon : null
                
                return (
                  <div key={news.id} className="shrink-0 w-1/4 min-w-max group">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-gray-200">
                      
                      {/* News Image Placeholder */}
                      <div className="bg-linear-to-br from-blue-500 to-blue-700 w-80 h-50 flex items-center justify-center relative overflow-hidden flex-1">
                        {isImageIcon ? (
                          <img 
                            src={news.icon} 
                            alt="announcement" 
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <>
                            <div className="absolute inset-0 opacity-20">
                              <IconComponent size={140} className="text-white" />
                            </div>
                            <IconComponent size={100} className="text-blue-200 z-10" />
                          </>
                        )}
                      </div>

                      {/* News Content */}
                      <div className="p-0 flex-1 flex flex-col justify-center border-t border-gray-200">
                        <p className="text-center text-sm font-bold text-gray-700 uppercase tracking-wider">Announcement</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleNewsPrev}
              className="absolute -left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNewsNext}
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* News Pagination Dots */}
          <div className="flex justify-center gap-2 mt-10">
            {Array.from({ length: Math.max(0, newsItems.length - 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentNewsIndex 
                    ? 'bg-blue-600 w-8 h-2' 
                    : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {quickLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <div
                  key={link.id}
                  className={`${link.bgColor} rounded-2xl shadow-lg p-10 border-t-4 border-blue-900`}
                >
                  {/* Icon */}
                  <div className={`${link.accentColor} mb-6`}>
                    <IconComponent size={64} strokeWidth={2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-extrabold text-blue-900 mb-8">
                    {link.title}
                  </h3>

                  {/* Links */}
                  <ul className="space-y-4 mb-8">
                    {link.links.map((item, index) => (
                      <li 
                        key={index} 
                        className="text-blue-900 font-semibold cursor-pointer hover:text-gray-900 flex items-center"
                      >
                        <span className="mr-2">
                          <ArrowRight size={16} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Read More Button */}
                  <button className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2">
                    Read more
                    <ArrowRight size={16} />
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home