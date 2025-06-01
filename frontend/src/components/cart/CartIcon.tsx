import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

interface CartIconProps {
  onClick: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ onClick }) => {
  const items = useCartStore(state => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="relative p-2 text-gray-800 hover:text-red-800 transition"
      aria-label="Shopping cart"
    >
      <ShoppingBag size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-800 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;