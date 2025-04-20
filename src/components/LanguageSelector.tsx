import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Chiudi il dropdown quando si clicca fuori
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-gray-900 py-2 px-3 rounded-md hover:bg-gray-100"
        aria-expanded={isOpen}
        aria-label={t('language')}
      >
        <span className="mr-1">{language === 'it' ? '🇮🇹' : '🇬🇧'}</span>
        <span>{t('language')}</span>
        <svg className="h-4 w-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 border border-gray-200">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => {
                setLanguage('it');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm ${language === 'it' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'} hover:bg-gray-100 flex items-center`}
              role="menuitem"
            >
              <span className="mr-2">🇮🇹</span> {t('italian')}
            </button>
            <button
              onClick={() => {
                setLanguage('en');
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 text-sm ${language === 'en' ? 'bg-gray-100 text-gray-900 font-medium' : 'text-gray-700'} hover:bg-gray-100 flex items-center`}
              role="menuitem"
            >
              <span className="mr-2">🇬🇧</span> {t('english')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 