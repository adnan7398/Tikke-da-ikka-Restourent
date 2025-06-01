import React from 'react';
import { NavLink } from 'react-router-dom';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const MenuHighlight: React.FC = () => {
  const featuredItems: MenuItem[] = [
    {
      id: 1,
      name: "Butter Chicken",
      description: "Grilled chicken cooked in a rich tomato and butter gravy with a touch of cream",
      price: 340,
      image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Mains"
    },
    {
      id: 2,
      name: "Paneer Tikka",
      description: "Marinated cottage cheese cubes grilled to perfection in a tandoor",
      price: 280,
      image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Starters"
    },
    {
      id: 3,
      name: "Veg Biryani",
      description: "Aromatic basmati rice cooked with mixed vegetables and special spices",
      price: 260,
      image: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Biryani"
    },
    {
      id: 4,
      name: "Malai Kofta",
      description: "Creamy potato and paneer dumplings in a rich and aromatic gravy",
      price: 320,
      image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
      category: "Mains"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featuredItems.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition duration-500 transform hover:scale-105"
            />
            <div className="absolute top-2 right-2 bg-red-800 text-white text-xs px-2 py-1 rounded">
              {item.category}
            </div>
          </div>
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <span className="text-red-800 font-semibold">₹{item.price}</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{item.description}</p>
            <NavLink 
              to="/menu" 
              className="block text-center bg-red-800 hover:bg-red-700 text-white py-2 rounded transition"
            >
              Order Now
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuHighlight;