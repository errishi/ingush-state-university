import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About University</h3>
            <p className="text-sm leading-relaxed">
              Federal State Budgetary Educational Institution of Higher Education "Ingush State University"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-yellow-400 transition">Home</Link></li>
              <li><Link to="/contact-us" className="hover:text-yellow-400 transition">Contact Us</Link></li>
              <li><Link to="/about-us" className="hover:text-yellow-400 transition">About Us</Link></li>
              <li><Link to="/scientific-activity" className="hover:text-yellow-400 transition">Scientific Activity</Link></li>
              <li><Link to="/structure" className="hover:text-yellow-400 transition">Structure</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <span className="shrink-0 mt-1 text-lg">📍</span>
                <span>Millionschikova Street, Dom13K1, Moscow, Russia</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📞</span>
                <a href="tel:+79253490320" className="hover:text-yellow-400 transition">+7 (925) 349-03-20</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg"><EmailIcon /></span>
                <a href="mailto:info@unefly.com" className="hover:text-yellow-400 transition">info@unefly.com</a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-yellow-400 transition text-sm font-semibold" title="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" className="hover:text-yellow-400 transition text-sm font-semibold" title="Twitter">
                <XIcon />
              </a>
              <a href="#" className="hover:text-yellow-400 transition text-sm font-semibold" title="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="hover:text-yellow-400 transition text-sm font-semibold" title="LinkedIn">
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {currentYear} Ingush State University. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-yellow-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-yellow-400 transition">Terms of Service</a>
            <a href="#" className="hover:text-yellow-400 transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer