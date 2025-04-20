import React, { createContext, useState, useContext, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MenuItem, MenuCategory, MenuContextType } from '../types';
import { sampleMenuItems } from '../utils/sampleData';

// Create context with default value
const MenuContext = createContext<MenuContextType | undefined>(undefined);

// Provider component
export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menu, setMenu] = useState<MenuItem[]>(sampleMenuItems);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem = { ...item, id: uuidv4() };
    setMenu(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id: string, updatedFields: Partial<MenuItem>) => {
    setMenu(prev => 
      prev.map(item => item.id === id ? { ...item, ...updatedFields } : item)
    );
  };

  const removeMenuItem = (id: string) => {
    setMenu(prev => prev.filter(item => item.id !== id));
  };

  const getMenuByCategory = (category: MenuCategory) => {
    return menu.filter(item => item.category === category);
  };

  const value = {
    menu,
    addMenuItem,
    updateMenuItem,
    removeMenuItem,
    getMenuByCategory
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
};

// Custom hook for using this context
export const useMenu = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}; 