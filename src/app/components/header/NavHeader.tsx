import React from "react";
import { useSmallScreen } from "@/app/hooks/useSmallScreen";
const NavHeader = React.memo(({ setValClick, pathname }:
  { setValClick: React.Dispatch<React.SetStateAction<boolean>>, pathname: string }) => {
  const isSmallScreen = useSmallScreen();
  const isActive = (link: string) => pathname === link;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offset = (isActive('/') ? 1 : (isSmallScreen ? 2: 3)) * 37.795275591;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
    setValClick(true);
  };

  const list = [
    { label1: 'HOME', label2: 'START', section1: 'home', section2: 'home' },
    { label1: 'PROJECTS', label2: 'TECH', section1: 'projects', section2: 'tech' },
    { label1: 'ABOUT ME', label2: 'STACK', section1: 'about', section2: 'stack' },
  ];
  return (
    <ul className="sm:flex gap-5 w-full">
      {list.map((lis, index) => (
        <li key={index} className="font-semibold">
          <button onClick={() => scrollToSection(isActive('/') ? lis.section1 : lis.section2)}>
            {isActive('/') ? lis.label1 : lis.label2}
          </button>
        </li>
      ))}
      <li className='mt-16 block sm:hidden'>
        <a href="" className='border-b-[1px] border-quaternary text-sm font-semibold'>GITHUB</a>
      </li>
      <li className='block sm:hidden'>
        <a href="" className="border-b-[1px] border-quaternary text-sm font-semibold">LINKEDIN</a>
      </li>
    </ul>
  );
});
NavHeader.displayName = "NavHeader";
export default NavHeader;
