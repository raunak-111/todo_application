import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';
import { Sun, Moon } from 'lucide-react';
import { RootState } from '../store/types';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };
  
  return (
    <button 
      onClick={handleToggleTheme}
      className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center"
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-primary-foreground" />
      ) : (
        <Sun size={20} className="text-primary-foreground" />
      )}
    </button>
  );
};

export default ThemeToggle;
