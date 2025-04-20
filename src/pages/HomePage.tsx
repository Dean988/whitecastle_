import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const HomePage: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="py-12">
      <div className="max-w-4xl mx-auto text-center bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mb-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
          {t('welcomeTo')}
        </h1>
        <p className="text-xl text-primary mb-8">
          {t('experienceDining')}
        </p>
        <div className="prose lg:prose-lg mx-auto text-gray-700 mb-8">
          <p>
            {t('description1')}
          </p>
          <p>
            {t('description2')}
          </p>
        </div>
        <Link to="/menu" className="btn-primary text-lg px-8 py-3 inline-block">
          {t('viewMenu')}
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-3">{t('todaysSpecial')}</h2>
          <p className="text-gray-700 mb-4">
            {t('specialDescription')}
          </p>
          <Link to="/menu" className="text-accent hover:text-secondary transition-colors font-medium">
            {t('viewTodaysSpecial')}
          </Link>
        </div>
        
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-3">{t('openingHours')}</h2>
          <ul className="text-gray-700 space-y-1 mb-4">
            <li>{t('mondayToThursday')}</li>
            <li>{t('fridayToSaturday')}</li>
            <li>{t('sunday')}</li>
          </ul>
          <p className="text-accent font-medium">{t('reservationsRecommended')}</p>
        </div>
        
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 text-center">
          <h2 className="text-2xl font-serif font-bold text-secondary mb-3">{t('onlineOrdering')}</h2>
          <p className="text-gray-700 mb-4">
            {t('orderOnlineDesc')}
          </p>
          <Link to="/menu" className="btn-accent inline-block">
            {t('orderNow')}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage; 