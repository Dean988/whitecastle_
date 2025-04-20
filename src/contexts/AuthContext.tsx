import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// In un'app reale, queste credenziali sarebbero memorizzate in un database sicuro
// e verificate tramite una chiamata API backend con crittografia
const validateCredentials = (username: string, password: string): boolean => {
  // Questa è solo una simulazione. In produzione, useresti una variabile d'ambiente
  // Le credenziali non dovrebbero mai essere hardcoded nel codice
  // Ad esempio, process.env.REACT_APP_ADMIN_USERNAME e process.env.REACT_APP_ADMIN_PASSWORD
  const validUsername = "admin"; // In produzione: process.env.REACT_APP_ADMIN_USERNAME
  const validPassword = "whitecastle2023"; // In produzione: process.env.REACT_APP_ADMIN_PASSWORD
  
  return username === validUsername && password === validPassword;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Controlla se l'utente è già autenticato all'avvio
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        setIsAuthenticated(true);
      }
      setLoading(false);
    };
    
    checkAuth();
  }, []);
  
  const login = async (username: string, password: string): Promise<boolean> => {
    try {
      // Simula una chiamata API con un ritardo di 1 secondo
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const isValid = validateCredentials(username, password);
      
      if (isValid) {
        // In un'app reale, riceveresti un token JWT dal server
        // Qui stiamo semplicemente simulando un token
        const mockToken = "simulated-jwt-token";
        localStorage.setItem('authToken', mockToken);
        setIsAuthenticated(true);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  
  const logout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };
  
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}; 