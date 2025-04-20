import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.jpeg';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const { totalItems } = useCart();
  const { t } = useLanguage();
  const { isAuthenticated } = useAuth();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white bg-opacity-90 shadow-md z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src={logo} 
              alt="White Castle" 
              className="h-16 w-16 rounded-full object-cover border-2 border-secondary mr-3"
            />
            <div>
              <h1 className="text-2xl font-serif font-bold text-secondary">White Castle</h1>
              <p className="text-sm text-primary italic">{t('fineDining')}</p>
            </div>
          </Link>
          
          <div className="flex items-center">
            <LanguageSelector />
            
            <nav className="hidden md:flex space-x-6 text-lg ml-6">
              <Link 
                to="/" 
                className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent border-b-2 border-accent' : 'text-secondary'}`}
              >
                {t('home')}
              </Link>
              <Link 
                to="/menu" 
                className={`font-medium hover:text-accent transition-colors ${isActive('/menu') ? 'text-accent border-b-2 border-accent' : 'text-secondary'}`}
              >
                {t('menu')}
              </Link>
              <Link 
                to="/cart" 
                className={`font-medium hover:text-accent transition-colors relative ${isActive('/cart') ? 'text-accent border-b-2 border-accent' : 'text-secondary'}`}
              >
                {t('cart')}
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {totalItems}
                  </span>
                )}
              </Link>
              {/* Mostra il link Admin solo se l'utente è autenticato */}
              {isAuthenticated && (
                <Link 
                  to="/admin" 
                  className={`font-medium hover:text-accent transition-colors ${isActive('/admin') ? 'text-accent border-b-2 border-accent' : 'text-secondary'}`}
                >
                  {t('admin')}
                </Link>
              )}
            </nav>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link 
              to="/cart" 
              className="mr-4 text-secondary hover:text-accent transition-colors relative"
              aria-label={t('cart')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary p-1 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t pt-4">
            <nav className="flex flex-col space-y-3 pb-4">
              <Link 
                to="/" 
                className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : 'text-secondary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('home')}
              </Link>
              <Link 
                to="/menu" 
                className={`font-medium hover:text-accent transition-colors ${isActive('/menu') ? 'text-accent' : 'text-secondary'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('menu')}
              </Link>
              {/* Mostra il link Admin solo se l'utente è autenticato */}
              {isAuthenticated && (
                <Link 
                  to="/admin" 
                  className={`font-medium hover:text-accent transition-colors ${isActive('/admin') ? 'text-accent' : 'text-secondary'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {t('admin')}
                </Link>
              )}
              <div className="pt-2">
                <LanguageSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 