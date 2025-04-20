import React, { useState } from 'react';
import { useMenu } from '../contexts/MenuContext';
import { MenuItem, MenuCategory } from '../types';

const AdminPage: React.FC = () => {
  const { menu, addMenuItem, updateMenuItem, removeMenuItem } = useMenu();
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
        <h1 className="text-3xl font-serif font-bold text-secondary mb-8">Menu Administrator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium text-secondary mb-4">
              {editMode === 'add' ? 'Add New Menu Item' : 'Edit Menu Item'}
            </h2>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Item Name
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
                  Description
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
                  Price ($)
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
                  Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                >
                  <option value="lunch">Lunch</option>
                  <option value="dinner">Dinner</option>
                  <option value="drinks">Drinks</option>
                  <option value="beers">Beers</option>
                  <option value="wines">Wines</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="imageUrl" className="block text-gray-700 font-medium mb-2">
                  Image URL (optional)
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
                  {editMode === 'add' ? 'Add Item' : 'Update Item'}
                </button>
                
                {editMode === 'edit' && (
                  <button 
                    type="button" 
                    onClick={resetForm}
                    className="btn-accent"
                  >
                    Cancel Edit
                  </button>
                )}
              </div>
            </form>
          </div>
          
          {/* Current Menu Items */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-medium text-secondary mb-4">Current Menu Items</h2>
            
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
                            aria-label="Edit item"
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
                  No menu items have been added yet.
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