import { Moon, Sun } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // Access localStorage only when the component has mounted
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme ?? 'light');
  }, []);

  const handleClick = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button onClick={handleClick}>{theme === 'light' ? <Sun /> : <Moon />}</button>
  );
};

export default ThemeToggle;
