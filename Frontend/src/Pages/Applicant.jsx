import React, { useState } from 'react'
import { ChevronRight, CheckCircle, MapPin, Calendar, Users, Award, FileText, Eye, EyeOff } from 'lucide-react'

const Applicant = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const stats = [
    { label: 'Students Enrolled', value: '5,000+', icon: Users },
    { label: 'Admission Rate', value: '45%', icon: CheckCircle },
    { label: 'Scholarship Recipients', value: '800+', icon: Award },
    { label: 'Programs Offered', value: '50+', icon: FileText }
  ]

  const requirements = [
    {
      title: 'Secondary Education Certificate',
      description: 'Valid high school diploma or equivalent qualification'
    },
    {
      title: 'Age Requirement',
      description: 'Minimum 17 years old at the time of admission'
    },
    {
      title: 'Language Proficiency',
      description: 'Adequate command of Russian language for program delivery'
    },
    {
      title: 'Medical Certificate',
      description: 'Health clearance from authorized medical institution'
    },
    {
      title: 'Entrance Examination',
      description: 'Successful completion of subject-specific entrance tests'
    },
    {
      title: 'Documentation',
      description: 'Complete all required official documents and transcripts'
    }
  ]

  const applicationSteps = [
    {
      step: 1,
      title: 'Submit Application',
      description: 'Fill out the online application form with your personal and academic information'
    },
    {
      step: 2,
      title: 'Upload Documents',
      description: 'Submit scanned copies of required documents (diploma, certificates, ID)'
    },
    {
      step: 3,
      title: 'Take Entrance Exam',
      description: 'Participate in online or on-campus entrance examinations'
    },
    {
      step: 4,
      title: 'Interview',
      description: 'Attend mandatory interview with faculty representatives'
    },
    {
      step: 5,
      title: 'Receive Admission Decision',
      description: 'Get your acceptance or rejection decision within 2-3 weeks'
    },
    {
      step: 6,
      title: 'Confirm Enrollment',
      description: 'Complete enrollment procedures and pay registration fee'
    }
  ]

  const programs = [
    {
      category: 'Undergraduate',
      duration: '4 Years',
      degrees: [
        'Bachelor of Science',
        'Bachelor of Arts',
        'Bachelor of Engineering',
        'Bachelor of Business Administration'
      ]
    },
    {
      category: 'Postgraduate',
      duration: '2 Years',
      degrees: [
        'Master of Science',
        'Master of Arts',
        'Master of Engineering',
        'Master of Business Administration'
      ]
    },
    {
      category: 'Professional Certificates',
      duration: '6-12 Months',
      degrees: [
        'Advanced Professional Certifications',
        'Specialized Skill Development',
        'Industry-Focused Training',
        'Language Proficiency Programs'
      ]
    }
  ]

  const scholarships = [
    {
      name: 'Merit-Based Scholarship',
      amount: 'Up to 100% tuition',
      criteria: 'Academic excellence and entrance exam performance',
      deadline: 'Rolling applications'
    },
    {
      name: 'Need-Based Assistance',
      amount: 'Up to 75% tuition',
      criteria: 'Demonstrated financial need with strong academics',
      deadline: 'Before enrollment'
    },
    {
      name: 'Sports Scholarship',
      amount: 'Up to 80% tuition',
      criteria: 'Exceptional athletic achievement',
      deadline: 'February 28, 2026'
    },
    {
      name: 'Regional Development Grant',
      amount: 'Up to 60% tuition',
      criteria: 'Students from underserved regions',
      deadline: 'March 31, 2026'
    }
  ]

  const importantDates = [
    { event: 'Application Period Opens', date: 'January 1, 2026' },
    { event: 'Application Deadline', date: 'March 31, 2026' },
    { event: 'Entrance Examinations', date: 'April 15-30, 2026' },
    { event: 'Interview (Selected Candidates)', date: 'May 1-15, 2026' },
    { event: 'Results Announcement', date: 'May 25, 2026' },
    { event: 'Enrollment Deadline', date: 'June 15, 2026' },
    { event: 'Classes Begin', date: 'September 1, 2026' }
  ]

  const faqs = [
    {
      id: 1,
      question: 'What is the application fee?',
      answer: 'The application fee is ₹2,500 (approximately $30 USD) and is non-refundable. This covers the cost of processing your application and conducting entrance examinations.'
    },
    {
      id: 2,
      question: 'Can I apply for multiple programs?',
      answer: 'Yes, applicants can apply for up to 3 different programs by paying the application fee separately for each. However, applicants must take entrance exams for each program. You can prioritize your choices.'
    },
    {
      id: 3,
      question: 'Are entrance exams conducted in English?',
      answer: 'Entrance exams are primarily in Russian language. However, we offer support and some programs may have English-medium options. Please check with your specific program for details.'
    },
    {
      id: 4,
      question: 'What is the average acceptance rate?',
      answer: 'Our average acceptance rate is around 45% across all programs. However, this varies by program - competitive programs like Medicine have lower acceptance rates (25-30%), while other programs may have higher acceptance rates.'
    },
    {
      id: 5,
      question: 'Do you offer scholarships to international students?',
      answer: 'Yes, we offer merit-based and need-based scholarships to both domestic and international students. International students are also eligible for regional development grants and specific international student scholarships.'
    },
    {
      id: 6,
      question: 'What if I don\'t meet all requirements?',
      answer: 'If you are a strong candidate in some areas but lack certain qualifications, you may be eligible for provisional admission or foundation programs. Please contact our admissions office for individual consideration.'
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
            <span className="text-gray-400">For Applicants</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-linear-to-r from-blue-900 to-blue-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-6">Welcome Future Students</h1>
          <p className="text-blue-100 text-xl max-w-3xl mx-auto">
            Join thousands of successful students at Ingush State University. Discover programs, requirements, and start your academic journey today.
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Available Scholarships</h2>
          
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 text-center mb-8 sm:mb-16">Important Dates 2026</h2>
          
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-3 sm:mb-6">Ready to Apply?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Have questions? Our admissions team is ready to help you with any inquiries about programs, requirements, or scholarships.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-white">
              <MapPin size={32} className="mx-auto mb-3" />
              <p className="font-semibold mb-1">Visit Campus</p>
              <p className="text-blue-100 text-sm">Millionschikova Street, Dom13K1<br/>Moscow - Russia</p>
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