'use client';
import { useState } from 'react';
import {Sidebar } from '@/components/ui/sidebar; 

export default function Sidebar() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
    setDarkMode(!darkMode);
  };

  return (
   
    <div className="fixed left-4 top-28 flex flex-col gap-4 z-20">
      <button className="bg-white dark:bg-gray-800 shadow p-2 rounded">PT</button>
      <button
        onClick={toggleDark}
        className="bg-white dark:bg-gray-800 shadow p-2 rounded"
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </div>
    
  );
}
