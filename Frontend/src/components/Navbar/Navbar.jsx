import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { ChevronDown, Menu, X } from 'lucide-react'

// Utility function to scroll to section
const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null)
  const location = useLocation()

  // Handle smooth scrolling when hash changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => scrollToSection(id), 100)
    }
  }, [location.hash])

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      // Navigate to search results page with query parameter
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
      setSearchQuery('')
    }
  }

  // Handle Enter key press in search input
  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch(e)
    }
  }

  const topNavLinks = [
    { label: 'TESTING CENTER', href: '#' },
    { label: 'EIOS', href: '#' },
    { label: 'USEFUL INFORMATION', href: '/information-for-applicants' },
    { label: 'EDUCATIONAL ACTIVITIES', href: '/educational-activity' },
    { label: 'CONTACTS', href: '/contact-us' }
  ]

  const mainNavLinks = [
    { label: 'HOME', href: '/' },
    { 
      label: 'INFORMATION ABOUT THE EDUCATIONAL ORGANIZATION', 
      href: '#',
      submenu: [
        { label: 'About University', href: '/about-us' },
        { label: 'History', href: '/about-us#history' },
        { label: 'Mission & Vision', href: '/about-us#mission' },
        { label: 'Administration', href: '/about-us#accreditions' },
        { label: 'Accreditation', href: '/about-us#accreditions' }
      ]
    },
    { 
      label: 'SCIENTIFIC ACTIVITY', 
      href: '/scientific-activity',
      submenu: [
        { label: 'Research Overview', href: '/scientific-activity#overview' },
        { label: 'Strategic Goals', href: '/scientific-activity#goals' },
        { label: 'Research Areas', href: '/scientific-activity#research-areas' },
        { label: 'Publications', href: '/scientific-activity#goals' }
      ]
    },
    { 
      label: 'STRUCTURE', 
      href: '/structure',
      submenu: [
        { label: 'Faculties', href: '/structure#faculties' },
        { label: 'Administrative', href: '/structure#administrative' },
        { label: 'Support Services', href: '/structure#support' }
      ]
    },
    { 
      label: 'TO THE APPLICANT', 
      href: '/applicant',
      submenu: [
        { label: 'Application Process', href: '/applicant#process' },
        { label: 'Requirements', href: '/applicant#requirements' },
        { label: 'Programs', href: '/applicant#programs' },
        { label: 'Scholarships', href: '/applicant#scholarships' }
      ]
    }
  ]

  return (
    <nav className="w-full">
      {/* Top Navigation Bar - Hidden on Mobile */}
      <div className="hidden md:block bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
          {/* Search Bar */}
          <div className="flex-1 w-full sm:w-auto sm:max-w-xs">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="w-full px-3 sm:px-4 py-2 bg-white text-gray-800 rounded-sm text-xs sm:text-sm focus:outline-none"
              />
              <button 
                type="submit"
                className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg hover:text-gray-800 transition cursor-pointer"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Top Navigation Links */}
          <div className="hidden lg:flex gap-2 lg:gap-4 xl:gap-6 items-center ml-0 lg:ml-8">
            {topNavLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('#')) {
                    e.preventDefault()
                    scrollToSection(link.href.replace('#', ''))
                  }
                }}
                className="text-yellow-400 text-xs lg:text-sm font-semibold hover:text-yellow-300 transition whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* University Banner */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-4 sm:py-8">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 sm:gap-8">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="logo.svg" className='w-12 h-12 sm:w-20 lg:w-32 sm:h-20 lg:h-32' alt="logo" />
            </Link>

            {/* University Info */}
            <div className="text-white text-center sm:text-left flex-1">
              <p className="text-xs sm:text-sm font-light mb-1 sm:mb-2">
                Federal State Budgetary Educational Institution of Higher Education
              </p>
              <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold">
                "Ingush State University"
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Menu - Desktop */}
      <div className="hidden lg:block bg-gray-900 border-t-4 border-blue-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-0">
            {mainNavLinks.map((link, index) => (
              <div key={index} className="relative group">
                <Link
                  to={link.href}
                  onMouseEnter={() => link.submenu && setOpenDropdown(index)}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="px-3 lg:px-4 py-4 text-white text-xs lg:text-sm font-semibold hover:bg-blue-600 transition whitespace-nowrap border-r border-gray-700 last:border-r-0 hover:text-yellow-300 flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={16} />}
                </Link>

                {/* Dropdown Menu */}
                {link.submenu && (
                  <div 
                    onMouseEnter={() => setOpenDropdown(index)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className={`absolute left-0 top-full w-56 lg:w-64 bg-gray-800 shadow-lg z-50 border border-gray-700 transition-all duration-200 ${
                      openDropdown === index ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                  >
                    <div className="py-2">
                      {link.submenu.map((item, subIndex) => {
                        const isAnchorLink = item.href.includes('#')
                        const handleClick = (e) => {
                          if (isAnchorLink) {
                            e.preventDefault()
                            const [path, id] = item.href.split('#')
                            if (path === '' || path === '/about-us' || location.pathname === path) {
                              scrollToSection(id)
                            } else {
                              window.location.href = item.href
                            }
                            setOpenDropdown(null)
                          }
                        }

                        return isAnchorLink ? (
                          <a
                            key={subIndex}
                            href={item.href}
                            onClick={handleClick}
                            className="block px-6 py-3 text-white text-sm hover:bg-blue-600 hover:text-yellow-300 transition border-l-4 border-transparent hover:border-blue-400 cursor-pointer"
                          >
                            {item.label}
                          </a>
                        ) : (
                          <Link
                            key={subIndex}
                            to={item.href}
                            onClick={() => setOpenDropdown(null)}
                            className="block px-6 py-3 text-white text-sm hover:bg-blue-600 hover:text-yellow-300 transition border-l-4 border-transparent hover:border-blue-400"
                          >
                            {item.label}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Button & Search - Mobile Only */}
      <div className="lg:hidden bg-gray-900 border-t-4 border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center gap-3">
          {/* Mobile Search */}
          <div className="flex-1 min-w-0">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleSearchKeyPress}
                className="w-full px-3 py-2 bg-white text-gray-800 rounded-sm text-xs focus:outline-none"
              />
              <button 
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg hover:text-gray-800 transition cursor-pointer"
              >
                🔍
              </button>
            </form>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:bg-blue-600 p-2 rounded transition flex-shrink-0"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Items */}
        {mobileMenuOpen && (
          <div className="bg-gray-800 border-t border-gray-700 max-h-96 overflow-y-auto">
            {mainNavLinks.map((link, index) => (
              <div key={index}>
                <div className="flex items-center">
                  <Link
                    to={link.href}
                    onClick={() => {
                      if (!link.submenu) {
                        setMobileMenuOpen(false)
                      }
                    }}
                    className="flex-1 px-4 py-3 text-white text-sm font-semibold hover:bg-blue-600 hover:text-yellow-300 transition"
                  >
                    {link.label}
                  </Link>
                  {link.submenu && (
                    <button
                      onClick={() => setMobileDropdownOpen(mobileDropdownOpen === index ? null : index)}
                      className="px-4 py-3 text-white hover:bg-blue-600 transition"
                    >
                      <ChevronDown 
                        size={16} 
                        className={`transition-transform ${mobileDropdownOpen === index ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {link.submenu && mobileDropdownOpen === index && (
                  <div className="bg-gray-700">
                    {link.submenu.map((item, subIndex) => {
                      const isAnchorLink = item.href.includes('#')
                      const handleClick = (e) => {
                        if (isAnchorLink) {
                          e.preventDefault()
                          const [path, id] = item.href.split('#')
                          if (path === '' || path === '/about-us' || location.pathname === path) {
                            scrollToSection(id)
                          } else {
                            window.location.href = item.href
                          }
                          setMobileMenuOpen(false)
                          setMobileDropdownOpen(null)
                        } else {
                          setMobileMenuOpen(false)
                          setMobileDropdownOpen(null)
                        }
                      }

                      return isAnchorLink ? (
                        <a
                          key={subIndex}
                          href={item.href}
                          onClick={handleClick}
                          className="block px-6 py-2 text-white text-sm hover:bg-blue-600 hover:text-yellow-300 transition border-l-4 border-transparent hover:border-blue-400"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          key={subIndex}
                          to={item.href}
                          onClick={handleClick}
                          className="block px-6 py-2 text-white text-sm hover:bg-blue-600 hover:text-yellow-300 transition border-l-4 border-transparent hover:border-blue-400"
                        >
                          {item.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Top Nav Links */}
            <div className="border-t border-gray-700 py-2">
              {topNavLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault()
                      scrollToSection(link.href.replace('#', ''))
                    }
                    setMobileMenuOpen(false)
                  }}
                  className="block px-4 py-2 text-yellow-400 text-sm font-semibold hover:text-yellow-300 transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar;