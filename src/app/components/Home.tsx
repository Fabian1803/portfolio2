"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faBook, faStarOfLife, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { technology, projects } from "@/app/lib/bd";
import CicleShapes, { RectangularShape, DobleBoxShapes } from "@/app/ui/SvgShapes";
import Image from "next/image";
import LetterCarousel from "@/app/ui/LetterCarousel";
import { AnimateOpacity, AnimationUp1, AnimationUp2, AnimationRight, AnimationLeft } from "@/app/lib/animations";
import { motion } from "framer-motion";
import { useSmallScreen } from "@/app/hooks/useSmallScreen";
import Link from "next/link";
export default function Home() {
    const isSmallScreen = useSmallScreen();
    return (
        <main className="flex flex-col gap-10 lg:gap-14 pb-16" >
            <section className="pt-5 pr-[5%] sm:pr-[10%] pb-5 pl-[5%] sm:pl-[10%] text-xl w-full overflow-hidden" >
                <div>
                    <motion.div  {...AnimationUp2} className="flex gap-1" translate="no">
                        <h2 >Hi! i am </h2><h2 className="border-b-2 border-foreground border-solid font-bold">Fabian</h2>
                    </motion.div>
                </div>
                <div className="flex w-full h-auto mb-5 sm:mb-10  relative">
                    <div className="text-[clamp(1rem,_15vw,_9rem)] text-center m-0 h-full z-10
                    flex items-center justify-star leading-[90%]  font-bold tracking-4">
                        <motion.h1 {...AnimationUp1}>Software<br />Engineer</motion.h1>
                        <div className="flex items-end">
                            <div className="w-[clamp(5rem,_15vw,_7.5rem)] h-[clamp(5rem,_15vw,_7.5rem)] 
                            md:w-[clamp(7.5rem,_9vw,_10rem)] md:h-[clamp(7.5rem,_9vw,_10rem)]
                            absolute top-[70%] left-[75%] sm:left-[85%] md:left-auto z-10">
                                <CicleShapes />
                            </div>
                        </div>
                    </div>
                    <div className=" hidden xl:block absolute left-[85%] top-[-10%] z-10"><RectangularShape w="150px" /></div>
                </div>
                <motion.p
                    {...AnimationUp1}
                    transition={{ delay: 1, duration: .8 }}
                    className=" w-[74%] lg:w-[45%] text-[17px] sm:text-lg 2xl:w-[40%]">
                    I am a <b>Software student</b> and <b>web developer</b> focused on learning about creating efficient websites.
                </motion.p>
                <motion.ul
                    {...AnimationUp1}
                    transition={{ delay: 1, duration: .8 }}
                    className="flex gap-5 text-3xl h-10 mt-8 mb-8">
                    <a href="https://github.com/Fabian1803"><FontAwesomeIcon icon={faGithub} /></a>
                    <li><FontAwesomeIcon icon={faLinkedin} /></li>
                    <a href="mailto:fabianriveraabian3@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                </motion.ul>
                <div className=" mt-10 mb-10">
                    <LetterCarousel />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5" translate="no">
                    {technology.map((list, index) => (
                        <motion.div className="border-2 border-dashed border-quaternary rounded-lg h-14 
                        flex gap-2 justify-center items-center text-quaternary" key={index} {...AnimateOpacity}>
                            <FontAwesomeIcon icon={list.icon} />
                            <p>{list.text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="pt-20 pr-[5%] sm:mr-[5%] pb-20 pl-[5%] sm:ml-[5%] text-[17px] sm:text-lg w-full sm:w-auto bg-quaternary 
            text-primary rounded-2xl overflow-hidden" id="projects">
                <motion.div
                    {...AnimateOpacity}
                    className="flex gap-3 justify-center sm:justify-start items-center">
                    <div className="w-[clamp(4rem,_8vw,_10rem)] h-[clamp(4rem,_8vw,_7rem)]">
                        <DobleBoxShapes />
                    </div>
                    <h1 className="text-[clamp(3rem,_5vw,_7rem)] text-center m-0 h-full  leading-[100%] font-bold">
                        Projects
                    </h1>
                </motion.div>
                {projects.map((list, index) => (
                    <div className="grid md:grid-cols-[40%,60%] grid-rows-[auto,auto] lg:grid-rows-[12%,83%] gap-5 mt-5 mb-5 font-semibold" key={index}>
                        <motion.h2 {...AnimationUp1} className=" text-4xl lg:text-5xl font-bold">{index + 1}. {list.ttl}</motion.h2>
                        <motion.div
                            {...AnimationRight(isSmallScreen)}
                            className=" row-span-2 flex md:w-[97%] justify-items-center h-[50vw] max-h-[350px] md:h-full
                             md:max-h-full items-center ">
                            <div className=" w-full h-full md:h-[30vw] 2xl:h-[23vw] relative ">
                                <Image src={list.img} alt="imagen de proyecto" className=" w-full h-full md:h-[30vw] 2xl:h-[23vw] rounded-lg xl:object-cover" />
                                <Link href={`/projectLetter/${list.ttl}`} className="absolute bg-secondary text-tertiary pr-4 pl-4 pt-3 pb-3 rounded-full 
                                aspect-auto left-[90%] top-[85%] border-2 border-primary">
                                    <FontAwesomeIcon icon={faArrowRight} className="rotate-45" />
                                </Link>
                            </div>
                        </motion.div>
                        <div className="flex flex-col gap-8 items-start ">
                            <motion.p {...AnimationLeft(isSmallScreen)} className="text-justify font-normal ">
                                {list.summary}
                            </motion.p>

                            <ul className="flex gap-2 flex-wrap justify-star">
                                {list.technology.map((tec, index) => (
                                    <motion.li {...AnimateOpacity} className="pt-1 pb-1 pl-3 pr-3 bg-primary text-quaternary rounded-lg " key={index}>
                                        {tec}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                    </div>
                ))}
            </section>

            <section className="sm:pt-5 pr-[5%] sm:pr-[10%] pb-5 sm:pb-16 pl-[5%] sm:pl-[10%] 
            flex flex-col gap-16 overflow-hidden text-[17px] sm:text-lg" id="about">
                <div className="grid lg:grid-cols-[50%,50%] items-center">
                    <motion.div {...AnimationLeft(isSmallScreen)} className="w-full text-center flex gap-2 items-center justify-start  sm:pb-8 lg:p-0">
                        <h2 className=" text-[clamp(4rem,_6vw,_7rem)] font-bold justify-start ">About me </h2>
                        <FontAwesomeIcon icon={faStarOfLife} />
                    </motion.div>
                    <motion.p className="text-justify" {...AnimationRight(isSmallScreen)}>
                        Hello, I&apos;m Fabian Rivera, a Software Engineering student with a special
                        focus on learning and developing dynamic and functional interfaces. Currently,
                        I&apos;m starting my path in frontend development, where I combine design and
                        functionality to create intuitive and engaging web experiences.
                        <br /><br />
                        Right now, I&apos;m dedicated to developing static and dynamic websites, and I&apos;m
                        also exploring the backend and database management. I use technologies such
                        as React, Tailwind, Java, and relational databases, with the aim of continuing
                        to learn and improve my skills. My goal is to continue growing as a professional,
                        bringing creativity and dedication to each project, and contributing to the
                        development of web applications that are functional and effective.
                    </motion.p>
                </div>
                <div className="grid md:grid-cols-[50%,50%] items-center">
                    <motion.h2 {...AnimationLeft(isSmallScreen)} className="w-full text-star text-[clamp(4rem,_5.5vw,_6rem)] font-bold leading-[90%]">
                        Training & Experience
                    </motion.h2>
                    <div className="p-5">
                        <motion.ol {...AnimateOpacity}
                            className="relative border-l-2 border-dashed border-tertiary">
                            <li className="mb-10 ms-6">
                                <span className="absolute flex text-background items-center justify-center w-6 h-6 bg-secondary rounded-md -start-3 ring-4 ring-secondary">
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </span>
                                <h3 className="mb-1 text-lg font-bold text-quaternary">Software Engineering</h3>
                                <motion.time {...AnimationUp1} className="block mb-2 text-sm leading-none text-secondary">2021 - Currently studying</motion.time>
                                <motion.p {...AnimationUp1} className="text-tertiary">I am currently studying Software Engineering at the Technological University of Peru (UTP).</motion.p>
                            </li>
                            <li className="ms-6">
                                <span className="absolute flex text-background items-center justify-center w-6 h-6 bg-secondary rounded-md -start-3 ring-4 ring-secondary">
                                    <FontAwesomeIcon icon={faBook} />
                                </span>
                                <h3 className="mb-1 text-lg font-bold text-quaternary">Freelanding</h3>
                                <motion.time {...AnimationUp1} className="block mb-2 text-sm leading-none text-secondary">2024</motion.time>
                                <motion.p {...AnimationUp1} className="text-tertiary">I started working as a freelancer in my free time, while I pursue my studies.</motion.p>
                            </li>
                        </motion.ol>
                    </div>
                </div>
            </section>
        </main>
    );
}
