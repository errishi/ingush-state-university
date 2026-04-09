import React, { useState } from 'react'
import { Link } from 'react-router'
import { ChevronDown } from 'lucide-react'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)

  const topNavLinks = [
    { label: 'TESTING CENTER', href: '#' },
    { label: 'EIOS', href: '#' },
    { label: 'USEFUL INFORMATION', href: '#' },
    { label: 'EDUCATIONAL ACTIVITIES', href: '#' },
    { label: 'CONTACTS', href: '/contact-us' }
  ]

  const mainNavLinks = [
    { label: 'HOME', href: '/' },
    { label: 'NEWS', href: '/news' },
    { 
      label: 'INFORMATION ABOUT THE EDUCATIONAL ORGANIZATION', 
      href: '#',
      submenu: [
        { label: 'About University', href: '/about-us' },
        { label: 'History', href: '/about-us#history' },
        { label: 'Mission & Vision', href: '/about-us#mission' },
        { label: 'Administration', href: '#' },
        { label: 'Accreditation', href: '#' }
      ]
    },
    { 
      label: 'SCIENTIFIC ACTIVITY', 
      href: '/scientific-activity',
      submenu: [
        { label: 'Research Centers', href: '#' },
        { label: 'Publications', href: '#' },
        { label: 'Conferences', href: '#' },
        { label: 'Grants', href: '#' }
      ]
    },
    { 
      label: 'STRUCTURE', 
      href: '/structure',
      submenu: [
        { label: 'Faculties', href: '#' },
        { label: 'Departments', href: '#' },
        { label: 'Administrative Office', href: '#' },
        { label: 'Support Services', href: '#' }
      ]
    },
    { 
      label: 'TO THE APPLICANT', 
      href: '#',
      submenu: [
        { label: 'Admission Requirements', href: '#' },
        { label: 'Application Process', href: '#' },
        { label: 'Scholarships', href: '#' },
        { label: 'Programs', href: '#' }
      ]
    }
  ]

  return (
    <nav className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Search Bar */}
          <div className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white text-gray-800 rounded-sm text-sm focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg">
                🔍
              </button>
            </div>
          </div>

          {/* Top Navigation Links */}
          <div className="flex gap-6 ml-8 items-center">
            {topNavLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* University Banner */}
      <div className="bg-linear-to-r from-blue-800 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-8 flex justify-center items-center gap-8">
          {/* Logo */}
            <img src="logo.svg" className='w-45 h-45' alt="logo" />

          {/* University Info */}
          <div className="text-white text-center">
            <p className="text-sm font-light mb-2">
              Federal State Budgetary Educational Institution of Higher Education
            </p>
            <h1 className="text-3xl font-bold">
              "Ingush State University"
            </h1>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu */}
      <div className="bg-gray-900 border-t-4 border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-0">
            {mainNavLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  to={link.href}
                  onMouseEnter={() => link.submenu && setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="px-4 py-4 text-white text-sm font-semibold hover:bg-blue-600 transition whitespace-nowrap border-r border-gray-700 last:border-r-0 hover:text-yellow-300 flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div 
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute left-0 top-full w-64 bg-gray-800 shadow-lg z-50 border border-gray-700 transition-all duration-200 ${
                      openDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="py-2">
                      {link.submenu.map((item, subIndex) => (
                        <Link
                          key={subIndex}
                          to={item.href}
                          className="block px-6 py-3 text-white text-sm hover:bg-blue-600 hover:text-yellow-300 transition border-l-4 border-transparent hover:border-blue-400"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;