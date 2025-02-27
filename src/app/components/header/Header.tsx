'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion } from "framer-motion";
import { useSmallScreen } from "@/app/hooks/useSmallScreen";
import NavHeader from './NavHeader';
import { AnimationUp1 } from "@/app/lib/animations";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [valClick, setValClick] = useState(true);
  const isSmallScreen = useSmallScreen();
  const pathname = usePathname();
  const animateHeaderMobile = {
    initial: {
      scale: 0,
      x: 0,
      y: 0,
    },
    animate: {
      scale: valClick ? 0 : 1,
      x: valClick ? "50%" : 0,
      y: valClick ? "-50%" : 0,
    },
    transition: { 
      duration: 0.5 
    }
  };

  return (
    <header className="w-full h-[60px] sm:h-[70px] lg:h-[80px] sticky top-0 bg-secondary z-50 border-b-2 border-solid border-quaternary">
      <motion.div {...AnimationUp1}
        className="w-full h-[100%] z-50 flex justify-between items-center pr-[10%] pl-[10%]">
        <Link href="/" className="text-2xl font-bold">
          {isSmallScreen ? 'Fbn.' : 'Fabian.'}
        </Link>
        <button onClick={() => setValClick(!valClick)} className="sm:hidden">
          <FontAwesomeIcon
            icon={valClick ? faBars : faXmark}
            className={`text-2xl ${valClick ? 'rotate-0' : 'rotate-90'} transition-transform duration-150`}
          />
        </button>

        {isSmallScreen ? (
          <motion.div
            {...animateHeaderMobile}
            className="fixed bg-secondary top-[60px] right-[0px] w-[40%] rounded-lg p-5 m-2 z-50">
            <NavHeader setValClick={setValClick} pathname={pathname} />
          </motion.div>
        ) : (
          <div className="p-5">
            <NavHeader setValClick={setValClick} pathname={pathname} />
          </div>
        )}
      </motion.div>
    </header>
  );
}
