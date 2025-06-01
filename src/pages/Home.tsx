import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, ArrowRight, Clock, MapPin } from 'lucide-react';
import MenuHighlight from '../components/home/MenuHighlight';
import TestimonialSlider from '../components/home/TestimonialSlider';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center z-[-1]" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
          }}
        ></div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Experience Authentic North Indian Cuisine
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              From tandoori delights to flavorful curries, enjoy the best of North Indian 
              culinary traditions at Tikke Da Ikka.
            </p>
            <div className="flex flex-wrap gap-4">
              <NavLink
                to="/menu"
                className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-md transition text-lg font-semibold"
              >
                Order Now
              </NavLink>
              <NavLink
                to="/book-table"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-md transition text-lg font-semibold"
              >
                Book a Table
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Star className="text-red-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Award-Winning Cuisine</h3>
              <p className="text-gray-600">
                Our chefs prepare dishes with authentic spices and traditional recipes to bring you 
                the true taste of North India.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Clock className="text-red-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quick Delivery</h3>
              <p className="text-gray-600">
                Hot and fresh food delivered to your doorstep. Order online and enjoy our dishes in the 
                comfort of your home.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <MapPin className="text-red-800" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prime Location</h3>
              <p className="text-gray-600">
                Conveniently located in Khazana Market, Ashiyana, our restaurant offers a cozy and elegant dining experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/5865071/pexels-photo-5865071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Restaurant Interior" 
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Tikke Da Ikka was born from a passion for authentic North Indian cuisine. 
                Our chefs bring decades of experience from various regions of North India, crafting dishes 
                that tell the story of rich culinary traditions.
              </p>
              <p className="text-gray-600 mb-6">
                Each dish at Tikke Da Ikka is prepared with love, using hand-ground spices and traditional 
                cooking methods to deliver an authentic experience with every bite.
              </p>
              <NavLink 
                to="/about" 
                className="inline-flex items-center text-red-800 hover:text-red-700 font-semibold transition"
              >
                Learn more about us <ArrowRight size={18} className="ml-2" />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              Our Special Menu
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most popular dishes, prepared with authentic spices and traditional recipes 
              to bring you the true taste of North India.
            </p>
          </div>
          
          <MenuHighlight />
          
          <div className="text-center mt-10">
            <NavLink
              to="/menu"
              className="bg-red-800 hover:bg-red-700 text-white px-8 py-3 rounded-md transition text-lg font-semibold inline-block"
            >
              View Full Menu
            </NavLink>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              What Our Customers Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied customers have to say about their 
              dining experience at Tikke Da Ikka.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-red-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready for a Delicious Experience?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Whether you're looking to dine in or order delivery, we're ready to serve you the finest North Indian cuisine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/menu"
              className="bg-white text-red-800 hover:bg-gray-100 px-8 py-3 rounded-md transition text-lg font-semibold"
            >
              Order Online
            </NavLink>
            <NavLink
              to="/book-table"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-md transition text-lg font-semibold"
            >
              Reserve a Table
            </NavLink>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="h-[400px] relative">
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0757783968186!2d80.94340501438732!3d26.87004776733555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1619529091754!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Home;