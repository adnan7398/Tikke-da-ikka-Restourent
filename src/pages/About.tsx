import React from 'react';
import { NavLink } from 'react-router-dom';
import { Award, Utensils, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn about the story of Tikke Da Ikka, our mission, and the people behind our delicious food.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, Tikke Da Ikka began with a simple vision: to bring the authentic flavors of North India to Lucknow. 
                Our founder, Chef Rajesh Kumar, grew up in Punjab surrounded by traditional cooking and family recipes passed down through generations.
              </p>
              <p className="text-gray-600 mb-4">
                After mastering his craft in several renowned restaurants across India, Chef Rajesh decided to create 
                a place where people could experience the true essence of North Indian cuisine, prepared with traditional methods and the finest ingredients.
              </p>
              <p className="text-gray-600">
                What started as a small family restaurant has grown into one of Lucknow's favorite dining destinations, 
                known for its warm atmosphere, exceptional service, and most importantly, delicious food that captures the 
                heart and soul of North Indian culinary traditions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3772483/pexels-photo-3772483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Restaurant History" 
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="py-16 bg-gray-50 rounded-lg mb-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Our Mission</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-gray-600 text-lg italic">
                "To preserve and celebrate the rich culinary heritage of North India while creating memorable dining 
                experiences that bring people together through exceptional food, warm hospitality, and a welcoming atmosphere."
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Utensils className="text-red-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Authenticity</h3>
              <p className="text-gray-600">
                We stay true to traditional recipes and cooking methods, using handpicked spices and premium ingredients 
                to deliver the genuine flavors of North India.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Award className="text-red-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-600">
                We never compromise on quality. From ingredient selection to food preparation and service,  
                excellence is our standard in everything we do.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                <Users className="text-red-800" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hospitality</h3>
              <p className="text-gray-600">
                We believe in treating every guest like family. Our warm, attentive service aims to create a welcoming 
                environment where memories are made around great food.
              </p>
            </div>
          </div>
        </section>

        {/* Meet Our Chef */}
        <section className="mb-16">
          <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Meet Our Chef</h2>
              <h3 className="text-xl font-semibold mb-2 text-red-800">Chef Rajesh Kumar</h3>
              <p className="text-gray-600 mb-4">
                With over 25 years of culinary experience, Chef Rajesh is the heart and soul of Tikke Da Ikka. 
                Born and raised in Punjab, his passion for cooking began at an early age, learning traditional recipes from his grandmother.
              </p>
              <p className="text-gray-600 mb-4">
                After training in some of India's finest restaurants and hotels, Chef Rajesh has developed a cooking style that 
                honors tradition while incorporating creative touches that make each dish special.
              </p>
              <p className="text-gray-600">
                His commitment to authenticity and quality has earned Tikke Da Ikka numerous accolades and a loyal following 
                of food enthusiasts who appreciate true North Indian cuisine.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Chef Rajesh Kumar" 
                className="rounded-lg w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-red-800 text-white rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Come Experience Our Food</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We'd love to welcome you to Tikke Da Ikka and share our passion for authentic North Indian cuisine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <NavLink
              to="/menu"
              className="bg-white text-red-800 hover:bg-gray-100 px-6 py-3 rounded-md transition font-semibold"
            >
              View Our Menu
            </NavLink>
            <NavLink
              to="/book-table"
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-6 py-3 rounded-md transition font-semibold"
            >
              Reserve a Table
            </NavLink>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;