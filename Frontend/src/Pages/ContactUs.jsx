import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, Clock } from 'lucide-react'
import { toast } from 'react-toastify'

const ContactUs = () => {
  const [result, setResult] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "4c311795-a1eb-43fd-a134-3374c3130a1a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      event.target.reset();
      toast.success('Your enquiry has been submitted successfully!')
    } else {
      setResult("Error");
      toast.error('Failed to submit enquiry. Please try again.')
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: 'Millionschikova Street, Dom13K1, Moscow, Russia',
      bgColor: 'from-blue-600 to-blue-700'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: '+7 (925) 349-03-20',
      bgColor: 'from-indigo-600 to-indigo-700'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: 'info@unefly.com',
      bgColor: 'from-purple-600 to-purple-700'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM',
      bgColor: 'from-green-600 to-green-700'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-gray-900 to-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 sm:mb-4">Contact Us</h1>
          <p className="text-gray-300 text-xl">Contact the university team for admissions, study programs, and general information.</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                  {/* Header */}
                  <div className={`bg-linear-to-r ${info.bgColor} p-6 flex items-center justify-center`}>
                    <IconComponent size={40} className="text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">{info.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                      {info.details}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Send an enquiry</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (999) 999-99-99"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    required
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject of your enquiry"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Please describe your enquiry"
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition resize-none"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-linear-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Submit Enquiry
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div>
              {/* Quick Info Box */}
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-l-4 border-blue-600 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Additional information</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Response Time</h4>
                    <p className="text-gray-600">Enquiries are usually processed within one business day.</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Departments</h4>
                    <ul className="text-gray-600 space-y-2 text-sm">
                      <li>• Admissions office: info@unefly.com</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Follow Us</h4>
                    <div className="flex gap-4">
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition">Facebook</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition">Twitter</a>
                      <a href="#" className="text-blue-600 hover:text-blue-700 transition">Instagram</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {[
              {
                q: 'What are your working hours?',
                a: 'We are open Monday to Friday from 8:00 AM to 6:00 PM, and Saturday from 10:00 AM to 2:00 PM.'
              },
              {
                q: 'How do I apply for admission?',
                a: 'Application steps and requirements are available on the applicant page and through the admissions office.'
              },
              {
                q: 'What scholarships are available?',
                a: 'Scholarship and support options are published according to university policy. Contact the admissions office for details.'
              },
              {
                q: 'Can I visit the campus?',
                a: 'Yes. Please contact the university in advance to coordinate a visit.'
              }
            ].map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow hover:shadow-lg transition cursor-pointer">
                <summary className="px-6 py-4 font-semibold text-gray-800 flex items-center justify-between">
                  {faq.q}
                  <span className="text-blue-600">+</span>
                </summary>
                <div className="px-6 py-4 border-t border-gray-200 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs