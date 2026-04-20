import React from 'react'
import { Link } from 'react-router'

const TestCenter = () => {
  return (
    <div className="min-h-screen bg-[#efefef] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-500 mb-5 sm:mb-8">
          <Link to="/" className="hover:text-gray-700 transition-colors">Ingush State University</Link>
          <span className="text-gray-400">&gt;</span>
          <span>Testing center</span>
        </div>

        <section className="bg-[#efefef] border border-gray-300 border-t-blue-500 rounded-md px-5 sm:px-10 lg:px-20 py-8 sm:py-12 lg:py-14">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-black leading-tight">
            Testing Center for Russian as a Foreign Language
          </h1>

          <div className="mt-14 sm:mt-20 lg:mt-24 max-w-6xl text-black font-serif text-lg sm:text-xl leading-relaxed">
            <p className="font-semibold mb-1">Contact information:</p>
            <p>Millionschikova Street, Dom13K1, Moscow, Russia.</p>

            <p className="mt-10 sm:mt-12">
              <span className="font-semibold">Phone:</span>{' '}
              <a href="tel:+79253490320" className="hover:underline">+7 (925) 349-03-20</a>
            </p>

            <p className="mt-8">
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:info@unefly.com" className="text-blue-700 hover:text-blue-800 underline">
                info@unefly.com
              </a>
            </p>

            <div className="mt-8">
              <p className="font-semibold">Opening Hours</p>
              <p className="mt-6">Mon.-Fri.: from 08:00 to 18:00</p>
              <p className="mt-4">Sat.: from 10:00 to 14:00</p>
              <p className="mt-4">Sun.: Closed</p>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 lg:mt-24 font-serif text-lg sm:text-xl text-black leading-relaxed max-w-6xl">
            <p>Head of the Center</p>
            <p className="font-semibold mt-3">Admissions Office, Ingush State University</p>

            <h2 className="font-semibold mt-16 sm:mt-20">General information</h2>
            <p className="mt-5">
              The Testing Center operates as part of Ingush State University and organizes
              examinations for applicants and candidates in Russian as a foreign language.
            </p>
            <p className="mt-6">
              The Center supports registration, consultation, and exam administration in line
              with the university&apos;s current admission and educational policies.
            </p>

            <div className="mt-10 space-y-4">
              <Link to="/about-us" className="block text-blue-700 font-semibold hover:text-blue-800 underline">
                More information
              </Link>
              <Link to="/test-center/exam-schedule" className="block text-blue-700 font-semibold hover:text-blue-800 underline">
                Exam schedule
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default TestCenter