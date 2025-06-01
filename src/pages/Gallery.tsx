import React, { useState } from 'react';
import { X } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  category: string;
  title: string;
}

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'food', name: 'Food' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'events', name: 'Events' }
  ];

  const galleryImages: GalleryImage[] = [
    // Food Images
    {
      id: 1,
      url: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Butter Chicken"
    },
    {
      id: 2,
      url: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Paneer Tikka"
    },
    {
      id: 3,
      url: "https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Chicken Tikka"
    },
    {
      id: 4,
      url: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Traditional Curry"
    },
    {
      id: 5,
      url: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Chicken Biryani"
    },
    {
      id: 6,
      url: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "food",
      title: "Vegetable Biryani"
    },
    
    // Restaurant Images
    {
      id: 7,
      url: "https://images.pexels.com/photos/6479546/pexels-photo-6479546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "restaurant",
      title: "Dining Area"
    },
    {
      id: 8,
      url: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "restaurant",
      title: "Restaurant Exterior"
    },
    {
      id: 9,
      url: "https://images.pexels.com/photos/2403391/pexels-photo-2403391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "restaurant",
      title: "Chef at Work"
    },
    {
      id: 10,
      url: "https://images.pexels.com/photos/959922/pexels-photo-959922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "restaurant",
      title: "Bar Area"
    },
    
    // Events Images
    {
      id: 11,
      url: "https://images.pexels.com/photos/5675744/pexels-photo-5675744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "events",
      title: "Corporate Event"
    },
    {
      id: 12,
      url: "https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "events",
      title: "Birthday Celebration"
    }
  ];

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === activeCategory);

  const openModal = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a visual tour of our restaurant, delicious food, and special events.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition ${
                activeCategory === category.id
                  ? 'bg-red-800 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map(image => (
            <div 
              key={image.id} 
              className="overflow-hidden rounded-lg cursor-pointer relative group"
              onClick={() => openModal(image)}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-64 object-cover transition duration-500 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="max-w-4xl max-h-[90vh] relative"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImage.url} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain"
              />
              <div className="text-white mt-4 text-center">
                <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
              </div>
              <button 
                className="absolute top-0 right-0 -mt-12 -mr-12 bg-white/20 rounded-full p-2 text-white hover:bg-white/30 transition"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;