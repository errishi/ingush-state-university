import React, { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router'
import { ChevronRight, Search, AlertCircle, Home } from 'lucide-react'

const SearchResults = () => {
  const [searchParams] = useSearchParams()
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const query = searchParams.get('q') || ''

  // Sample data for searching
  const searchableContent = [
    {
      title: 'About University',
      description: 'Learn about Ingush State University history, mission, and vision.',
      link: '/about-us',
      category: 'Organization',
      keywords: ['about', 'university', 'history', 'mission', 'vision', 'ingsu']
    },
    {
      title: 'Academic Programs',
      description: 'Explore our diverse range of undergraduate and postgraduate programs.',
      link: '/applicant#programs',
      category: 'Academics',
      keywords: ['programs', 'bachelor', 'master', 'courses', 'education', 'degree']
    },
    {
      title: 'Admission Requirements',
      description: 'View detailed requirements for applying to Ingush State University.',
      link: '/applicant#requirements',
      category: 'Admissions',
      keywords: ['requirements', 'admission', 'apply', 'documents', 'qualifications']
    },
    {
      title: 'Faculty & Departments',
      description: 'Discover all faculties and departments available at the university.',
      link: '/structure#faculties',
      category: 'Structure',
      keywords: ['faculty', 'department', 'structure', 'engineering', 'medicine', 'law']
    },
    {
      title: 'Scientific Research',
      description: 'Information about research activities and innovation at IngSU.',
      link: '/scientific-activity',
      category: 'Research',
      keywords: ['research', 'scientific', 'innovation', 'publications', 'laboratories']
    },
    {
      title: 'Contact Information',
      description: 'Get in touch with us through phone, email, or visit our campus.',
      link: '/contact-us',
      category: 'Contact',
      keywords: ['contact', 'phone', 'email', 'address', 'hours', 'office']
    },
    {
      title: 'Scholarships',
      description: 'Explore scholarship opportunities and financial aid programs.',
      link: '/applicant#scholarships',
      category: 'Financial Aid',
      keywords: ['scholarship', 'financial', 'aid', 'grant', 'award', 'funding']
    },
    {
      title: 'News & Events',
      description: 'Stay updated with latest university news and upcoming events.',
      link: '/news',
      category: 'Updates',
      keywords: ['news', 'events', 'updates', 'announcements', 'latest']
    },
    {
      title: 'Educational Activities',
      description: 'Learn about educational programs, schedules, and activities.',
      link: '/educational-activity',
      category: 'Education',
      keywords: ['educational', 'activities', 'schedule', 'classes', 'exams', 'calendar']
    },
    {
      title: 'Useful Information',
      description: 'Access important documents and useful resources for applicants.',
      link: '/information-for-applicants',
      category: 'Resources',
      keywords: ['information', 'documents', 'resources', 'forms', 'guides', 'regulations']
    }
  ]

  useEffect(() => {
    setIsLoading(true)
    
    // Simulate search delay
    setTimeout(() => {
      if (!query.trim()) {
        setResults([])
        setIsLoading(false)
        return
      }

      const queryLower = query.toLowerCase()
      
      // Search through content
      const filteredResults = searchableContent.filter(item => {
        const titleMatch = item.title.toLowerCase().includes(queryLower)
        const descriptionMatch = item.description.toLowerCase().includes(queryLower)
        const keywordMatch = item.keywords.some(keyword => 
          keyword.toLowerCase().includes(queryLower)
        )
        
        return titleMatch || descriptionMatch || keywordMatch
      })

      setResults(filteredResults)
      setIsLoading(false)
    }, 300)
  }, [query])

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Link to="/" className="text-blue-600 hover:text-blue-700 font-medium">Ingush State University</Link>
            <ChevronRight size={18} className="text-gray-400" />
            <span className="text-gray-400">Search Results</span>
          </div>
        </div>
      </div>

      {/* Search Results Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Search Results</h1>
          <p className="text-gray-600 text-lg">
            {query ? (
              <>
                Results for "<span className="font-semibold text-blue-600">{query}</span>"
              </>
            ) : (
              'Enter a search query'
            )}
          </p>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-16">
            <div className="inline-block">
              <div className="animate-spin">
                <Search size={48} className="text-blue-600" />
              </div>
              <p className="text-gray-600 mt-4">Searching...</p>
            </div>
          </div>
        )}

        {/* No Query */}
        {!isLoading && !query && (
          <div className="text-center py-16 bg-gray-50 rounded-lg">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600 text-lg">Please enter a search term to get started</p>
          </div>
        )}

        {/* Results Found */}
        {!isLoading && query && results.length > 0 && (
          <div>
            <p className="text-gray-600 mb-8">
              Found <span className="font-bold text-blue-600">{results.length}</span> result{results.length !== 1 ? 's' : ''}
            </p>

            <div className="space-y-6">
              {results.map((result, index) => (
                <Link
                  key={index}
                  to={result.link}
                  className="group block bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                          {result.category}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-blue-700 group-hover:text-blue-800 transition mb-2">
                        {result.title}
                      </h3>
                      
                      <p className="text-gray-600 text-base leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                    
                    <div className="shrink-0 text-blue-600 group-hover:translate-x-2 transition">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {!isLoading && query && results.length === 0 && (
          <div>
            <div className="bg-gray-50 rounded-lg p-12 text-center mb-12">
              <Search size={48} className="mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">No results found</h2>
              <p className="text-gray-600 text-lg mb-6">
                We couldn't find anything matching "<span className="font-semibold">{query}</span>"
              </p>
              <p className="text-gray-600 mb-8">
                Try different keywords or browse our main categories below.
              </p>
            </div>

            {/* Suggested Links */}
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Popular Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchableContent.slice(0, 6).map((item, index) => (
                <Link
                  key={index}
                  to={item.link}
                  className="group block bg-white border border-gray-200 rounded-lg p-6 hover:border-blue-600 hover:shadow-lg transition"
                >
                  <h4 className="text-lg font-bold text-blue-700 group-hover:text-blue-800 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {item.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Back to Home Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-lg transition"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SearchResults