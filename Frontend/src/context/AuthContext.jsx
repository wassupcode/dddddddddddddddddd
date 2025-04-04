import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. Создаем контекст
const AuthContext = createContext();

// 2. Создаем провайдер
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Проверка аутентификации при загрузке
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('ai-assistant-user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error('Failed to parse user data:', error);
      localStorage.removeItem('ai-assistant-user');
    } finally {
      setLoading(false);
    }
  }, []);

  const login = (userData) => {
    try {
      setUser(userData);
      localStorage.setItem('ai-assistant-user', JSON.stringify(userData));
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    try {
      setUser(null);
      localStorage.removeItem('ai-assistant-user');
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  // 3. Мемоизируем значение контекста
  const contextValue = useMemo(() => ({
    user,
    loading,
    login,
    logout
  }), [user, loading]);

  return (
    <AuthContext.Provider value={contextValue}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// 4. Кастомный хук с проверкой
export const useAuth = () => {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
};