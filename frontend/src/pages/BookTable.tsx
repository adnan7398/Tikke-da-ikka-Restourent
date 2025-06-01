import React, { useState } from 'react';
import { Calendar, Clock, Users, Check } from 'lucide-react';

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequests: string;
}

const BookTable: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    specialRequests: ''
  });

  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    console.log('Booking data:', formData);
    setBookingSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setBookingSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        occasion: '',
        specialRequests: ''
      });
    }, 3000);
  };

  // Available time slots
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', 
    '2:00 PM', '2:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', 
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  // Calculate minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Book a Table</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reserve your table at Tikke Da Ikka to enjoy authentic North Indian cuisine 
            in a warm and inviting atmosphere.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 relative">
                <div 
                  className="h-64 md:h-full bg-center bg-cover" 
                  style={{ 
                    backgroundImage: "url('https://images.pexels.com/photos/6479546/pexels-photo-6479546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')" 
                  }}
                ></div>
                <div className="absolute inset-0 bg-red-900/30 flex flex-col justify-center items-center text-white p-6">
                  <h2 className="text-2xl font-bold mb-4">Reservation Details</h2>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar size={24} className="mr-3" />
                      <div>
                        <p className="font-semibold">Opening Hours</p>
                        <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                        <p>Sat - Sun: 10:00 AM - 11:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users size={24} className="mr-3" />
                      <div>
                        <p className="font-semibold">Seating Capacity</p>
                        <p>Up to 80 guests</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={24} className="mr-3" />
                      <div>
                        <p className="font-semibold">Reservation Notice</p>
                        <p>Please book at least 2 hours in advance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Form Section */}
              <div className="md:w-3/5 p-6 md:p-8">
                {bookingSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-green-100 rounded-full p-3 mb-4">
                      <Check size={40} className="text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Booking Successful!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for your reservation. We've sent a confirmation email with all the details.
                    </p>
                    <p className="text-gray-600">
                      We look forward to serving you at Tikke Da Ikka!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 mb-1">Full Name</label>
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
                        <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
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
                        <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="guests" className="block text-gray-700 mb-1">Number of Guests</label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        >
                          {[...Array(20)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="date" className="block text-gray-700 mb-1">Date</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={today}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-gray-700 mb-1">Time</label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        >
                          <option value="">Select a time</option>
                          {timeSlots.map(time => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="occasion" className="block text-gray-700 mb-1">Occasion (Optional)</label>
                        <select
                          id="occasion"
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                        >
                          <option value="">Select an occasion</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Date Night">Date Night</option>
                          <option value="Business Meal">Business Meal</option>
                          <option value="Family Gathering">Family Gathering</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="specialRequests" className="block text-gray-700 mb-1">
                          Special Requests (Optional)
                        </label>
                        <textarea
                          id="specialRequests"
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows={3}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800 focus:border-transparent"
                          placeholder="Any allergies, dietary restrictions, or special seating preferences?"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="mt-6 w-full bg-red-800 hover:bg-red-700 text-white py-3 rounded-md transition font-semibold"
                    >
                      Confirm Reservation
                    </button>
                    <p className="mt-4 text-sm text-gray-500 text-center">
                      By clicking "Confirm Reservation", you agree to our reservation 
                      policy. A confirmation email will be sent to you.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;