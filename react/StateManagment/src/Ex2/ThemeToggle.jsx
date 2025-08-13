import React from 'react';
import { useTheme } from './ThemeContext';

export default function ThemeToggle() {

  const { theme, setTheme } = useTheme();
    return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}