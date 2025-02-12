'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarOfLife, faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
const LetterCarousel = () => {
  const items = [];
  for (let i = 0; i < 24; i++) {
    items.push(
      <React.Fragment key={i}>
        <p className="text-lg mx-5 items-center gap-2 flex font-semibold">
          TECHNOLOGYS
          <FontAwesomeIcon icon={faStarOfLife} className="text-[15px]" />
        </p>
        <p className="text-xl mx-5">
          <FontAwesomeIcon icon={faArrowRightLong} className="scale-x-150 transform" />
        </p>
      </React.Fragment>
    );
  }
  return (
    <div className="overflow-hidden w-full" translate='no'>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 10,
            ease: 'linear',
          },
        }}
      >
        <div className="flex">
          {items}
        </div>
      </motion.div>
    </div>
  );
};

export default LetterCarousel;
