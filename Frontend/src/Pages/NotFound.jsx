import React from 'react'
import { Home, Search, ArrowRight, Phone, Mail } from 'lucide-react'
import { Link } from 'react-router'

const NotFound = () => {

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main 404 Section */}
      <section className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600 mb-4">
              404
            </h1>
          </div>

          {/* Error Message */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Page Not Found
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Sorry! The page you're looking for doesn't exist. It might have been moved or deleted. Let us help you find what you need.
          </p>
        </div>
      </section>
    </div>
  )
}

export default NotFound