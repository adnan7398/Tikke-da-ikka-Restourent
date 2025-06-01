import { create } from 'zustand';
import { MenuItem } from '../data/menuData';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  addItem: (item: MenuItem) => {
    const items = get().items;
    const existingItem = items.find(i => i.id === item.id);

    if (existingItem) {
      set({
        items: items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      });
    } else {
      set({ items: [...items, { ...item, quantity: 1 }] });
    }
  },
  removeItem: (itemId: number) => {
    set({ items: get().items.filter(i => i.id !== itemId) });
  },
  updateQuantity: (itemId: number, quantity: number) => {
    set({
      items: get().items.map(i =>
        i.id === itemId
          ? { ...i, quantity: Math.max(0, quantity) }
          : i
      ).filter(i => i.quantity > 0)
    });
  },
  clearCart: () => set({ items: [] }),
  get total() {
    return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },
}));