import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">FLAT FINDERS</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Your trusted partner in finding the perfect home in Hyderabad.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.youtube.com/@flatfindersrealestate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-red-500 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/flatfindersrealestate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-blue-500 transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/post-property" className="hover:text-blue-500 transition-colors">Post Property</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-blue-500 transition-colors">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Popular Searches */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Popular Searches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/search?type=1bhk" className="hover:text-blue-500 transition-colors">1 BHK Flats</Link>
              </li>
              <li>
                <Link to="/search?type=2bhk" className="hover:text-blue-500 transition-colors">2 BHK Flats</Link>
              </li>
              <li>
                <Link to="/search?type=3bhk" className="hover:text-blue-500 transition-colors">3 BHK Flats</Link>
              </li>
              <li>
                <Link to="/search?location=gachibowli" className="hover:text-blue-500 transition-colors">Flats in Gachibowli</Link>
              </li>
              <li>
                <Link to="/search?location=hitech-city" className="hover:text-blue-500 transition-colors">Flats in HITEC City</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                <span>123 Main Street, Gachibowli, Hyderabad, Telangana 500032</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-500" />
                <span>+91 86398 70815</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span>flatfindersrealestate@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} FLAT FINDERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;