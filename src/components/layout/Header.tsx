import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Menu as MenuIcon, X } from 'lucide-react';
import CartIcon from '../cart/CartIcon';
import CartDrawer from '../cart/CartDrawer';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold text-red-900">
            Tikke Da Ikka
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              Home
            </NavLink>
            <NavLink to="/menu" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              Menu
            </NavLink>
            <NavLink to="/book-table" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              Book a Table
            </NavLink>
            <NavLink to="/gallery" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              Gallery
            </NavLink>
            <NavLink to="/about" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              About Us
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `transition hover:text-red-800 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }>
              Contact
            </NavLink>
          </nav>

          {/* Phone and Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <CartIcon onClick={() => setIsCartOpen(true)} />
            <a 
              href="tel:+911234567890" 
              className="flex items-center text-red-900 hover:text-red-700 transition"
            >
              <Phone size={20} className="mr-2" />
              <span className="font-medium">123-456-7890</span>
            </a>
            <NavLink
              to="/book-table"
              className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md transition"
            >
              Book Table
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <CartIcon onClick={() => setIsCartOpen(true)} />
            <button 
              className="text-gray-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
        style={{ top: '56px' }}
      >
        <nav className="flex flex-col p-4 space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/menu" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            Menu
          </NavLink>
          <NavLink 
            to="/book-table" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            Book a Table
          </NavLink>
          <NavLink 
            to="/gallery" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            Gallery
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            About Us
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-lg py-2 ${isActive ? 'text-red-800 font-medium' : 'text-gray-800'}`
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>
          <div className="pt-4 border-t border-gray-200">
            <a 
              href="tel:+911234567890" 
              className="flex items-center text-red-900 hover:text-red-700 transition py-2"
            >
              <Phone size={20} className="mr-2" />
              <span className="font-medium">123-456-7890</span>
            </a>
            <NavLink
              to="/book-table"
              className="bg-red-800 hover:bg-red-700 text-white px-6 py-2 rounded-md transition mt-4 inline-block"
              onClick={closeMenu}
            >
              Book Table
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Cart Drawer */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;