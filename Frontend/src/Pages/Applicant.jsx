import React, { useState } from 'react'
import { ChevronRight, CheckCircle, MapPin, Calendar, Users, Award, FileText, Eye, EyeOff } from 'lucide-react'

const Applicant = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const stats = [
    { label: 'Students enrolled', value: 'Official data', icon: Users },
    { label: 'Study directions', value: 'Official data', icon: CheckCircle },
    { label: 'Scholarship recipients', value: 'Official data', icon: Award },
    { label: 'Programs offered', value: 'Official data', icon: FileText }
  ]

  const requirements = [
    {
      title: 'Secondary Education Certificate',
      description: 'Valid secondary education certificate or equivalent qualification'
    },
    {
      title: 'Age Requirement',
      description: 'Applicants must meet the age requirements established by the admission rules'
    },
    {
      title: 'Language Proficiency',
      description: 'Adequate command of the Russian language for program instruction'
    },
    {
      title: 'Medical Certificate',
      description: 'Medical clearance when required by the selected program'
    },
    {
      title: 'Entrance Examination',
      description: 'Successful completion of the relevant entrance examinations'
    },
    {
      title: 'Documentation',
      description: 'Submission of all required official documents and records'
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit application',
      description: 'Complete the admission application form with personal and academic details'
    },
    {
      step: 2,
      title: 'Upload documents',
      description: 'Provide scanned copies of the required documents and certificates'
    },
    {
      step: 3,
      title: 'Take entrance exams',
      description: 'Participate in entrance examinations for the selected program'
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend an interview if it is required by the selected direction of study'
    },
    {
      step: 5,
      title: 'Receive decision',
      description: 'Review the admission decision published by the university'
    },
    {
      step: 6,
      title: 'Confirm enrollment',
      description: 'Complete enrollment procedures within the established deadlines'
    }
  ]

  const programs = [
    {
      category: 'Undergraduate',
      duration: 'According to federal standards',
      degrees: [
        'Bachelor programs',
        'Full-time study',
        'Part-time study',
        'Specialist programs where applicable'
      ]
    },
    {
      category: 'Master programs',
      duration: 'According to federal standards',
      degrees: [
        'Master programs',
        'Advanced academic training',
        'Research-oriented study',
        'Professional specialization'
      ]
    },
    {
      category: 'Additional education',
      duration: 'According to program documentation',
      degrees: [
        'Professional retraining',
        'Advanced training',
        'Short-term courses',
        'Skill development programs'
      ]
    }
  ]

  const scholarships = [
    {
      name: 'Academic scholarship',
      amount: 'According to university policy',
      criteria: 'Academic performance and admission results',
      deadline: 'According to official orders'
    },
    {
      name: 'Social support',
      amount: 'According to eligibility',
      criteria: 'Confirmed right to support measures',
      deadline: 'According to official orders'
    },
    {
      name: 'Targeted support',
      amount: 'According to available quotas',
      criteria: 'Target admission or partner organization support',
      deadline: 'According to official orders'
    },
    {
      name: 'Additional support',
      amount: 'Varies by program',
      criteria: 'Students meeting the university criteria',
      deadline: 'According to official orders'
    }
  ]

  const importantDates = [
    { event: 'Application period opens', date: 'According to the admission campaign' },
    { event: 'Application deadline', date: 'According to the admission schedule' },
    { event: 'Entrance examinations', date: 'According to the admission schedule' },
    { event: 'Interview for selected candidates', date: 'According to the admission schedule' },
    { event: 'Results announcement', date: 'According to the admission schedule' },
    { event: 'Enrollment deadline', date: 'According to the admission schedule' },
    { event: 'Classes begin', date: 'According to the academic calendar' }
  ]

  const faqs = [
    {
      id: 1,
      question: 'What documents are required?',
      answer: 'Applicants usually provide an identity document, education certificate, application form, photographs, and any additional documents required by the selected program.'
    },
    {
      id: 2,
      question: 'Can I apply for multiple programs?',
      answer: 'Applicants may submit applications for several study directions if this is allowed by the admission rules for the current campaign.'
    },
    {
      id: 3,
      question: 'What language are the entrance exams in?',
      answer: 'Entrance examinations are primarily conducted in Russian. Program-specific requirements are determined by the university.'
    },
    {
      id: 4,
      question: 'How are admission results published?',
      answer: 'Admission results are published in accordance with the university admission schedule and official procedures.'
    },
    {
      id: 5,
      question: 'Is support available for students?',
      answer: 'Yes, the university provides academic guidance and support services to help students during their studies.'
    },
    {
      id: 6,
      question: 'What if I do not meet all requirements?',
      answer: 'If an applicant does not meet a specific requirement, the admission office should be contacted for clarification regarding available options.'
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
            <span className="text-gray-400">Applicant information</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-6">Applicant information</h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto">
            Review admission requirements, application steps, and program information for Ingush State University.
          </p>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition">
                  <div className="bg-linear-to-br from-blue-600 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-gray-600 font-semibold">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Application Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationSteps.map((item) => (
              <div key={item.step} className="bg-white rounded-lg shadow-lg border-l-4 border-blue-600 p-8 hover:shadow-xl transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-linear-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Admission Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600 hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-blue-600 shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{req.title}</h3>
                    <p className="text-gray-600">{req.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Program Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((prog, index) => (
              <div key={index} className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg shadow-lg p-8 border border-blue-200 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-blue-700 mb-2">{prog.category}</h3>
                <p className="text-gray-600 font-semibold mb-6">Duration: {prog.duration}</p>
                <div className="space-y-3">
                  {prog.degrees.map((degree, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      {degree}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section id="scholarships" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Available Support</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {scholarships.map((scholarship, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-600 hover:shadow-xl transition">
                <h3 className="text-2xl font-bold text-blue-700 mb-4">{scholarship.name}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-800">Award Amount:</p>
                    <p className="text-gray-600">{scholarship.amount}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Eligibility:</p>
                    <p className="text-gray-600">{scholarship.criteria}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Deadline:</p>
                    <p className="text-blue-600 font-semibold">{scholarship.deadline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="dates" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Important Dates</h2>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {importantDates.map((item, index) => (
                <div key={index} className="flex items-center gap-6 bg-white rounded-lg shadow p-6 border-l-4 border-blue-600">
                  <Calendar size={32} className="text-blue-600 shrink-0" />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-800">{item.event}</h3>
                  </div>
                  <p className="text-blue-600 font-bold whitespace-nowrap">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faqs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-lg border border-blue-200 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-8 py-6 hover:bg-blue-50 transition text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-bold text-gray-800">{faq.question}</h3>
                  <span className={`text-blue-600 transition-transform ${expandedFaq === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                
                {expandedFaq === faq.id && (
                  <div className="bg-blue-50 px-8 py-6 border-t border-blue-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & CTA Section */}
      <section className="py-16 bg-linear-to-r from-blue-900 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-6">Ready to apply?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Have questions? The admissions team can help with programs, requirements, and enrollment steps.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <MapPin size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Visit Campus</p>
              <p className="text-blue-100 text-sm">Millionschikova Street, Dom13K1<br/>Moscow, Russia</p>
            </div>
            <div className="text-white">
              <Calendar size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Office Hours</p>
              <p className="text-blue-100 text-sm">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 10:00 AM - 2:00 PM</p>
            </div>
            <div className="text-white">
              <FileText size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Contact</p>
              <p className="text-blue-100 text-sm">
                <a href="mailto:info@unefly.com" className="hover:text-white transition">info@unefly.com</a><br/>
                <a href="tel:+79253490320" className="hover:text-white transition">+7 (925) 349-03-20</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition">
              Start Application
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-3 px-8 rounded-lg transition">
              Schedule Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Applicant