export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  imageUrl?: string;
}

export type MenuCategory = 
  | 'lunch' 
  | 'dinner' 
  | 'drinks' 
  | 'beers' 
  | 'wines';

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  totalAmount: number;
  createdAt: string;
  status: OrderStatus;
  customerInfo?: CustomerInfo;
}

export type OrderStatus = 
  | 'pending'
  | 'processing'
  | 'completed'
  | 'cancelled';

export interface CustomerInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface PaymentInfo {
  method: PaymentMethod;
  status: PaymentStatus;
  transactionId?: string;
}

export type PaymentMethod = 'google_pay' | 'credit_card' | 'cash';
export type PaymentStatus = 'pending' | 'completed' | 'failed';

export interface MenuContextType {
  menu: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  removeMenuItem: (id: string) => void;
  getMenuByCategory: (category: MenuCategory) => MenuItem[];
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
} 