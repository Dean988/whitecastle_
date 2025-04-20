import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface GooglePayButtonProps {
  amount: number;
  onPaymentSuccess: () => void;
  onPaymentError: (error: string) => void;
}

const GooglePayButton: React.FC<GooglePayButtonProps> = ({ 
  amount, 
  onPaymentSuccess, 
  onPaymentError 
}) => {
  const { t } = useLanguage();
  const [isProcessing, setIsProcessing] = useState(false);

  // Simula un processo di pagamento con Google Pay
  const handlePaymentClick = () => {
    setIsProcessing(true);
    
    // Simula una chiamata API con un tempo di risposta random tra 1-2 secondi
    setTimeout(() => {
      setIsProcessing(false);
      
      // Simula un successo nel 90% dei casi
      if (Math.random() > 0.1) {
        onPaymentSuccess();
      } else {
        onPaymentError('Payment failed. Please try again.');
      }
    }, 1000 + Math.random() * 1000);
  };

  return (
    <button
      onClick={handlePaymentClick}
      disabled={isProcessing}
      className={`
        w-full py-3 px-4 rounded-md flex items-center justify-center 
        ${isProcessing 
          ? 'bg-gray-300 cursor-not-allowed' 
          : 'bg-black hover:bg-gray-800 cursor-pointer'}
        transition duration-200
      `}
    >
      {isProcessing ? (
        <div className="flex items-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-white">{t('paymentProcessing')}</span>
        </div>
      ) : (
        <>
          <div className="flex items-center mr-3">
            <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.64 11.18H12.65V12.72H22.64C22.64 12.72 22.75 12.18 22.75 11.94C22.75 11.71 22.64 11.18 22.64 11.18Z" fill="#4285F4"/>
              <path d="M12.65 8.75602V10.296H18.69C18.42 9.31302 17.13 7.69302 14.87 7.69302C12.23 7.69302 10.09 9.72402 10.09 12.473C10.09 15.222 12.23 17.254 14.87 17.254C16.67 17.254 17.87 16.442 18.62 15.706L19.77 16.833C18.69 17.897 17.07 19.047 14.87 19.047C11.18 19.047 8.18604 16.163 8.18604 12.473C8.18604 8.78402 11.18 5.90002 14.87 5.90002C17.62 5.90002 19.82 7.61002 20.7 10.034L12.65 8.75602Z" fill="#EA4335"/>
              <path d="M5.94703 11.705C5.50703 11.705 5.06703 11.867 4.73503 12.199L1.25903 15.675C0.59503 16.339 0.59503 17.406 1.25903 18.061C1.92303 18.725 2.99003 18.725 3.64503 18.061L7.12103 14.585C7.78503 13.921 7.78503 12.855 7.12103 12.199C6.79803 11.876 6.37703 11.705 5.94703 11.705Z" fill="#34A853"/>
              <path d="M14.87 7.69299C12.23 7.69299 10.09 9.72399 10.09 12.473C10.09 15.222 12.23 17.253 14.87 17.253C17.51 17.253 19.65 15.222 19.65 12.473C19.65 9.72399 17.51 7.69299 14.87 7.69299ZM14.87 15.665C13.11 15.665 11.68 14.233 11.68 12.473C11.68 10.713 13.11 9.28099 14.87 9.28099C16.63 9.28099 18.06 10.713 18.06 12.473C18.06 14.233 16.63 15.665 14.87 15.665Z" fill="#FBBC04"/>
              <path d="M1.25903 6.88899C0.59503 7.55299 0.59503 8.61999 1.25903 9.27499L4.73503 12.751C5.39903 13.415 6.46603 13.415 7.12103 12.751C7.78503 12.087 7.78503 11.02 7.12103 10.365L3.64503 6.88899C2.98103 6.22499 1.91403 6.22499 1.25903 6.88899Z" fill="#4285F4"/>
            </svg>
          </div>
          <span className="text-white font-medium">{t('googlePay')}</span>
        </>
      )}
    </button>
  );
};

export default GooglePayButton; 