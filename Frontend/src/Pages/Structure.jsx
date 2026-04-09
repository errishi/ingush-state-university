import React, { useState } from 'react'
import { ChevronRight, Users, BookOpen, Beaker, Calculator, Globe, Briefcase, Building2 } from 'lucide-react'

const Structure = () => {
  const [expandedFaculty, setExpandedFaculty] = useState(null)

  const faculties = [
    {
      id: 1,
      name: 'Faculty of Agricultural Engineering',
      icon: BookOpen,
      description: 'Specializes in agricultural engineering, sustainable farming practices, and agro-business management.',
      departments: ['Agricultural Machinery', 'Soil Science', 'Crop Management']
    },
    {
      id: 2,
      name: 'Engineering and Technical Institute',
      icon: Building2,
      description: 'Focuses on engineering technologies, construction, and technical innovation.',
      departments: ['Civil Engineering', 'Mechanical Engineering', 'Technical Systems']
    },
    {
      id: 3,
      name: 'Institute of Foreign Languages and Regional Studies',
      icon: Globe,
      description: 'Dedicated to language education, linguistics, and regional cultural studies.',
      departments: ['English', 'Russian Studies', 'Regional Studies', 'Linguistics']
    },
    {
      id: 4,
      name: 'Faculty of History',
      icon: BookOpen,
      description: 'Explores historical studies, archaeology, and cultural heritage preservation.',
      departments: ['World History', 'Regional History', 'Cultural Heritage', 'Archaeology']
    },
    {
      id: 5,
      name: 'Medical Institute named after A.Kh. Ausheva',
      icon: Beaker,
      description: 'Premier medical education institution offering comprehensive healthcare professional training.',
      departments: ['General Medicine', 'Pediatrics', 'Surgery', 'Nursing']
    },
    {
      id: 6,
      name: 'Faculty of Education',
      icon: Users,
      description: 'Prepares educators and specialists in pedagogical sciences and educational management.',
      departments: ['Pedagogy', 'Psychology', 'Educational Technology', 'Teacher Training']
    },
    {
      id: 7,
      name: 'Faculty of Economics and Management',
      icon: Briefcase,
      description: 'Trains business professionals, economists, and management specialists.',
      departments: ['Economics', 'Business Management', 'Finance', 'Marketing']
    },
    {
      id: 8,
      name: 'Faculty of Physics and Mathematics',
      icon: Calculator,
      description: 'Advances mathematical sciences and theoretical and applied physics.',
      departments: ['Mathematics', 'Physics', 'Theoretical Physics', 'Applied Mathematics']
    },
    {
      id: 9,
      name: 'Faculty of Philology',
      icon: BookOpen,
      description: 'Specializes in literary studies, language sciences, and cultural analysis.',
      departments: ['Ingush Language', 'Russian Literature', 'Comparative Literature', 'Linguistics']
    },
    {
      id: 10,
      name: 'Faculty of Chemistry and Biology',
      icon: Beaker,
      description: 'Conducts research and education in chemistry, biology, and biochemistry.',
      departments: ['Organic Chemistry', 'Biology', 'Biochemistry', 'Molecular Biology']
    },
    {
      id: 11,
      name: 'Faculty of Law',
      icon: Briefcase,
      description: 'Provides comprehensive legal education and training in various fields of law.',
      departments: ['Constitutional Law', 'Criminal Law', 'Civil Law', 'International Law']
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
            <a href="/about-us" className="text-blue-600 hover:text-blue-700 font-medium">About the university</a>
            <ChevronRight size={18} className="text-gray-400" />
            <span className="text-gray-400">Faculties</span>
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-linear-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-12">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3">University Structure</h1>
          <p className="text-gray-600 text-lg">
            Ingush State University comprises 11 faculties and institutes dedicated to academic excellence and research advancement.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <Building2 size={32} className="text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">11 Faculties</h3>
            <p className="text-gray-600">Diverse academic departments covering a wide range of disciplines</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <Users size={32} className="text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Faculty</h3>
            <p className="text-gray-600">Dedicated professors and researchers advancing knowledge and education</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <Globe size={32} className="text-blue-600 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Global Standards</h3>
            <p className="text-gray-600">Meeting international quality standards and accreditations</p>
          </div>
        </div>

        {/* Faculties List */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden" id="faculties">
          <div className="divide-y divide-gray-200">
            {faculties.map((faculty, index) => {
              const IconComponent = faculty.icon
              const isExpanded = expandedFaculty === faculty.id

              return (
                <div key={faculty.id}>
                  {/* Faculty Item */}
                  <button
                    onClick={() => setExpandedFaculty(isExpanded ? null : faculty.id)}
                    className="w-full px-8 py-6 hover:bg-blue-50 transition text-left group flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-linear-to-br from-blue-600 to-blue-700 w-12 h-12 rounded-full flex items-center justify-center shrink-0">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-blue-700 group-hover:text-blue-800 transition">
                        {faculty.name}
                      </h3>
                    </div>
                    <ChevronRight 
                      size={24} 
                      className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
                    />
                  </button>

                  {/* Expanded Details */}
                  {isExpanded && (
                    <div className="bg-blue-50 px-8 py-6 border-t border-gray-200">
                      <p className="text-gray-700 text-lg mb-6">{faculty.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-gray-800 mb-3">Departments:</h4>
                          <ul className="space-y-2">
                            {faculty.departments.map((dept, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-gray-700">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                {dept}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-white rounded p-4 border border-blue-200">
                          <h4 className="font-bold text-gray-800 mb-3">Contact & Info</h4>
                          <p className="text-gray-600 text-sm mb-2">
                            <strong>Office:</strong> Main Building, Floor 3
                          </p>
                          <p className="text-gray-600 text-sm mb-4">
                            <strong>Phone:</strong> +7 (8732) XXX-XX-XX
                          </p>
                          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition font-medium">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Administrative Structure */}
        <div className="mt-16 bg-linear-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200" id="administrative">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Administrative Structure</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Rector's Office</h3>
              <p className="text-gray-700 mb-4">
                The Rector leads the university and oversees all academic and administrative functions, ensuring the institution meets its mission and strategic objectives.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Academic Affairs</li>
                <li>• Research & Innovation</li>
                <li>• Student Services</li>
                <li>• International Relations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-blue-700 mb-4">Support Services</h3>
              <p className="text-gray-700 mb-4">
                Dedicated departments provide essential support to students, faculty, and researchers throughout their academic journey.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Library & Information Services</li>
                <li>• Human Resources</li>
                <li>• Finance & Administration</li>
                <li>• Technology & IT Services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8" id="support">
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Interested in a Faculty?</h3>
            <p className="text-gray-600 mb-6">
              Learn more about our programs, admission requirements, and career prospects in your field of interest.
            </p>
            <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-2 px-6 rounded transition">
              Explore Programs
            </button>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Schedule a Campus Visit</h3>
            <p className="text-gray-600 mb-6">
              Experience our faculties firsthand. Meet faculty members and see our world-class facilities.
            </p>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2 px-6 rounded transition">
              Request Tour
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Structure