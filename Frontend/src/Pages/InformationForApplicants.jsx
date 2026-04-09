import React from 'react'
import { ChevronRight, FileText, Users, Calendar, Mail, Download, AlertCircle } from 'lucide-react'

const InformationForApplicants = () => {
  const informationItems = [
    {
      id: 1,
      title: 'Algorithm for entry of foreign students into the Russian Federation',
      description: 'Step-by-step guide for international students on the admission process and requirements for studying in Russia.',
      icon: Users,
      link: '#'
    },
    {
      id: 2,
      title: 'Class schedule',
      description: 'View the academic calendar, semester schedules, and class timings for all programs and faculties.',
      icon: Calendar,
      link: '#'
    },
    {
      id: 3,
      title: 'List of email addresses of faculties and departments of IngSU',
      description: 'Complete contact directory of all faculty departments for inquiries and correspondence.',
      icon: Mail,
      link: '#'
    },
    {
      id: 4,
      title: 'Regulatory documents of IngSU',
      description: 'Official institutional documents, regulations, and policies governing university operations.',
      icon: FileText,
      link: '#'
    },
    {
      id: 5,
      title: 'Vacancies for transfer',
      description: 'Available positions for internal transfers within the university for eligible students.',
      icon: AlertCircle,
      link: '#'
    },
    {
      id: 6,
      title: 'Citizens\' appeal form',
      description: 'Official form for submitting appeals, complaints, or suggestions to the university administration.',
      icon: Download,
      link: '#'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">Ingush State University</a>
            <ChevronRight size={18} className="text-gray-400" />
            <span className="text-gray-400">Useful information</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-12 font-serif">Useful information</h1>

        {/* Information Items */}
        <div className="space-y-6">
          {informationItems.map((item) => {
            const IconComponent = item.icon
            return (
              <a
                key={item.id}
                href={item.link}
                className="group block"
              >
                <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg hover:border-blue-300 transition flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-blue-100 group-hover:bg-blue-200 transition">
                      <IconComponent size={24} className="text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-blue-600 group-hover:text-blue-700 transition mb-2">
                      {item.title}
                    </h2>
                    <p className="text-gray-600 text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <ChevronRight size={24} className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition" />
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-16 bg-blue-50 border-l-4 border-blue-600 rounded p-6">
          <h3 className="text-lg font-bold text-gray-800 mb-3">Important Notes</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>All documents are available in Russian and English upon request</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>For specific inquiries, contact the respective faculty office directly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>Updates to schedules and documents are posted regularly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold mt-1">•</span>
              <span>For technical issues, contact the IT support center</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <Mail size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Contact Support</h3>
            <p className="text-gray-600 text-sm mb-4">
              Need help finding information? Contact the admissions office.
            </p>
            <a href="mailto:info@unefly.com" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              info@unefly.com →
            </a>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <FileText size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Download Documents</h3>
            <p className="text-gray-600 text-sm mb-4">
              Access and download all important university documents and forms.
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View Downloads →
            </button>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
            <Users size={32} className="text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Faculty Directory</h3>
            <p className="text-gray-600 text-sm mb-4">
              Find contact information for all departments and faculties.
            </p>
            <a href="/structure" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
              View Structure →
            </a>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-linear-to-r from-blue-900 to-blue-700 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Our support team is available to assist you with any information you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact-us"
              className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition"
            >
              Contact Us
            </a>
            <a
              href="/applicant"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-lg transition"
            >
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InformationForApplicants