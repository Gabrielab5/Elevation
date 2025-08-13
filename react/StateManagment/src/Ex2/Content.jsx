import React from 'react';
import { useTheme } from './ThemeContext';
import Article from './Article';
import Sidebar from './Sidebar';

export default function Content() {
  const {fontSize} = useTheme();
  const size = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';
  
  return (
    <main style={{ fontSize: size }}>
      <Article />
      <Sidebar />
    </main>
  );
}