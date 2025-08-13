import React from 'react';
import { useTheme } from './ThemeContext';

export default function Navigation() {
  const { fontSize } = useTheme();
  const size = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';
  
  return (
    <nav style={{ fontSize: size, marginBottom: '10px' }}>
      <a href="#home">Home</a> | <a href="#about">About</a> | <a href="#contact">Contact</a>
    </nav>
  );
}