import React from "react";
const NavHeader = React.memo(({ setValClick, pathname }: 
  { setValClick: React.Dispatch<React.SetStateAction<boolean>>, pathname: string }) => {
  const isActive = (link: string) => pathname === link;
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setValClick(true);
  };

  const list = [
    { label1: 'HOME', label2: 'hol1', section1: 'home', section2: '###' },
    { label1: 'PROJECTS', label2: 'hol1', section1: 'projects', section2: '###' },
    { label1: 'ABOUT ME', label2: 'hol1', section1: 'about', section2: 'enlace' },
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
