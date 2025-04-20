import { MenuItem } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const sampleMenuItems: MenuItem[] = [
  // Lunch items
  {
    id: uuidv4(),
    name: 'Grilled Chicken Salad',
    description: 'Fresh greens with grilled chicken, avocado, and house dressing',
    price: 12.99,
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Castle Burger',
    description: 'Angus beef patty with lettuce, tomato, cheese, and special sauce',
    price: 15.99,
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Pasta Primavera',
    description: 'Fresh seasonal vegetables with pasta in a light cream sauce',
    price: 13.99,
    category: 'lunch',
    imageUrl: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  
  // Dinner items
  {
    id: uuidv4(),
    name: 'Filet Mignon',
    description: '8oz filet cooked to perfection with garlic mashed potatoes and asparagus',
    price: 29.99,
    category: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1546241072-48010ad2862c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Grilled Salmon',
    description: 'Atlantic salmon with lemon butter sauce, wild rice, and seasonal vegetables',
    price: 24.99,
    category: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Vegetable Risotto',
    description: 'Creamy arborio rice with seasonal vegetables and parmesan',
    price: 18.99,
    category: 'dinner',
    imageUrl: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  
  // Drinks
  {
    id: uuidv4(),
    name: 'Strawberry Lemonade',
    description: 'Fresh-squeezed lemonade with strawberry puree',
    price: 4.99,
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1587888637140-849b25d80ef9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Iced Tea',
    description: 'House-brewed black tea with optional sweetener',
    price: 3.99,
    category: 'drinks',
    imageUrl: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  
  // Beers
  {
    id: uuidv4(),
    name: 'Castle Lager',
    description: 'House-brewed lager with mild hop profile',
    price: 6.99,
    category: 'beers',
    imageUrl: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'Royal IPA',
    description: 'India Pale Ale with citrus notes and hoppy finish',
    price: 7.99,
    category: 'beers',
    imageUrl: 'https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  
  // Wines
  {
    id: uuidv4(),
    name: 'Castle Cabernet',
    description: 'Full-bodied red wine with notes of black cherry and oak',
    price: 9.99,
    category: 'wines',
    imageUrl: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: uuidv4(),
    name: 'White Castle Chardonnay',
    description: 'Crisp white wine with hints of apple and vanilla',
    price: 8.99,
    category: 'wines',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
]; 