'use client';
import { useEffect, useState } from 'react';
export default function Header() {
    const [darkMode, setDarkMode] = useState(false);

  // Para cargar la preferencia de color al iniciar
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  // Cambiar el modo oscuro
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString()); // Guardar la preferencia
  };

  useEffect(() => {
    // Cambiar la clase en el body para alternar entre 'dark' y 'light'
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
    return (
        <header className="border-2 border-white border-solid w-full h-16">
            <div className="contHeader border-2 border-red-500 border-solid w-full h-full flex justify-between items-center">
                <h2>Logo</h2>
                <div className="flex">
                    <button onClick={toggleDarkMode}>no se</button>
                    <ul className="flex">
                        <li>Home</li>
                        <li>proyectos</li>
                        <li>laravel</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}