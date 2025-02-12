'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { motion } from "framer-motion";
import { AnimationLeft, AnimationRight, AnimationUp1 } from "@/app/lib/animations";
import { useSmallScreen } from "@/app/hooks/useSmallScreen";
export default function Footer() {
    const isSmallScreen = useSmallScreen();
    return (
        <footer className="pt-5 pr-[5%] sm:pr-[10%] pb-5 pl-[5%] sm:pl-[10%]" >
            <div className=" grid sm:grid-cols-[70%,30%]">
                <div className="">
                    <motion.h2 {...AnimationLeft(isSmallScreen)}
                        className="font-inter h-auto text-[clamp(1rem,_9vw,_10rem)] sm:text-[clamp(3rem,_4.5vw,_5rem)] font-semibold leading-[90%] pb-9">
                            Let&apos;s work together
                    </motion.h2>
                    <motion.button
                        whileInView={{x: [50, 0]}}
                        transition={{ duration: 1}}
                        className="bg-secondary pr-5 pl-5 pt-2 pb-2 rounded-md border-2 border-solid border-quaternary">
                        Contact me <FontAwesomeIcon icon={faArrowRight} className='-rotate-45' />
                    </motion.button>
                </div>
                <motion.div {...AnimationRight(isSmallScreen)} className="flex flex-col mt-10 mb-10 sm:m-0">
                    <h3 className='text-[22px] font-semibold '>Social networks</h3>
                    <a href="https://github.com/Fabian1803" className='hover:border-l-2 border-quaternary hover:pl-1'>GITHUB</a>
                    <a href="" className='hover:border-l-2 border-quaternary hover:pl-1'>LINKEDIN</a>
                </motion.div>
            </div>
            <motion.div 
            {...AnimationUp1}
            className=" text-[clamp(2rem,_12vw,_15rem)] sm:text-[clamp(4rem,_11vw,_15rem)] text-center font-semibold tracking-4">Fabian Rivera</motion.div>
            <div className="flex justify-between ">
                <p className='break-words text-sm'>&copy; FABIAN. ALL RIGHTS RESERVED.</p>
                <p className='break-words'>Lima, 2025</p>
            </div>
        </footer>
    )
}
