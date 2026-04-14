import React from 'react'
import { Award, Users, BookOpen, Globe, Target, Zap } from 'lucide-react'

const AboutUs = () => {
  const stats = [
    { icon: Users, label: 'Students', value: '5,000+' },
    { icon: BookOpen, label: 'Programs', value: '50+' },
    { icon: Award, label: 'Faculty Members', value: '300+' },
    { icon: Globe, label: 'International Partners', value: '25+' }
  ]

  const achievements = [
    {
      title: 'Accredited University',
      description: 'Recognized by international education bodies with highest accreditation status.'
    },
    {
      title: 'Modern Facilities',
      description: 'State-of-the-art laboratories, libraries, and research centers.'
    },
    {
      title: 'Expert Faculty',
      description: 'Experienced professionals with advanced degrees from leading institutions.'
    },
    {
      title: 'Global Network',
      description: 'Strong connections with universities and organizations worldwide.'
    }
  ]

  const timeline = [
    { year: '1994', event: 'University Founded', description: 'Establishment of Ingush State University' },
    { year: '2000', event: 'Expansion', description: 'Opened new faculties and research centers' },
    { year: '2010', event: 'Accreditation', description: 'Received international accreditation' },
    { year: '2020', event: 'Modernization', description: 'Digital transformation and new campus facilities' },
    { year: '2026', event: 'Excellence', description: 'Leading educational institution in the region' }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-gray-900 to-gray-700 py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-6">About Ingush State University</h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto">
            A premier institution of higher education dedicated to excellence, innovation, and transforming lives through quality education and research.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-8 sm:py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center bg-white rounded-lg shadow-lg p-4 sm:p-8 hover:shadow-xl transition">
                  <div className="bg-linear-to-br from-blue-600 to-blue-700 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-4">
                    <IconComponent size={20} className="sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-semibold text-xs sm:text-sm">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* University Overview */}
      <section id='history' className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-8">Our Story</h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                Ingush State University was founded in 1994 with a vision to provide world-class education and foster intellectual growth. Over the past three decades, we have established ourselves as a leading educational institution in the region.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our commitment to academic excellence, research innovation, and student development has earned us recognition both nationally and internationally. We continue to evolve and adapt to meet the needs of modern education.
              </p>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                With state-of-the-art facilities, experienced faculty, and a diverse student body, we create an environment where knowledge flourishes and transformative learning occurs.
              </p>
            </div>

            {/* Right Image Placeholder */}
            <div className="bg-linear-to-br from-blue-100 to-blue-50 rounded-lg overflow-clip shadow-lg h-48 sm:h-96 flex items-center justify-center">
              <img className='w-full h-full object-cover' src="https://future-mbbs.com/wp-content/uploads/2025/09/Copy-of-Untitled.png.webp" alt="university campus" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id='mission' className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Our Mission & Vision</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {/* Mission */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 border-t-4 border-blue-600">
              <Target size={32} className="sm:w-10 sm:h-10 text-blue-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To provide accessible, high-quality education that develops knowledgeable, skilled, and ethical professionals prepared to contribute meaningfully to society.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 border-t-4 border-indigo-600">
              <Zap size={32} className="sm:w-10 sm:h-10 text-indigo-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be a globally recognized center of excellence in education and research, fostering innovation and promoting sustainable development.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8 border-t-4 border-purple-600">
              <Award size={32} className="sm:w-10 sm:h-10 text-purple-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">Core Values</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                Excellence, Integrity, Inclusivity, Innovation, and Accountability guide our commitment to transforming lives through education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Why Choose Ingush State University?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-start gap-6">
                  <div className="bg-linear-to-br from-blue-600 to-blue-700 w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-sm sm:text-lg">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{achievement.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Our Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-600 to-purple-600"></div>

            {/* Timeline items */}
            <div className="space-y-8 lg:space-y-0">
              {timeline.map((item, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className={`bg-white rounded-lg shadow-lg p-8 ${index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'} lg:max-w-sm`}>
                      <p className="text-blue-600 font-bold text-lg mb-2">{item.year}</p>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-linear-to-br from-blue-600 to-purple-600 shrink-0 mx-auto mb-4 lg:mb-0 z-1">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Empty space for layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id='accreditions' className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Accreditations & Recognition</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'National Accreditation', status: 'Approved' },
              { name: 'International Quality Standards', status: 'ISO 9001:2015' },
              { name: 'Regional Education Council', status: 'Certified' }
            ].map((accred, index) => (
              <div key={index} className="text-center bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8">
                <Award size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">{accred.name}</h3>
                <p className="text-blue-600 font-semibold">{accred.status}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs