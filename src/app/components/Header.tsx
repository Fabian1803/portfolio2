'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

export default function Header() {
  const [valClick, setValClick] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false); // Estado para saber si es pantalla pequeña

  // Detectar el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Verifica si la pantalla es pequeña (menor a 640px)
      setValClick(false);
    };
    
    setValClick(!valClick);

    handleResize(); // Inicializa el valor cuando el componente se monta
    window.addEventListener("resize", handleResize); // Agrega el listener para cambios de tamaño
    
    return () => window.removeEventListener("resize", handleResize); // Limpia el listener al desmontar el componente
  }, []);

  return (
    <header className="border-2 border-white border-solid w-full h-[80px]">
      <div className="border-2 border-red-500 border-solid w-full h-full flex justify-between items-center pr-[10%] pl-[10%]">
        <h2 className="font-inter text-2xl font-semibold">Fabian.</h2>
        <button onClick={() => setValClick(!valClick)} className="sm:hidden">
          <FontAwesomeIcon
            icon={valClick ? faBars : faXmark}
            className={`text-2xl ${valClick ? 'rotate-0' : 'rotate-90'} transition-transform duration-150`}
          />
        </button>
        {/* Bloque animado solo en pantallas pequeñas */}
        <motion.div
          initial={{
            scale: valClick ? 1 : 0,
            x: valClick ? 0 : "50%",
            y: valClick ? 0 : "-50%",
          }}
          animate={{
            scale: valClick ? 0 : 1,
            x: valClick ? "50%" : 0,
            y: valClick ? "-50%" : 0,
          }}
          transition={{ duration: 0.5 }}
          className={`sm:flex sm:static fixed bg-white sm:bg-black ${valClick ? 'hidden' : 'block'}
                top-[90px] right-[9px] w-[40%] sm:w-auto rounded-lg p-5`}
          style={{
          }}
        >
          <ul className="sm:flex gap-5 w-full">
            <li className="font-semibold hover:text-greenbk"><a href="">HOME</a></li>
            <li className="font-semibold hover:text-greenlt"><a href="">PROJECTS</a></li>
            <li className="font-semibold hover:text-greenlt"><a href="">ABOUT ME</a></li>
            <li className='mt-16 block sm:hidden'>
              <a href="" className='border-b-[1px] border-black'>GITHUB</a>
            </li>
            <li className='block sm:hidden'>
              <a href="">LINKEDIN</a>
            </li>
          </ul>
        </motion.div>
      </div>
    </header>
  );
}
