import React, { useState } from 'react';
import MenuItemCard from '../components/MenuItemCard';
import { useMenu } from '../contexts/MenuContext';
import { useLanguage } from '../contexts/LanguageContext';
import { MenuCategory } from '../types';

const MenuPage: React.FC = () => {
  const { getMenuByCategory } = useMenu();
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('lunch');
  
  const categories: { id: MenuCategory; label: string }[] = [
    { id: 'lunch', label: t('lunch') },
    { id: 'dinner', label: t('dinner') },
    { id: 'drinks', label: t('drinks') },
    { id: 'beers', label: t('beers') },
    { id: 'wines', label: t('wines') }
  ];
  
  const menuItems = getMenuByCategory(activeCategory);
  
  return (
    <div className="py-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-bold text-secondary mb-4">{t('ourMenu')}</h1>
        <p className="text-xl text-primary">
          {t('exploreMenu')}
        </p>
      </div>
      
      {/* Category Tabs */}
      <div className="flex justify-center mb-8 overflow-x-auto">
        <div className="flex p-1 bg-white bg-opacity-80 rounded-lg shadow">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-accent text-white'
                  : 'text-secondary hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.length > 0 ? (
          menuItems.map((item) => (
            <MenuItemCard key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500 text-lg">
              {t('noItems')}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage; 
 