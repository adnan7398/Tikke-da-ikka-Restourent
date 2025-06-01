interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  veg: boolean;
}

export const menuData: MenuItem[] = [
  // Starters
  {
    id: 1,
    name: "Paneer Tikka",
    description: "Marinated cottage cheese cubes grilled to perfection in a tandoor",
    price: 280,
    image: "https://images.pexels.com/photos/9797029/pexels-photo-9797029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "starters",
    veg: true
  },
  {
    id: 2,
    name: "Chicken Tikka",
    description: "Tender chicken pieces marinated in yogurt and spices, cooked in a tandoor",
    price: 320,
    image: "https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "starters",
    veg: false
  },
  {
    id: 3,
    name: "Vegetable Samosa",
    description: "Crispy pastry filled with spiced potatoes and peas",
    price: 150,
    image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "starters",
    veg: true
  },
  {
    id: 4,
    name: "Seekh Kebab",
    description: "Minced meat mixed with herbs and spices, skewered and grilled",
    price: 340,
    image: "https://images.pexels.com/photos/8992768/pexels-photo-8992768.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "starters",
    veg: false
  },
  
  // Main Course
  {
    id: 5,
    name: "Butter Chicken",
    description: "Grilled chicken cooked in a rich tomato and butter gravy with a touch of cream",
    price: 340,
    image: "https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    veg: false
  },
  {
    id: 6,
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in a rich, creamy tomato gravy",
    price: 320,
    image: "https://images.pexels.com/photos/8320150/pexels-photo-8320150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    veg: true
  },
  {
    id: 7,
    name: "Dal Makhani",
    description: "Black lentils and kidney beans slow-cooked with cream and butter",
    price: 240,
    image: "https://images.pexels.com/photos/7187483/pexels-photo-7187483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    veg: true
  },
  {
    id: 8,
    name: "Malai Kofta",
    description: "Creamy potato and paneer dumplings in a rich and aromatic gravy",
    price: 320,
    image: "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    veg: true
  },
  {
    id: 9,
    name: "Chicken Curry",
    description: "Traditional North Indian chicken curry with aromatic spices",
    price: 320,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "mains",
    veg: false
  },
  
  // Biryani & Rice
  {
    id: 10,
    name: "Chicken Biryani",
    description: "Fragrant basmati rice cooked with chicken, herbs, and spices in dum style",
    price: 320,
    image: "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "biryani",
    veg: false
  },
  {
    id: 11,
    name: "Veg Biryani",
    description: "Aromatic basmati rice cooked with mixed vegetables and special spices",
    price: 260,
    image: "https://images.pexels.com/photos/7353380/pexels-photo-7353380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "biryani",
    veg: true
  },
  {
    id: 12,
    name: "Jeera Rice",
    description: "Basmati rice tempered with cumin seeds",
    price: 180,
    image: "https://images.pexels.com/photos/6646351/pexels-photo-6646351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "biryani",
    veg: true
  },
  
  // Breads
  {
    id: 13,
    name: "Butter Naan",
    description: "Soft leavened flatbread brushed with butter",
    price: 60,
    image: "https://images.pexels.com/photos/1117862/pexels-photo-1117862.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "breads",
    veg: true
  },
  {
    id: 14,
    name: "Garlic Naan",
    description: "Naan bread topped with garlic and butter",
    price: 70,
    image: "https://images.pexels.com/photos/2689419/pexels-photo-2689419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "breads",
    veg: true
  },
  {
    id: 15,
    name: "Tandoori Roti",
    description: "Whole wheat flatbread baked in tandoor",
    price: 40,
    image: "https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "breads",
    veg: true
  },
  
  // Desserts
  {
    id: 16,
    name: "Gulab Jamun",
    description: "Deep-fried milk solids soaked in sugar syrup",
    price: 120,
    image: "https://images.pexels.com/photos/16111917/pexels-photo-16111917/free-photo-of-traditional-indian-sweet-gulab-jamun.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "desserts",
    veg: true
  },
  {
    id: 17,
    name: "Rasmalai",
    description: "Soft cottage cheese patties in sweetened, thickened milk",
    price: 140,
    image: "https://images.pexels.com/photos/12737674/pexels-photo-12737674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "desserts",
    veg: true
  },
  {
    id: 18,
    name: "Kulfi",
    description: "Traditional Indian ice cream in various flavors",
    price: 130,
    image: "https://images.pexels.com/photos/11266716/pexels-photo-11266716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "desserts",
    veg: true
  }
];