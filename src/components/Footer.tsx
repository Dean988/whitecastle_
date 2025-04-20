import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-white bg-opacity-90 shadow-inner pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-4/12 mb-6 md:mb-0">
            <h2 className="text-lg font-serif font-bold text-secondary mb-2">White Castle</h2>
            <p className="text-sm text-gray-600 mb-4">
              {t('experienceDining')}
            </p>
            <p className="text-sm text-gray-600">
              <strong>{t('address')}:</strong> 123 Gourmet Street, Foodville<br />
              <strong>{t('phone')}:</strong> (123) 456-7890<br />
              <strong>{t('email')}:</strong> info@whitecastle.com
            </p>
          </div>
          
          <div className="w-full md:w-4/12 mb-6 md:mb-0">
            <h2 className="text-lg font-serif font-bold text-secondary mb-2">{t('openingHours')}</h2>
            <ul className="text-sm text-gray-600">
              <li className="mb-1">{t('mondayToThursday')}</li>
              <li className="mb-1">{t('fridayToSaturday')}</li>
              <li className="mb-1">{t('sunday')}</li>
            </ul>
          </div>
          
          <div className="w-full md:w-4/12">
            <h2 className="text-lg font-serif font-bold text-secondary mb-2">{t('quickLinks')}</h2>
            <ul className="text-sm">
              <li className="mb-1">
                <Link to="/" className="text-primary hover:text-accent transition-colors">{t('home')}</Link>
              </li>
              <li className="mb-1">
                <Link to="/menu" className="text-primary hover:text-accent transition-colors">{t('menu')}</Link>
              </li>
              <li className="mb-1">
                <Link to="/cart" className="text-primary hover:text-accent transition-colors">{t('cart')}</Link>
              </li>
              <li className="mb-1">
                <Link to="/admin" className="text-primary hover:text-accent transition-colors">{t('admin')}</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-6 pt-6">
          <p className="text-sm text-center text-gray-500">
            &copy; {new Date().getFullYear()} White Castle. {t('rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 