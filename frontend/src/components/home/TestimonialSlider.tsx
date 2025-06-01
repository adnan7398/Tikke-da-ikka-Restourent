import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

const TestimonialSlider: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Aarav Kumar",
      role: "Food Blogger",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5,
      text: "The butter chicken at Tikke Da Ikka is the best I've had in Lucknow. Perfectly balanced flavors with just the right amount of spice. The ambience is fantastic too!"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Regular Customer",
      image: "https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 4,
      text: "I order from Tikke Da Ikka at least once a week. Their delivery is always prompt and the food arrives hot. The paneer tikka is my personal favorite!"
    },
    {
      id: 3,
      name: "Vikram Singh",
      role: "Local Resident",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      rating: 5,
      text: "The biryani here is authentic and flavorful. I've been coming to this restaurant for years and the quality has always been consistent. Highly recommend!"
    }
  ];

  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [current, autoplay]);

  return (
    <div className="relative max-w-4xl mx-auto">
      <div 
        className="overflow-hidden"
        onMouseEnter={() => setAutoplay(false)}
        onMouseLeave={() => setAutoplay(true)}
      >
        <div 
          className="flex transition-transform duration-500 ease-out" 
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-20 h-20 object-cover rounded-full mx-auto md:mx-0"
                  />
                  <div className="flex-grow text-center md:text-left">
                    <div className="flex justify-center md:justify-start mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-4">"{testimonial.text}"</p>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-md transition z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight size={24} />
      </button>

      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === current ? 'bg-red-800' : 'bg-gray-300'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;