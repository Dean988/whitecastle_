import React, { useState } from 'react';
import { useMenu } from '../contexts/MenuContext';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { MenuItem, MenuCategory } from '../types';
import LoginForm from '../components/LoginForm';

const AdminPage: React.FC = () => {
  const { menu, addMenuItem, updateMenuItem, removeMenuItem } = useMenu();
  const { isAuthenticated, logout, loading } = useAuth();
  const { t } = useLanguage();
  const [editMode, setEditMode] = useState<'add' | 'edit'>('add');
  const [editItemId, setEditItemId] = useState<string | null>(null);
  
  const initialFormState = {
    name: '',
    description: '',
    price: '',
    category: 'lunch' as MenuCategory,
    imageUrl: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);
  
  // Se l'autenticazione è in caricamento, mostra un loader
  if (loading) {
    return (
      <div className="py-16 flex justify-center">
        <div className="spinner-border text-primary" role="status">
          <svg className="animate-spin h-10 w-10 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
    );
  }
  
  // Se l'utente non è autenticato, mostra il form di login
  if (!isAuthenticated) {
    return <LoginForm />;
  }
  
  const resetForm = () => {
    setFormData(initialFormState);
    setEditMode('add');
    setEditItemId(null);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleEditItem = (item: MenuItem) => {
    setFormData({
      name: item.name,
      description: item.description,
      price: item.price.toString(),
      category: item.category,
      imageUrl: item.imageUrl || ''
    });
    setEditMode('edit');
    setEditItemId(item.id);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const itemData = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      category: formData.category,
      imageUrl: formData.imageUrl || undefined
    };
    
    if (editMode === 'add') {
      addMenuItem(itemData);
    } else if (editMode === 'edit' && editItemId) {
      updateMenuItem(editItemId, itemData);
    }
    
    resetForm();
  };
  
  return (
    <div className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-secondary">{t('menuAdmin')}</h1>
          <button 
            onClick={logout}
            className="text-red-500 hover:text-red-700 transition-colors font-medium"
          >
            {t('logout')}
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium text-secondary mb-4">
              {editMode === 'add' ? t('addNewItem') : t('editItem')}
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  {t('itemName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">
                  {t('description')}
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  rows={3}
                  required
                ></textarea>
              </div>
              
              <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-medium mb-2">
                  {t('price')}
                </label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-medium mb-2">
                  {t('category')}
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="lunch">{t('lunch')}</option>
                  <option value="dinner">{t('dinner')}</option>
                  <option value="drinks">{t('drinks')}</option>
                  <option value="beers">{t('beers')}</option>
                  <option value="wines">{t('wines')}</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
                  {t('imageUrl')}
                </label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  value={formData.imageUrl}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="flex space-x-3">
                <button 
                  type="submit" 
                  className="btn-primary flex-grow"
                >
                  {editMode === 'add' ? t('addItem') : t('updateItem')}
                </button>
                
                {editMode === 'edit' && (
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="btn-accent"
                  >
                    {t('cancelEdit')}
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Current Menu Items */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium text-secondary mb-4">{t('currentItems')}</h2>
            
            <div className="overflow-auto max-h-[500px]">
              {menu.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {menu.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium text-secondary">{item.name}</h3>
                          <p className="text-sm text-gray-600">{item.description.substring(0, 60)}...</p>
                          <div className="text-xs text-gray-500 mt-1">
                            <span className="bg-gray-200 rounded-full px-2 py-1 mr-2">
                              {item.category}
                            </span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditItem(item)}
                            className="text-blue-500 hover:text-blue-700"
                            aria-label={t('editItem')}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => removeMenuItem(item.id)}
                            className="text-red-500 hover:text-red-700"
                            aria-label="Delete item"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  {t('noItemsAdded')}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage; 