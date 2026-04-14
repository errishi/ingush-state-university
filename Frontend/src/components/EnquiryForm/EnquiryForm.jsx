import React, { useContext, useEffect, useState } from 'react'
import { CalendarDays, Building2, Mail, MessageSquare, Phone, Send, ShieldCheck, User, X } from 'lucide-react'
import { AppContext } from '../../Context'
import { toast } from 'react-toastify'

const EnquiryForm = () => {
  const { setPopUpForm, setHasInteractedWithPopup } = useContext(AppContext)
  const [isVisible, setIsVisible] = useState(true)
  const [preferredContact, setPreferredContact] = useState('email')
  const [submitStatus, setSubmitStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    programme: '',
    enquiryType: '',
    message: ''
  })

  useEffect(() => {
    if (!isVisible) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isVisible])

  const handleInputChange = (event) => {
    setHasInteractedWithPopup(true)
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleClose = () => {
    setIsVisible(false)
    setPopUpForm(false)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setHasInteractedWithPopup(true)
    setSubmitStatus('sending')
    const submittedFormData = new FormData(event.target)
    submittedFormData.append('access_key', '2ff39fc3-6924-40e1-8f6a-e4d51385ccbb')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: submittedFormData
    })

    const data = await response.json()
    if (data.success) {
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        programme: '',
        enquiryType: '',
        message: ''
      })
      setPreferredContact('email')
      setPopUpForm(false)
      toast.success('Your enquiry has been submitted successfully!')
    } else {
      setSubmitStatus('error')
      setPopUpForm(false)
      toast.error('Failed to submit enquiry. Please try again.')
    }
  }

  if (!isVisible) {
    return null
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto overflow-x-hidden bg-slate-950/55 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-4 sm:py-6">
      <div className="relative my-auto flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl min-w-0 flex-col overflow-y-auto overflow-x-hidden rounded-2xl bg-white shadow-[0_30px_80px_rgba(15,23,42,0.35)] ring-1 ring-black/5 sm:rounded-3xl sm:max-h-[calc(100dvh-3rem)] enquiry-modal-scrollbar">
        <div className="absolute right-0 top-0 h-56 w-56 -translate-y-1/3 translate-x-1/3 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 -translate-x-1/3 translate-y-1/3 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="relative">
          <button
            type="button"
            onClick={handleClose}
            className="flex lg:h-10 lg:w-10 md:h-10 md:w-10 h-8 w-8 absolute lg:right-4 lg:top-4 md:right-5 md:top-5 right-3 top-3 z-50 items-center cursor-pointer justify-center rounded-full border border-slate-300 text-slate-500 transition hover:border-slate-400 hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close enquiry form"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid min-h-auto flex-1 grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <section className="relative hidden lg:block min-w-0 overflow-hidden bg-linear-to-br from-blue-950 via-blue-900 to-slate-900 px-5 py-7 text-white sm:px-8 sm:py-10 lg:min-h-0">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.28) 1px, transparent 0)',
                backgroundSize: '24px 24px'
              }}
            />
            <div className="relative z-10 flex h-full min-w-0 flex-col justify-between gap-8">
              <div>
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-yellow-300">
                  Fast response within 24 hours
                </span>
                <h3 className="mt-5 max-w-md wrap-break-word text-3xl font-extrabold leading-tight sm:text-4xl">
                  Start your enquiry with a clear next step.
                </h3>
                <p className="mt-4 max-w-lg wrap-break-word text-sm leading-6 text-blue-100 sm:text-base">
                  Share your details and we will connect you with the right admissions team, programme guide, or campus support specialist.
                </p>
              </div>

              <div className="grid min-w-0 gap-3 sm:grid-cols-2">
                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
                    <Mail size={18} />
                  </div>
                  <p className="text-sm font-semibold text-white">Admissions Email</p>
                  <p className="mt-1 text-sm text-blue-100">info@unefly.com</p>
                </div>

                <div className="min-w-0 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400 text-blue-950">
                    <Phone size={18} />
                  </div>
                  <p className="text-sm font-semibold text-white">Call Support</p>
                  <p className="mt-1 text-sm text-blue-100">+7 (925) 349-03-20</p>
                </div>
              </div>

              <div className="grid min-w-0 gap-3 rounded-2xl border border-white/10 bg-slate-950/30 p-4 sm:grid-cols-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Guidance</p>
                  <p className="mt-1 text-sm font-semibold text-white">Admissions, programme, and document support</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Campus</p>
                  <p className="mt-1 text-sm font-semibold text-white">Dedicated help for applicants and parents</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-blue-200">Privacy</p>
                  <p className="mt-1 text-sm font-semibold text-white">Your enquiry is handled confidentially</p>
                </div>
              </div>
            </div>
          </section>

          <section className="min-w-0 min-h-0 bg-slate-50 px-5 py-6 sm:px-8 sm:py-8 lg:min-h-0">
            <div className="mb-6">
              <h3 className="text-2xl font-extrabold text-slate-900">Request Information</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Fill in the details below and our team will get back to you with the most relevant information.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <User size={16} className="text-blue-700" />
                    Full Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </label>

                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Mail size={16} className="text-blue-700" />
                    Email Address
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="name@example.com"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    required
                  />
                </label>
              </div>

              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Phone size={16} className="text-blue-700" />
                    Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />
                </label>

                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <Building2 size={16} className="text-blue-700" />
                    Programme of Interest
                  </span>
                  <input
                    type="text"
                    name="programme"
                    value={formData.programme}
                    onChange={handleInputChange}
                    placeholder="e.g. Medicine, Engineering, Economics"
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  />
                </label>
              </div>

              <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <CalendarDays size={16} className="text-blue-700" />
                    Enquiry Type
                  </span>
                  <select
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleInputChange}
                    className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select an enquiry type</option>
                    <option value="admissions">Admissions</option>
                    <option value="documents">Documents</option>
                    <option value="fees and scholarships">Fees and scholarships</option>
                    <option value="campus visit">Campus visit</option>
                  </select>
                </label>

                <label className="block min-w-0">
                  <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <ShieldCheck size={16} className="text-blue-700" />
                    Preferred Contact Method
                  </span>
                  <div className="flex min-w-0 gap-2 rounded-2xl border border-slate-300 bg-white px-3 py-1 text-sm text-slate-600">
                    <label className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl px-3 py-2 transition ${preferredContact === 'email' ? 'bg-blue-50 text-blue-800 ring-1 ring-blue-200' : 'text-slate-700 hover:bg-slate-50'}`}>
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={preferredContact === 'email'}
                        onChange={(e) => {
                          setHasInteractedWithPopup(true)
                          setPreferredContact(e.target.value)
                        }}
                        className="sr-only"
                      />
                      Email
                    </label>
                    <label className={`flex flex-1 cursor-pointer items-center justify-center rounded-xl px-3 py-2 transition ${preferredContact === 'phone' ? 'bg-blue-50 text-blue-800 ring-1 ring-blue-200' : 'text-slate-700 hover:bg-slate-50'}`}>
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={preferredContact === 'phone'}
                        onChange={(e) => {
                          setHasInteractedWithPopup(true)
                          setPreferredContact(e.target.value)
                        }}
                        className="sr-only"
                      />
                      Phone
                    </label>
                  </div>
                </label>
              </div>

              <label className="block">
                <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <MessageSquare size={16} className="text-blue-700" />
                  Message
                </span>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  placeholder="Tell us how we can help you..."
                  className="w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                  required
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  className="inline-flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-800 to-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition hover:from-blue-900 hover:to-blue-700"
                >
                  <Send size={18} />
                  {submitStatus === 'sending' ? 'Sending Email...' : 'Submit Enquiry'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                  Enquiry submitted successfully.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                  Something went wrong. Please try again.
                </div>
              )}

              <p className="text-xs leading-5 text-slate-500">
                By submitting this form, you agree to be contacted by Ingush State University regarding your enquiry.
              </p>
            </form>
          </section>
        </div>
      </div>

      <style>{`
        .enquiry-modal-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .enquiry-modal-scrollbar::-webkit-scrollbar {
          width: 0;
          height: 0;
          display: none;
        }
      `}</style>
    </div>
  )
}

export default EnquiryForm