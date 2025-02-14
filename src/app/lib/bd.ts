import { faHtml5, faCss3, faJs, faReact, faJava, faPython, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { title } from 'process';
export const technology = [
    {
        icon: faHtml5,
        text: "Html",
    },
    {
        icon: faCss3,
        text: "CSS",
    },
    {
        icon: faJs,
        text: "JS",
    },
    
    {
        icon: faSass,
        text: "Sass",
    },
    {
        icon: faReact,
        text: "React",
    },
    {
        icon: faJava,
        text: "Java",
    },
    {
        icon: faPython,
        text: "Python",
    },
    {
        icon: faBootstrap,
        text: "BootStrap",
    },
]

export const projects = [
    {
        title: "USC",
        technology: ["Android studio", "Sprint Boot", "Sql Server"],
        img: require("@/app/assets/usc.webp"),
        summary: "I developed a mobile application for USC students where they can access their course content, view assignments, and chat with other students. I used Android Studio for frontend development, SQL Server for the database, and Spring Boot for the backend, creating a useful platform to manage their academic life and facilitate communication between them.",
        repo: "https://github.com/Fabian1803/App_Uni",

        imgFE: require("@/app/assets/uscFE.webp"),
    }
]