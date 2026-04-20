import React from 'react'
import { ChevronRight, BookOpen, Users, Calendar, Award, ClipboardList, Accessibility, GraduationCap } from 'lucide-react'
import { Link } from 'react-router'

const EducationalActivity = () => {
  const educationalPrograms = [
    {
      id: 1,
      title: 'Continuing education',
      description: 'Short courses and professional development opportunities for specialists, employees, and graduates seeking additional qualifications.',
      icon: Award,
      sections: ['Professional retraining', 'Advanced training', 'Certification programs']
    },
    {
      id: 2,
      title: 'Inclusive education',
      description: 'Support and academic accommodations for students with disabilities and special educational needs.',
      icon: Accessibility,
      sections: ['Support services', 'Accessibility', 'Individual accommodations']
    }
  ]

  const schedules = [
    {
      id: 1,
      title: 'Schedule of the educational process',
      description: 'Academic calendar for semesters, holidays, exam periods, and major institutional deadlines.',
      icon: Calendar,
      link: '#'
    },
    {
      id: 2,
      title: 'Schedule of classes',
      description: 'Class timetables for faculties and study groups, updated according to the academic schedule.',
      icon: ClipboardList,
      link: '#'
    },
    {
      id: 3,
      title: 'Exam schedule',
      description: 'Examination dates and times for academic programs at all study levels.',
      icon: BookOpen,
      link: '#'
    }
  ]

  const activities = [
    {
      category: 'Academic Programs',
      items: [
        { name: 'Bachelor programs', hours: 'According to educational standards' },
        { name: 'Master programs', hours: 'According to educational standards' },
        { name: 'Postgraduate studies', hours: 'According to educational standards' }
      ]
    },
    {
      category: 'Student Activities',
      items: [
        { name: 'Seminars and workshops', hours: 'According to approved plans' },
        { name: 'Research projects', hours: 'According to approved plans' },
        { name: 'Cultural events', hours: 'According to approved plans' }
      ]
    },
    {
      category: 'Support Services',
      items: [
        { name: 'Academic counseling', hours: 'According to service schedule' },
        { name: 'Career guidance', hours: 'According to service schedule' },
        { name: 'Student support services', hours: 'According to service schedule' }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">Ingush State University</Link>
            <ChevronRight size={18} className="text-gray-400" />
            <span className="text-gray-400">Educational activities</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 sm:mb-16 font-serif">Educational activities</h1>

        {/* Educational Programs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Key Educational Programs</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {educationalPrograms.map((program) => {
              const IconComponent = program.icon
              return (
                <div
                  key={program.id}
                  className="bg-white border-l-4 border-blue-600 rounded-lg shadow-lg p-8 hover:shadow-xl transition"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-blue-700">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6">
                    {program.description}
                  </p>

                  <div className="space-y-3">
                    {program.sections.map((section, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-gray-700">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        {section}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Academic Schedules Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Academic Schedules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {schedules.map((schedule) => {
              const IconComponent = schedule.icon
              return (
                <Link
                  key={schedule.id}
                  to={schedule.link}
                  className="group block"
                >
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-blue-600 hover:shadow-lg transition h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition">
                        <IconComponent size={24} className="text-blue-600" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-700 group-hover:text-blue-800 mb-3 flex-1">
                      {schedule.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm">
                      {schedule.description}
                    </p>

                    <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition">
                      <span>Open</span>
                      <ChevronRight size={18} className="ml-2" />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Educational Activities Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-700 mb-8">Educational Activities Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 border border-blue-200"
              >
                <h3 className="text-xl font-bold text-blue-700 mb-6">{activity.category}</h3>
                
                <div className="space-y-4">
                  {activity.items.map((item, idx) => (
                    <div key={idx} className="bg-white rounded p-4 shadow-sm">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-blue-600">{item.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Assurance Section */}
        <div className="mb-16 bg-white border-l-4 border-blue-600 rounded-lg p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Educational Quality Assurance</h2>
          
          <p className="text-gray-600 mb-6">
            Ingush State University maintains standards for educational activities through:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Curriculum review</h4>
                <p className="text-gray-600 text-sm">Ongoing evaluation and updating of course content and teaching methods</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Faculty development</h4>
                <p className="text-gray-600 text-sm">Professional development and training for instructors</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Student assessment</h4>
                <p className="text-gray-600 text-sm">Assessment methods used to evaluate learning outcomes</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 shrink-0">
                <span className="text-blue-600 font-bold">✓</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">Institutional compliance</h4>
                <p className="text-gray-600 text-sm">Compliance with applicable national education standards</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <BookOpen size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Learning Resources</h3>
            <p className="text-gray-600 text-sm mb-4">
              Access the university's learning materials and reference resources.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Access Resources →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <Users size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Student Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              Get help from academic advisors and support services.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              Contact Support →
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition">
            <GraduationCap size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Academic Calendar</h3>
            <p className="text-gray-600 text-sm mb-4">
              View important dates and academic deadlines.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View Calendar →
            </button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-blue-900 to-blue-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Questions about our educational programs?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our educational advisors are ready to help you understand university programs and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
            >
              Contact Us
            </Link>
            <Link
              to="/applicant"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-lg transition"
            >
              Apply Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationalActivity