import img from "@/app/assets/pre1.jpg";
import Image from "next/image";
export default function ProjectLetter() {
  return (
    <main className="pt-5 pr-[5%] sm:pr-[10%] pb-5 pl-[5%] sm:pl-[10%] text-xl w-full overflow-hidden gap-5 flex flex-col">
      <h1>Titulo</h1>

      <section className="flex gap-4 items-center flex-col sm:flex-row">
        <h2 className="justify-start w-full sm:w-auto">Tecnologias: </h2>
        <div className="flex gap-3">
          <div className="bg-quaternary text-primary pr-3 pl-3 pt-1 pb-1 rounded-lg">Html</div>
          <div className="bg-quaternary text-primary pr-3 pl-3 pt-1 pb-1 rounded-lg">Html</div>
          <div className="bg-quaternary text-primary pr-3 pl-3 pt-1 pb-1 rounded-lg">Html</div>
          <div className="bg-quaternary text-primary pr-3 pl-3 pt-1 pb-1 rounded-lg">Html</div>
        </div>
      </section>
      <section className="flex gap-4 items-center">
        <h2>Github:</h2>
        <a href="asd" className="text-md text-tertiary hover:text-quaternary">este es el link de git</a>
      </section>

      <section>
        <h2>Resumen del proyecto</h2>
        <p> cioakancnlaknnkcnnoieeknalbansmMjqhyhbnpaciaskcman
          cioakancnlaknnkcnnoieeknalbansmMjqhyhbnpaciaskcman
          cioakancnlaknnkcnnoieeknalbansmMjqhyhbnpaciaskcman
          cioakancnlaknnkcnnoieeknalbansmMjqhyhbnpaciaskcman
          cioakancnlaknnkcnnoieeknalbansmMjqhyhbnpaciaskcman
        </p>
        <div className="justify-center w-full flex">
          <Image src={img} alt="imagen de proyecto" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
        </div>
      </section>

      <section>
        <h2>objetivo</h2>
        <p>acascascaac</p>
        <ul>
          <li>adsadadss</li>
        </ul>
      </section>

      <section>
        <h2>Tecnologias usadas</h2>
        <ol>
          <li><p>Frontend:</p><div></div></li>
          <li><p>Backend:</p><div></div></li>
          <li><p>Database:</p><div></div></li>
        </ol>
        <div>
          <h3>diseno de database</h3>
          <div className="justify-center w-full flex">
            <Image src={img} alt="imagen de proyecto" className=" w-full h-full md:w-[90%] lg:w-[70%] rounded-lg" />
          </div>
        </div>
      </section>

      <section>
        <h2>implementacion</h2>
        <ul>
          <li>
            <h3>Frontend</h3>
            <ul>
              <li>axnajcnajlncjnacjlns</li>
            </ul>
          </li>
          <li>
            <h3>backend</h3>
            <ul>
              <li>axnajcnajlncjnacjlns</li>
            </ul>
          </li>
          <li>
            <h3>database</h3>
            <ul>
              <li>axnajcnajlncjnacjlns</li>
            </ul>
          </li>
        </ul>

        <section>
          <h2>Enlace:</h2><p>este es el enlace</p>
        </section>
      </section>
    </main>
  )
}
