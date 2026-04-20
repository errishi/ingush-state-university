import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Users, BookOpen, GraduationCap, Building2, ArrowRight } from 'lucide-react'
import ImageSection1 from '../components/Home/ImageSection1'
import ImageSection2 from '../components/Home/ImageSection2'
import { Link } from 'react-router'
import ImageSection3 from '../components/Home/ImageSection3'

const Home = () => {
  const [currentCarouselIndex, setCurrentCarouselIndex] = useState(0)
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0)

  // Carousel data for main banner
  const carouselSlides = [
    {
      id: 1,
      title: "INGUSH STATE UNIVERSITY",
      subtitle: "Admissions, academic programs, and official university updates in one place.",
      image: "/image1.jpg",
      bgColor: "bg-gradient-to-r from-yellow-300 via-lime-200 to-green-300"
    },
    {
      id: 2,
      title: "ACADEMIC PROGRAMS",
      subtitle: "Discover undergraduate, graduate, and continuing education opportunities.",
      image: "/image2.jpg",
      bgColor: "bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300"
    },
    {
      id: 3,
      title: "UNIVERSITY NEWS",
      subtitle: "Follow institutional events, announcements, and campus life updates.",
      image: "/image3.jpg",
      bgColor: "bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300"
    }
  ]

  // News data
  const newsItems = [
    { id: 1, title: "Admissions updates", category: "Admissions", icon: "/anouncement.jpg" },
    { id: 2, title: "Academic calendar", category: "Education", icon: "/anouncement.jpg" },
    { id: 3, title: "University events", category: "Campus life", icon: "/image3.jpg" },
    { id: 4, title: "Faculty notices", category: "Faculty", icon: "/anouncement.jpg" },
    { id: 5, title: "Research news", category: "Research", icon: "/anouncement.jpg" },
    { id: 6, title: "Student resources", category: "Support", icon: "/image2.jpg" }
  ]

  // Quick links data
  const quickLinks = [
    {
      id: 1,
      icon: Users,
      title: "For applicants",
      links: ["Admissions Committee", "Required documents"],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      accentColor: "text-blue-600",
      url: "/applicant"
    },
    {
      id: 2,
      icon: BookOpen,
      title: "For students",
      links: ["Educational materials", "Digital learning environment"],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      accentColor: "text-green-600",
      url: "/sveden/education"
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "For graduates",
      links: ["Career support and alumni services"],
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
      <section className="py-6 sm:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="relative">
            {/* Carousel Container */}
            <div 
              className={`rounded-lg sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl relative h-48 sm:h-72 lg:h-120 flex items-center justify-center transition-all duration-500`}
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
              <div className="text-center z-20 px-4 sm:px-8 relative">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-2 sm:mb-6 drop-shadow-lg">
                  {carouselSlides[currentCarouselIndex].title}
                </h2>
                <p className="text-white text-xs sm:text-base lg:text-lg xl:text-xl font-semibold max-w-2xl mx-auto drop-shadow">
                  {carouselSlides[currentCarouselIndex].subtitle}
                </p>
              </div>

              {/* Left Arrow */}
              <button
                onClick={handleCarouselPrev}
                className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-3 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl z-30"
              >
                <ChevronLeft size={16} className="sm:w-7 sm:h-7" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleCarouselNext}
                className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 sm:p-3 hover:bg-blue-600 hover:text-white transition-all shadow-lg hover:shadow-xl z-30"
              >
                <ChevronRight size={16} className="sm:w-7 sm:h-7" />
              </button>
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center gap-2 sm:gap-3 mt-4 sm:mt-8">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCarouselIndex(index)}
                  className={`rounded-full transition-all ${
                    index === currentCarouselIndex 
                      ? 'bg-blue-600 w-6 sm:w-8 h-2 sm:h-3' 
                      : 'bg-gray-300 w-2 h-2 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Latest News */}
      <section className="py-12 sm:py-20 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          {/* Section Title */}
          <div className="mb-8 sm:mb-16">
            <div className="relative inline-block w-full">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-white bg-linear-to-r from-blue-900 to-blue-700 py-2 sm:py-3 rounded-lg sm:rounded-2xl shadow-xl">
                Latest News
              </h2>
            </div>
          </div>

          {/* News Carousel */}
          <div className="relative px-3 sm:px-12">
            <div className="flex gap-3 sm:gap-6 overflow-hidden">
              {newsItems.slice(currentNewsIndex, currentNewsIndex + Math.ceil(window.innerWidth < 640 ? 1.5 : window.innerWidth < 1024 ? 2 : 4)).map((news, idx) => {
                const isImageIcon = typeof news.icon === 'string'
                const IconComponent = !isImageIcon ? news.icon : null
                
                return (
                  <div key={news.id} className="shrink-0 w-full sm:w-1/2 lg:w-1/4 group">
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col border border-gray-200">
                      
                      {/* News Image Placeholder */}
                      <div className="bg-linear-to-br from-blue-500 to-blue-700 w-full h-40 sm:h-48 flex items-center justify-center relative overflow-hidden flex-1">
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
                        <p className="text-center text-sm font-bold text-gray-700 uppercase tracking-wider">{news.category}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handleNewsPrev}
              className="absolute left-0 sm:-left-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronLeft size={16} className="sm:w-6 sm:h-6" />
            </button>
            <button
              onClick={handleNewsNext}
              className="absolute right-0 sm:-right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-1 sm:p-2 shadow-lg hover:shadow-xl transition-all z-10"
            >
              <ChevronRight size={16} className="sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* News Pagination Dots */}
          <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-10">
            {Array.from({ length: Math.max(0, newsItems.length - 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentNewsIndex(index)}
                className={`rounded-full transition-all ${
                  index === currentNewsIndex 
                    ? 'bg-blue-600 w-6 sm:w-8 h-1.5 sm:h-2' 
                    : 'bg-gray-300 w-1.5 sm:w-2 h-1.5 sm:h-2 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Quick Links */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
            {quickLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <div
                  key={link.id}
                  className={`${link.bgColor} rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-10 border-t-4 border-blue-900`}
                >
                  {/* Icon */}
                  <div className={`${link.accentColor} mb-4 sm:mb-6`}>
                    <IconComponent size={48} strokeWidth={2} className="sm:w-16 sm:h-16" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-extrabold text-blue-900 mb-4 sm:mb-8">
                    {link.title}
                  </h3>

                  {/* Links */}
                  <ul className="space-y-2 sm:space-y-4 mb-6 sm:mb-8">
                    {link.links.map((item, index) => (
                      <li 
                        key={index} 
                        className="text-blue-900 font-semibold cursor-pointer hover:text-gray-900 flex items-start text-sm sm:text-base"
                      >
                        <span className="mr-2 mt-0.5 shrink-0">
                          <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Read More Button */}
                  <Link to={link.url || "#"} className="w-full bg-linear-to-r from-blue-600 to-blue-700 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center justify-center gap-2 text-sm sm:text-base">
                    Read more
                    <ArrowRight size={14} className="sm:w-4 sm:h-4" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <ImageSection1 />
      <ImageSection2 />
      <ImageSection3 />
    </div>
  )
}

export default Home