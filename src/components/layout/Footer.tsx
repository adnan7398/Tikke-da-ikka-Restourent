import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Tikke Da Ikka</h3>
            <p className="text-gray-300 mb-4">
              Authentic North Indian cuisine serving delicious food in a warm and inviting atmosphere.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-red-500 transition"
                aria-label="Instagram"
              >
                <Instagram size={22} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-red-500 transition"
                aria-label="Facebook"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-white transition">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" className="text-gray-300 hover:text-white transition">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/book-table" className="text-gray-300 hover:text-white transition">
                  Book a Table
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="text-gray-300 hover:text-white transition">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-white transition">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-white transition">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
                <span className="text-gray-300">
                  Khazana Market, Ashiyana, Lucknow, Uttar Pradesh, 226012
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0 text-red-500" />
                <a href="tel:+911234567890" className="text-gray-300 hover:text-white transition">
                  123-456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0 text-red-500" />
                <a href="mailto:info@tikkedaikka.com" className="text-gray-300 hover:text-white transition">
                  info@tikkedaikka.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4">Opening Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">Monday - Friday</p>
                  <p className="text-white">11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock size={20} className="mr-2 mt-1 flex-shrink-0 text-red-500" />
                <div>
                  <p className="text-gray-300">Saturday - Sunday</p>
                  <p className="text-white">10:00 AM - 11:00 PM</p>
                </div>
              </li>
            </ul>
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2">Subscribe</h4>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 text-white px-3 py-2 rounded-l outline-none flex-grow"
                />
                <button 
                  type="submit" 
                  className="bg-red-800 hover:bg-red-700 px-4 py-2 rounded-r transition"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tikke Da Ikka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;