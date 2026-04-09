import React from 'react'
import { ChevronRight } from 'lucide-react'

const ScientificActivity = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Navigation */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-gray-600">
            <a href="/" className="text-blue-600 hover:text-blue-700 font-medium">Ingush State University</a>
            <ChevronRight size={18} className="text-gray-400" />
            <span className="text-gray-400">Scientific activity</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar - Table of Contents */}
          <div className="lg:col-span-1">
            <div className="bg-white sticky top-20">
              <h3 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b-2 border-blue-600">Contents</h3>
              <nav className="space-y-3">
                <a href="#overview" className="block text-blue-600 hover:text-blue-700 font-medium transition">
                  Research Overview
                </a>
                <a href="#strategy" className="block text-gray-600 hover:text-blue-600 transition">
                  Research Strategy
                </a>
                <a href="#goals" className="block text-gray-600 hover:text-blue-600 transition">
                  Strategic Goals
                </a>
                <a href="#institution" className="block text-gray-600 hover:text-blue-600 transition">
                  University's Role
                </a>
                <a href="#research-areas" className="block text-gray-600 hover:text-blue-600 transition">
                  Research Areas
                </a>
                <a href="#foundation" className="block text-gray-600 hover:text-blue-600 transition">
                  Scientific Foundation
                </a>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {/* Title */}
            <h1 className="text-5xl font-bold text-gray-800 mb-8 font-serif">Research activities of IngSU</h1>

            {/* Overview Section */}
            <section id="overview" className="mb-12">
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                The development of university research is a pressing issue in contemporary Russian higher education. Its relevance stems from the need to prepare competitive graduates, as well as the current priority of state policy in higher education, which aims to integrate higher education, science, industry, and business.
              </p>
            </section>

            {/* Strategy Section */}
            <section id="strategy" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Research Strategy</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                The research strategy of Ingush State University is aimed at maximizing the development of scientific work based on fundamental and applied research of the faculty, undergraduate and graduate students, maintaining and developing leading research and teaching staff, attracting and retaining young people in the field of education and science, creating competitive scientific and technical products and science-intensive technologies, and commercializing developments.
              </p>
            </section>

            {/* Strategic Goals Section */}
            <section id="goals" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Strategic Development Priorities</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                IngSU's strategic development priorities include ensuring the innovative nature of scientific research in priority areas of science, technology, and engineering in the Russian Federation, and increasing the efficiency and effectiveness of scientific activity. Their implementation is ensured by achieving the following strategic goals:
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-600 p-8 mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg">Development of the university's priority research areas</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg">Increasing publication activity and the quality of scientific publications</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg">Transfer and implementation of the university's scientific developments</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg">Development of the infrastructure of scientific and innovative activities</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-xl mt-1">•</span>
                    <span className="text-gray-700 text-lg">Deepening the skills of students' research activities</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Institution Role Section */}
            <section id="institution" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">The University's Role</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                Today, Ingush State University is a scientific and educational institution that serves as a center for training highly qualified personnel across virtually the entire spectrum of specialties required by the region, including secondary and higher education, research organizations, public administration structures, and the environmental services of mountain protected areas.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed text-justify">
                Moreover, today, specialists with higher education in the language, literature, and history of the Ingush people are trained exclusively here. This unique specialization makes IngSU a crucial custodian of the region's cultural and linguistic heritage.
              </p>
            </section>

            {/* Research Areas Section */}
            <section id="research-areas" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Nine Main Research Areas</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8 text-justify">
                Research is conducted in nine main scientific areas, which have been developed through many years of practical experience and innovative scientific research. These areas span across:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Natural Sciences</h4>
                  <p className="text-gray-600">Fundamental and applied research in physics, chemistry, and biology</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Engineering & Technology</h4>
                  <p className="text-gray-600">Technological innovations and engineering solutions</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Social Sciences</h4>
                  <p className="text-gray-600">Research in sociology, economics, and social development</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Humanities & Culture</h4>
                  <p className="text-gray-600">Research on Ingush language, literature, history, and cultural heritage</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Education & Pedagogy</h4>
                  <p className="text-gray-600">Research in educational methods and pedagogical innovations</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Environmental Studies</h4>
                  <p className="text-gray-600">Research on environmental protection and mountain protected areas</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Medical Sciences</h4>
                  <p className="text-gray-600">Health research and biomedical innovations</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">Computer Science & IT</h4>
                  <p className="text-gray-600">Digital transformation and computational research</p>
                </div>
                <div className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                  <h4 className="font-bold text-gray-800 mb-2">International Relations</h4>
                  <p className="text-gray-600">Cross-border research and international collaboration</p>
                </div>
              </div>
            </section>

            {/* Scientific Foundation Section */}
            <section id="foundation" className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 mt-10">Scientific Foundation</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-6 text-justify">
                In certain areas of scientific research and development, the university's research teams have built a significant scientific foundation, represented by:
              </p>

              <div className="bg-linear-to-r from-blue-50 to-indigo-50 border border-blue-200 p-8 rounded-lg mb-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-2xl mt-0">▸</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Published Research Papers</h4>
                      <p className="text-gray-600">Research contributions in leading international and Russian scientific journals</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-2xl mt-0">▸</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Registered Intellectual Property</h4>
                      <p className="text-gray-600">Protected innovative technologies and patents</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="text-blue-600 font-bold text-2xl mt-0">▸</span>
                    <div>
                      <h4 className="font-bold text-gray-800">Fundamental & Applied Research Results</h4>
                      <p className="text-gray-600">Significant scientific achievements advancing both knowledge and practical applications</p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to Action */}
            <section className="mt-16 pt-12 border-t-2 border-gray-200">
              <div className="bg-linear-to-r from-blue-600 to-blue-700 rounded-lg p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Interested in Our Research?</h3>
                <p className="text-blue-100 mb-6">
                  Discover research opportunities, collaborations, and partnerships with Ingush State University.
                </p>
                <button className="bg-white text-blue-700 hover:bg-gray-100 font-bold py-2 px-6 rounded transition">
                  Contact Research Office
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScientificActivity