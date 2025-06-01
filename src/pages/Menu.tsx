import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import { menuData } from '../data/menuData';
import { useCartStore } from '../store/cartStore';

type Category = 'all' | 'starters' | 'mains' | 'biryani' | 'breads' | 'desserts';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const addItem = useCartStore(state => state.addItem);
  
  const categories = [
    { id: 'all', name: 'All' },
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'biryani', name: 'Biryani & Rice' },
    { id: 'breads', name: 'Breads' },
    { id: 'desserts', name: 'Desserts' }
  ];

  const filteredMenu = activeCategory === 'all' 
    ? menuData 
    : menuData.filter(item => item.category === activeCategory);

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Our Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of authentic North Indian dishes, prepared with 
            traditional recipes and the finest ingredients.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
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

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
                />
                <div className="absolute top-2 right-2 bg-red-800 text-white text-xs px-2 py-1 rounded">
                  {item.veg ? 'Veg' : 'Non-Veg'}
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.name}
                  </h3>
                  <span className="text-red-800 font-semibold">₹{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <button 
                  onClick={() => addItem(item)}
                  className="w-full bg-red-800 hover:bg-red-700 text-white py-2 rounded flex items-center justify-center transition"
                >
                  <ShoppingBag size={18} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;