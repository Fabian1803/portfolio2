
export default function NavHeader({setValClick} : {setValClick: React.Dispatch<React.SetStateAction<boolean>>}) {
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
  return (
    <ul className="sm:flex gap-5 w-full">
      <li className="font-semibold hover:text-greenbk"><button onClick={() => scrollToSection('home')}>HOME</button></li>
      <li className="font-semibold hover:text-greenlt"><button onClick={() => scrollToSection('projects')}>PROJECTS</button></li>
      <li className="font-semibold hover:text-greenlt"><button onClick={() => scrollToSection('about')}>ABOUT ME</button></li>
      <li className='mt-16 block sm:hidden'>
        <a href="" className='border-b-[1px] border-black text-sm font-semibold'>GITHUB</a>
      </li>
      <li className='block sm:hidden'>
        <a href="" className="border-b-[1px] border-black text-sm font-semibold">buttonEDIN</a>
      </li>
    </ul>
  );
}