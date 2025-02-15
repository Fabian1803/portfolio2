import { faHtml5, faCss3, faJs, faReact, faJava, faPython, faSass, faBootstrap } from '@fortawesome/free-brands-svg-icons';
export const technology = [
    { icon: faHtml5, text: "Html", },
    { icon: faCss3, text: "CSS", },
    { icon: faJs, text: "JS", },
    { icon: faSass, text: "Sass", },
    { icon: faReact, text: "React", },
    { icon: faJava, text: "Java", },
    { icon: faPython, text: "Python", },
    { icon: faBootstrap, text: "BootStrap", },
]
import imgUni from "@/app/assets/usc.webp";
import imgUniFe from "@/app/assets/uscFE.webp";
import imgUniBE from "@/app/assets/uscBE.webp";
import imgUniBD from "@/app/assets/uscBD.webp";
// el despliegue no permite require()
export const projects = [
    {
        title: "USC",
        technology: ["Android studio", "Sprint Boot", "Sql Server"],
        img: imgUni,
        summary: "I developed a mobile application for USC students where they can access their course content, view assignments, and chat with other students. I used Android Studio for frontend development, SQL Server for the database, and Spring Boot for the backend, creating a useful platform to manage their academic life and facilitate communication between them.",
        repo: "https://github.com/Fabian1803/App_Uni",

        objP: "The main objective of this application is to provide USC students with a centralized platform where they can:",
        obj: [
            "Students can view their courses and resources provided by teachers.",
            "The app includes messaging functionality that allows students to interact with each other.",
            "The app includes an authentication system, and a password recovery functionality is also included in case you forget it.",
            "Students can check their personal data, the subjects they are enrolled in and other important details."
        ],
        tecFe: ["Android Studio","Kotlin", "XML", "Jetpack Compose"],
        tecBe:["Java", "Spring Boot", "REST API"],
        tecBd:["SQL Server","JPA", "Hibernate"],
        imgFE: imgUniFe,
        imgBE: imgUniBE,
        imgBD: imgUniBD,
        imgFeImp: "The application was developed in Android Studio using Kotlin as the main language, XML for traditional interface design and Jetpack Compose to create user interfaces in a declarative and fluid way.",
        imgBeImp: "The backend is developed with Spring Boot, providing a RESTful API that communicates with the SQL Server database. Operations include user authentication, message and material management, and password recovery.",
        imgBdImp: "The SQL Server database management system stores all relevant information, including student details, messages between them, courses and academic materials.",
    }
]