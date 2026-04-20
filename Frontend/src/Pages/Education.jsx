import React from 'react'
import { Link } from 'react-router'

const Education = () => {
  const educationLevels = [
    "Bachelor's degree",
    'Specialty',
    "Master's degree",
    'Postgraduate studies',
    'Residency',
    'SPO'
  ]

  const researchLevels = [
    "Bachelor's degree",
    "Master's degree",
    'Specialty',
    'Residency',
    'Postgraduate studies'
  ]

  const educationSections = [
    {
      title: 'Information on the levels of education offered, forms of education, and standard training periods',
      items: educationLevels,
      dark: true
    },
    {
      title: 'Information on professional and public accreditation of the educational program',
      items: [],
      dark: true
    },
    {
      title: 'Information on the number of students',
      items: [],
      dark: true
    },
    {
      title: 'Information on the admission results',
      items: [],
      dark: true
    },
    {
      title: 'Information on the results of transfer, restoration and deduction',
      items: [],
      dark: true
    },
    {
      title: 'Information on educational programs',
      items: [],
      dark: true
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 sm:py-6">
          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base text-[#7c7c7c]">
            <Link to="/" className="hover:text-blue-700 transition-colors">Ingush State University</Link>
            <span className="text-[#b8b8b8]">›</span>
            <span>Information about the general education organization</span>
            <span className="text-[#b8b8b8]">›</span>
            <span>Education</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-10 sm:pb-14">
        <section className="rounded-md border border-[#d7d7e3] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
          <div className="px-5 sm:px-10 lg:px-12 pt-10 sm:pt-12 lg:pt-14">
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-black leading-tight">Education</h1>

            <div className="mt-8 sm:mt-12 lg:mt-14 text-center">
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-black leading-tight">
                Information about educational programs
              </h2>
            </div>

            <div className="mt-14 sm:mt-16 lg:mt-20 space-y-6 sm:space-y-8">
              {educationSections.map((section, index) => (
                <div key={index}>
                  <div className="bg-[#09008f] text-white font-serif text-center px-4 py-3 sm:py-4 lg:py-5 leading-tight">
                    <div className="text-lg sm:text-xl lg:text-2xl">
                      {section.title}
                    </div>
                  </div>

                  {section.items.length > 0 && (
                    <div className="mt-4 sm:mt-5 space-y-4 sm:space-y-6">
                      {section.items.map((item) => (
                        <div
                          key={item}
                          className="bg-[#eaf4ff] text-[#09008f] font-serif text-center px-4 py-3 sm:py-4 lg:py-5 text-lg sm:text-xl lg:text-2xl leading-tight"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
              <div className="bg-[#09008f] text-white font-serif text-center px-4 py-3 sm:py-4 lg:py-5 leading-tight text-lg sm:text-xl lg:text-2xl">
                Information on adapted programs
              </div>

              <div className="bg-[#09008f] text-white font-serif text-center px-4 py-3 sm:py-4 lg:py-5 leading-tight text-lg sm:text-xl lg:text-2xl">
                Information on the directions and results of scientific (research) activities
              </div>

              <div className="space-y-4 sm:space-y-6">
                {researchLevels.map((item) => (
                  <div
                    key={item}
                    className="bg-[#eaf4ff] text-[#09008f] font-serif text-center px-4 py-3 sm:py-4 lg:py-5 text-lg sm:text-xl lg:text-2xl leading-tight"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <p className="text-[#183c63] text-xs sm:text-sm lg:text-base leading-relaxed">
                Archive of information on the directions and results of scientific (research) activities for 2021
              </p>

              <div className="bg-[#09008f] text-white font-serif text-center px-4 py-3 sm:py-4 lg:py-5 leading-tight text-lg sm:text-xl lg:text-2xl">
                Information on public accreditation of an educational organization
              </div>

              <div className="bg-[#09008f] text-white font-serif text-center px-4 py-3 sm:py-4 lg:py-5 leading-tight text-lg sm:text-xl lg:text-2xl">
                Information on the employment of graduates for each educational program that has graduated
              </div>
            </div>
          </div>

          <div className="h-10 sm:h-12 lg:h-16" />
        </section>
      </div>
    </div>
  )
}

export default Education