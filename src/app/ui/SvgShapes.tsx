import { motion } from "framer-motion";
import { AnimateCircle, AnimateOpacityCircle, AnimateRectangularShape, AnimateRectangularInput } from "@/app/lib/animations";
import { useState } from "react";

interface ShapeProps {
  w: string;
}

const RectangularShape: React.FC<ShapeProps> = ({ w }) => {
  const [animateStade, setAnimateStade] = useState(false);
  return (
    <motion.svg 
    {...animateStade ? AnimateRectangularShape : AnimateRectangularInput}
    width={w} 
    height={parseInt(w) * 1.5} 
    viewBox="0 0 200 300" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    onAnimationComplete={() => {setAnimateStade(true)}}
    className='fill-current text-tertiary'>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M200 4C200 1.79086 198.209 0 196 0H104C101.791 0 100 1.79086 100 4V96C100 98.2091 98.2091 100 96 100H4C1.79086 100 0 101.791 0 104V196C0 198.209 1.79086 200 4 200H96C98.2091 200 100 201.791 100 204V296C100 298.209 101.791 300 104 300H196C198.209 300 200 298.209 200 296V200V100V4Z"
      />
    </motion.svg>
  )
}

const CicleShapes = () => {
  return (
    <div className="relative w-full h-full">
      <motion.svg
        {...AnimateCircle}
        viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-full h-full absolute fill-current text-tertiary">
        <path
          d="M50 4C50 1.79086 51.7938 -0.0166381 53.9959 0.159896C62.4767 0.839776 70.6678 3.67526 77.7785 8.42652C86.001 13.9206 92.4096 21.7295 96.194 30.8658C99.9784 40.0021 100.969 50.0555 99.0393 59.7545C97.11 69.4536 92.348 78.3627 85.3553 85.3553C78.3627 92.348 69.4536 97.11 59.7545 99.0393C50.0555 100.969 40.0021 99.9784 30.8658 96.194C21.7295 92.4096 13.9206 86.001 8.42653 77.7785C3.67527 70.6678 0.839783 62.4767 0.159904 53.9959C-0.0166303 51.7938 1.79087 50 4.00001 50H46C48.2091 50 50 48.2091 50 46V4Z"
        />
      </motion.svg>
      <motion.div
        {...AnimateOpacityCircle}
        className="w-[20%] h-[20%] rounded-full absolute top-[16%] left-[16%] bg-tertiary">
      </motion.div>
    </div>
  )
}

const DobleBoxShapes = () => {
  return (
    <svg viewBox="0 0 196 193" fill="none" xmlns="http://www.w3.org/2000/svg"
      className='w-full h-full fill-current text-secondary'>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37259 0 0 5.37259 0 12V88C0 94.6274 5.37259 100 12 100H88C94.6274 100 100 94.6274 100 88V12C100 5.37259 94.6274 0 88 0H12ZM108 93C101.373 93 96 98.3726 96 105V181C96 187.627 101.373 193 108 193H184C190.627 193 196 187.627 196 181V105C196 98.3726 190.627 93 184 93H108Z"
      />
    </svg>
  );
}

export default CicleShapes
export { RectangularShape, DobleBoxShapes }