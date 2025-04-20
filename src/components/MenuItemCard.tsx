import React from 'react';
import { MenuItem } from '../types';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  return (
    <div className="menu-card flex flex-col h-full">
      {item.imageUrl && (
        <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
          <img 
            src={item.imageUrl} 
            alt={item.name} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-medium text-secondary">{item.name}</h3>
          <span className="font-bold text-accent">${item.price.toFixed(2)}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{item.description}</p>
      </div>
      
      <button 
        onClick={() => addToCart(item)}
        className="btn-primary mt-auto w-full flex items-center justify-center"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5 mr-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
          />
        </svg>
        {t('addToCart')}
      </button>
    </div>
  );
};

export default MenuItemCard; 