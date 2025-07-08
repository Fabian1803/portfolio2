import {  faJs, faReact, faJava, faPython, faSass, faAngular, faVuejs, faAws, faNode } from '@fortawesome/free-brands-svg-icons';
export const technology = [
    { icon: faAngular, text: "Angular", },
    { icon: faReact, text: "React", },
    { icon: faVuejs, text: "Vue.js", },
    { icon: faJs, text: "JavaScript", },
    { icon: faNode, text: "Node.js", },
    { icon: faJava, text: "Java", },
    { icon: faPython, text: "Python", },
    { icon: faAws, text: "Cloud", },
]
import imgUni from "@/app/assets/usc.webp";
import imgUniFe from "@/app/assets/uscFE.webp";
import imgUniBE from "@/app/assets/uscBE.webp";
import imgUniBD from "@/app/assets/uscBD.webp";

import imgSL from "@/app/assets/SL.webp";
import imgSLFE from "@/app/assets/SLFE.webp";
import imgSLBE from "@/app/assets/SLBE.webp";
import imgSLBD from "@/app/assets/SLBD.webp";
// el despliegue no permite require()
export const projects = [
    {
        title: "Sumaq Learn",
        technology: ["React Native", "Microservices", "Postgres", "DevOps"],
        img: imgSL,
        summary: "Sumaq Learn is a digital educational platform under development, conceived as the technological evolution of a previous project called USC, an app that was exclusively aimed at a university and developed only for Android using Spring Boot and SQL Server. Unlike that limited approach, Sumaq Learn is being designed from the ground up with a modern architecture based on microservices and multiplatform technologies, with the goal of offering a comprehensive and scalable solution for all types of educational institutions, including schools, institutes, academies, universities, and workshops. The project incorporates React Native to ensure compatibility across multiple devices and relies on a distributed ecosystem that combines NestJS, Spring Boot, and FastAPI in the backend, managed through Kong API Gateway and Consul. Regarding data persistence, PostgreSQL is used for structured data and MongoDB for dynamic and non-relational content, allowing for efficient and flexible information management. Additionally, observability tools such as Grafana, Loki, and Prometheus have been integrated, and JWT authentication is used from Spring Boot to ensure robust access control. With NativeWind on the frontend, the user experience dynamically adapts to different contexts. Sumaq Learn thus represents a flexible, interoperable, and scalable educational platform, integrating DevOps principles, high availability, and technical modularity.",
        repo: "https://github.com/Fabian1803/Sumaq-Learn---Microservices",

        objP: "The main objective of this application is to provide students from schools, institutes, academies, universities, and workshops with a centralized and scalable educational platform where they can:",
        obj: [
            "Access their enrolled courses and view academic resources shared by instructors in real time across multiple devices.",
            "Interact through integrated communication tools designed to support peer-to-peer and student-teacher collaboration.",
            "Use a secure authentication system with JWT-based access control and a built-in password recovery process.",
            "View and manage their personal profile, enrollment status, academic modules, forums, and submissions.",
            "Benefit from a responsive and multiplatform interface powered by React Native, offering a consistent user experience across Android and iOS."
        ],
        Technologies:[
            {
                titleT: "Front-end",
                tec: ["React Native","Nativewind", "Expo"],
            },
            {
                titleT: "Back-end",
                tec: ["REST API","Java", "Spring Boot", "JavaScript", "NestJS", "Python", "FastApi", "JWT"],
            },
            {
                titleT: "Database",
                tec: ["Postgres","MongoDB"],
            },
            {
                titleT: "Dev-Ops",
                tec: ["Docker", "Grafana", "Loki", "Prometheus", "Kong", "Consul"],
            }
        ],
        imgFE: imgSLFE,
        imgBE: imgSLBE,
        imgBD: imgSLBD,
        Implementation: [
            {
                titleI: "Front-end",
                cont: "The mobile application is being developed using React Native CLI to ensure cross-platform compatibility across Android and iOS devices. Styling and UI components are managed with NativeWind, enabling a responsive and adaptable user interface. Navigation and component logic are modularized to support scalability and future extension.",
            },
            {
                titleI: "Back-end",
                cont: "The backend is composed of multiple microservices developed with NestJS, Spring Boot, and FastAPI. These services are exposed through a centralized API Gateway using Kong, and coordinated via Consul for service discovery. Core functionalities include user authentication with JWT, course and forum management, institutional search, and modular content delivery.",
            },
            {
                titleI: "Database",
                cont: "The system integrates both relational and non-relational databases. PostgreSQL is used for structured data such as users, enrollments, courses, and modules, while MongoDB handles dynamic and unstructured content like forum discussions, attachments, and multimedia resources.",
            },
            {
                titleI: "DevOps",
                cont: "The platform incorporates observability and monitoring tools such as Prometheus, Grafana, and Loki to enable real-time system metrics, logging, and service health tracking. This DevOps layer ensures stability, traceability, and maintainability in a distributed production environment."
            }
        ],
    },
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
        Technologies:[
            {
                titleT: "Front-end",
                tec: ["Android Studio","Kotlin", "XML", "Jetpack Compose"]
            },
            {
                titleT: "Back-end",
                tec: ["Java", "Spring Boot", "REST API"],
            },
            {
                titleT: "Database",
                tec: ["SQL Server","JPA", "Hibernate"],
            },
            {
                titleT: "DevOps",
                tec: ["SQL Server","JPA", "Hibernate"],
            },
        ],
        imgFE: imgUniFe,
        imgBE: imgUniBE,
        imgBD: imgUniBD,
        Implementation: [
            {
                titleI: "Front-end",
                cont: "The application was developed using Android Studio with Kotlin as the main programming language. XML was used for traditional interface design, while Jetpack Compose was utilized to create user interfaces in a declarative and fluid manner.",
            },
            {
                titleI: "Back-end",
                cont: "The backend is built with Spring Boot, providing a RESTful API that communicates with the SQL Server database. Key operations include user authentication, message and material management, and password recovery.",
            },
            {
                titleI: "Database",
                cont: "The SQL Server database management system is responsible for storing all relevant information, including student details, messages exchanged between users, courses, and academic materials.",
            },
        ],
        }
]