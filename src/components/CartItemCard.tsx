import React from 'react';
import { CartItem } from '../types';
import { useCart } from '../contexts/CartContext';

interface CartItemCardProps {
  item: CartItem;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { menuItem, quantity } = item;
  
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4 flex items-center">
      {menuItem.imageUrl && (
        <img 
          src={menuItem.imageUrl} 
          alt={menuItem.name} 
          className="w-16 h-16 object-cover rounded-md mr-4"
        />
      )}
      
      <div className="flex-grow">
        <h3 className="text-lg font-medium text-secondary">{menuItem.name}</h3>
        <p className="text-sm text-gray-600 mb-1">{menuItem.description}</p>
        <div className="text-accent font-bold">${menuItem.price.toFixed(2)}</div>
      </div>
      
      <div className="flex items-center">
        <div className="flex items-center border border-gray-300 rounded-md overflow-hidden">
          <button 
            onClick={() => updateQuantity(menuItem.id, quantity - 1)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Diminuisci quantità"
          >
            -
          </button>
          
          <span className="px-3 py-1 border-x border-gray-300 min-w-[40px] text-center">
            {quantity}
          </span>
          
          <button 
            onClick={() => updateQuantity(menuItem.id, quantity + 1)}
            className="px-3 py-1 bg-gray-100 hover:bg-gray-200 transition"
            aria-label="Aumenta quantità"
          >
            +
          </button>
        </div>
        
        <button 
          onClick={() => removeFromCart(menuItem.id)}
          className="ml-3 text-red-500 hover:text-red-700 transition"
          aria-label="Rimuovi prodotto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItemCard; 