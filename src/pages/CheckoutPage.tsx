import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useCart } from '../contexts/CartContext';
import GooglePayButton from '../components/GooglePayButton';
import { CartItem, CustomerInfo } from '../types';

interface LocationState {
  cartItems: CartItem[];
  totalAmount: number;
}

const CheckoutPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { clearCart } = useCart();
  
  // Recupera i dati del carrello passati tramite state
  const state = location.state as LocationState;
  const { cartItems = [], totalAmount = 0 } = state || {};
  
  // Tutti gli useState devono essere chiamati prima di qualsiasi condizionale
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    phone: '',
    address: '',
    notes: ''
  });
  
  // Usa useEffect per il reindirizzamento condizionale
  useEffect(() => {
    if (!state || !cartItems || cartItems.length === 0) {
      navigate('/cart');
    }
  }, [navigate, cartItems, state]);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    // In un'app reale, qui invieresti i dati dell'ordine al server
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };
  
  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    setErrorMessage(error);
  };
  
  // Aggiungiamo un render condizionale dopo tutti gli hooks
  if (!state || !cartItems || cartItems.length === 0) {
    return null; // Renderizza null mentre il reindirizzamento sta avvenendo
  }
  
  if (paymentStatus === 'success') {
    return (
      <div className="py-16 max-w-lg mx-auto text-center">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
          <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-serif font-bold text-secondary mb-4">{t('orderConfirmed')}</h1>
          <p className="text-gray-600 mb-8">
            {t('orderConfirmedMessage')}
          </p>
          <Link to="/" className="btn-primary inline-block">
            {t('backToMenu')}
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-secondary mb-2">{t('checkout')}</h1>
          <p className="text-gray-600">{t('orderDetails')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium text-secondary mb-4">{t('deliveryAddress')}</h2>
            
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('itemName')}*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('email')}*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('phone')}*
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={customerInfo.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('deliveryAddress')}*
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  {t('description')}
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={customerInfo.notes}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 mb-4">
              <h2 className="text-xl font-medium text-secondary mb-4">{t('orderSummary')}</h2>
              
              <div className="space-y-3 mb-4">
                {cartItems.map(item => (
                  <div key={item.menuItem.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium text-secondary">
                        {item.quantity} x {item.menuItem.name}
                      </p>
                      <p className="text-sm text-gray-500">{item.menuItem.description.substring(0, 60)}...</p>
                    </div>
                    <div className="font-medium">
                      ${(item.menuItem.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 pt-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">{t('subtotal')}</span>
                  <span className="font-medium">${(totalAmount - (totalAmount * 0.08) - 3.99).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">{t('tax')}</span>
                  <span className="font-medium">${(totalAmount * 0.08).toFixed(2)}</span>
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
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-medium text-secondary mb-4">{t('paymentMethods')}</h2>
              
              {paymentStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
                  {t('paymentError')} {errorMessage}
                </div>
              )}
              
              <div className="mb-3">
                <GooglePayButton
                  amount={totalAmount}
                  onPaymentSuccess={handlePaymentSuccess}
                  onPaymentError={handlePaymentError}
                />
              </div>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                * Questo è solo un esempio. In un'applicazione reale, userebbero il sistema di pagamento di Google.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage; 