import React, { useState } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Send, MessageSquare } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Contact form data:', formData);
    setSubmitSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or want to make a special request? Get in touch with us and we'll be happy to help.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Contact Information */}
              <div className="bg-red-800 text-white p-8 md:w-2/5">
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <p className="mb-8">
                  We'd love to hear from you. Reach out to us through any of the channels below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin size={24} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Address</h3>
                      <p>Khazana Market, Ashiyana, Lucknow, Uttar Pradesh, 226012</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p>+91 123-456-7890</p>
                      <p className="text-sm mt-1">Monday to Sunday, 10:00 AM - 10:00 PM</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p>info@tikkedaikka.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-red-200 transition"
                      aria-label="Instagram"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="hover:text-red-200 transition"
                      aria-label="Facebook"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-semibold mb-3">Direct Chat Support</h3>
                  <a 
                    href="https://wa.me/911234567890" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
                  >
                    <MessageSquare size={20} className="mr-2" />
                    WhatsApp Chat
                  </a>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 md:w-3/5">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="bg-green-50 border border-green-200 rounded-md p-6 text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                    <p className="text-gray-600">
                      Thank you for reaching out to us. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Your Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-gray-700 mb-1">Your Email</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-1">Subject</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        ></textarea>
                      </div>
                      
                      <button
                        type="submit"
                        className="bg-red-800 hover:bg-red-700 text-white py-3 rounded-md transition font-semibold"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
          
          {/* Map */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Our Location</h2>
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                title="Restaurant Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.0757783968186!2d80.94340501438732!3d26.87004776733555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1619529091754!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;