'use client';
import img from "@/app/assets/pre1.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faGithub } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { AnimationUp1, AnimationUp2, AnimateOpacity } from "@/app/lib/animations";
import { useParams } from 'next/navigation';
import { projects } from "@/app/lib/bd";
export default function ProjectLetter() {
  const { id } = useParams();
  const project = projects.find((proy) => proy.title === id);
  if (!project) return <h1>Proyecto no encontrado</h1>;
  return (
    <main className="pt-9 pr-[5%] sm:pr-[10%] pb-16 pl-[5%] sm:pl-[10%] 
    text-xl w-full overflow-hidden gap-10 flex flex-col">
      <section className="flex flex-col gap-2">
        <motion.h1 {...AnimationUp2} className="text-6xl font-bold">{project.title}</motion.h1>
        <motion.div
          {...AnimationUp1}
          className="flex gap-2 items-center flex-col sm:flex-row">
          <h2 className="justify-start w-full sm:w-auto">Technologies: </h2>
          <div className="flex gap-3">
            {project.technology.map((list, index)=>(
              <div className="bg-quaternary text-primary pr-3 pl-3 rounded-lg text-[14px]" key={index}>{list}</div>
            ))}
          </div>
        </motion.div>

      </section>
      <motion.section
        {...AnimationUp1}
        transition={{ delay: 1, duration: .8 }}
        className="flex gap-4 items-center">
        <h2>Github:</h2>
        <a href={project.repo} className="text-md text-tertiary hover:text-quaternary">{project.repo}</a>
      </motion.section>

      <section className="flex flex-col gap-4">
        <motion.h2 {...AnimationUp2} className="text-3xl font-bold">Project Summary</motion.h2>
        <motion.p {...AnimationUp1} className="text-justify mb-2 text-md">{project.summary}</motion.p>
        <motion.div {...AnimationUp1} className="justify-center w-full flex">
          <Image src={project.img} alt="imagen de proyecto" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
        </motion.div>
      </section>

      <section className=" flex flex-col gap-5">
        <motion.h2 {...AnimationUp2} className="text-3xl font-bold">Objective</motion.h2>
        <motion.p {...AnimationUp1}>acascascaac</motion.p>
        <ul className="pl-6">
          <motion.li {...AnimationUp1} className="relative pl-4">
            <span className="absolute left-0 text-quaternary text-2xl">•</span>
            adsadadss lols objetivos lalala
          </motion.li>
          <motion.li {...AnimationUp1} className="relative pl-4">
            <span className="absolute left-0 text-quaternary text-2xl">•</span>
            adsadadss lols objetivos lalala
          </motion.li>
        </ul>
      </section>

      <section className="flex flex-col gap-4" id="tech">
        <motion.h2 {...AnimationUp2} className="text-3xl font-bold">Technologies Used</motion.h2>
        <ol>
          <motion.li {...AnimationUp1} className="flex gap-2">
            <p>Database:</p><div className="text-3xl"><FontAwesomeIcon icon={faHtml5} /></div>
          </motion.li>
          <motion.li {...AnimationUp1} className="flex gap-2">
            <p>Back-end:</p><div className="text-3xl"><FontAwesomeIcon icon={faHtml5} /></div>
          </motion.li>
          <motion.li {...AnimationUp1} className="flex gap-2">
            <p>Front-end:</p><div className="text-3xl"><FontAwesomeIcon icon={faHtml5} /></div>
          </motion.li>
        </ol>
        <div className="flex flex-col gap-4">
          <motion.h3 {...AnimationUp2} className="text-3xl font-bold">Database Design</motion.h3>
          <motion.div {...AnimationUp1} className="justify-center w-full flex">
            <Image src={img} alt="imagen de proyecto" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <motion.h3 {...AnimationUp2} className="text-3xl font-bold">Back-end Design:</motion.h3>
          <motion.div {...AnimationUp1} className="justify-center w-full flex">
            <Image src={img} alt="imagen de proyecto" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
          </motion.div>
        </div>
        <div className="flex flex-col gap-4">
          <motion.h3 {...AnimationUp2} className="text-3xl font-bold">Front-end Design:</motion.h3>
          <motion.div {...AnimationUp1} className="justify-center w-full flex">
            <Image src={project.imgFE} alt="imagen front-end" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
          </motion.div>
        </div>
      </section>

      <section className="flex flex-col gap-4 " id="stack">
        <motion.h2 {...AnimationUp2} className="text-3xl font-bold">Implementation</motion.h2>
        <div className="flex flex-col gap-4">
          <motion.div {...AnimationUp1}>
            <h3>Database</h3>
            <ul className="pl-4">
              <li className="relative pl-4">
                <span className="absolute left-0 text-quaternary text-2xl">•</span>
                adsadadss lols objetivos lalala
              </li>
            </ul>
          </motion.div>
          <motion.div {...AnimationUp1}>
            <h3>Back-end</h3>
            <ul className="pl-4">
              <li className="relative pl-4">
                <span className="absolute left-0 text-quaternary text-2xl">•</span>
                adsadadss lols objetivos lalala
              </li>
            </ul>
          </motion.div>
          <motion.div {...AnimationUp1}>
            <h3>Front-end</h3>
            <ul className="pl-4">
              <li className="relative pl-4">
                <span className="absolute left-0 text-quaternary text-2xl">•</span>
                adsadadss lols objetivos lalala
              </li>
            </ul>
          </motion.div>
        </div>

        <section id="enlace" className="pb-3 pt-5">
          <motion.a 
          {...AnimateOpacity}
          href={project.repo}
          className="border-2 border-solid border-quaternary rounded-md pr-4 pl-4 pt-1 pb-1 
          bg-secondary text-quaternary text-[15px] font-bold items-center flex w-min">
            Repository <FontAwesomeIcon icon={faGithub} className="ml-2 text-xl"/>
          </motion.a>
        </section>
      </section>
      
    </main>
  )
}
