import React from 'react';
import { Link } from 'react-router-dom';
import CartItemCard from '../components/CartItemCard';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';

const CartPage: React.FC = () => {
  const { cart, totalItems, totalPrice, clearCart } = useCart();
  const { t } = useLanguage();
  
  if (totalItems === 0) {
    return (
      <div className="py-16 max-w-lg mx-auto text-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-serif font-bold text-secondary mb-4">{t('emptyCart')}</h1>
          <p className="text-gray-600 mb-8">
            {t('emptyCartDesc')}
          </p>
          <Link to="/menu" className="btn-primary inline-block">
            {t('browseMenu')}
          </Link>
        </div>
      </div>
    );
  }
  
  // Calcolo del totale includendo tasse e consegna
  const taxAmount = totalPrice * 0.08;
  const deliveryFee = 3.99;
  const finalTotal = totalPrice + taxAmount + deliveryFee;
  
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-secondary">{t('yourCart')}</h1>
          <button 
            onClick={clearCart} 
            className="text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            {t('clearCart')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mb-8">
          {cart.map((item) => (
            <CartItemCard key={item.menuItem.id} item={item} />
          ))}
        </div>
        
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium text-secondary">{t('orderSummary')}</h2>
            <span className="text-primary">{totalItems} {t('items')}</span>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">{t('subtotal')}</span>
              <span className="font-medium">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">{t('tax')}</span>
              <span className="font-medium">${taxAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">{t('delivery')}</span>
              <span className="font-medium">$3.99</span>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-4 mb-6">
            <div className="flex justify-between">
              <span className="text-lg font-bold text-secondary">{t('total')}</span>
              <span className="text-lg font-bold text-accent">
                ${finalTotal.toFixed(2)}
              </span>
            </div>
          </div>
          
          <Link 
            to="/checkout" 
            state={{ cartItems: cart, totalAmount: finalTotal }}
            className="btn-primary w-full py-3 text-lg font-medium flex items-center justify-center"
          >
            {t('checkout')}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 