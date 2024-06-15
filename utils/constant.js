import placeholder from "../public/placeholder.png";
import radio from "../public/RadioInfo_.png";
import budoo from "../public/UmeaBudoo.png";



export const MY_INFO= " A dedicated and enthusiastic Computer Science student at Umeå University. I have a deep-rooted passion for software development, technology, and problem-solving. Skilled in Java, JavaScript (React) and C, I am always eager to explore new technologies and take on challenges. Complementing my technical skills, I excel at collaborating in team settings, maintaining a detail-oriented approach, and managing time efficiently. With a continuous drive for self-improvement,"


export const PROJECTS = [
    {
        title: "Yotei",
        description: "A web application for a local budo club to manage information and tasks. Developed as part of a Software Engineering course at Umeå University. Significant contributions in both front-end and back-end development.",
        techStack: ["React", "Java", "Spring Boot", "PostgreSQL"],
        img: budoo,
    },
    {
        title: "Radio Information",
        description: "Provides program schedules of Swedish radios and detailed information about selected programs.",
        techStack: ["Java", "JavaSwing"],
        img: radio,
    },
    {
        title: "Mdu",
        description: "Emulates the functionality of the mdu command in Unix/Linux. Calculates file/folder size using a thread pool.",
        techStack: ["C"],
        img: placeholder,
    },
    {
        title: "CRUD",
        description: "A simple CRUD application for managing school library books.",
        techStack: ["Python", "Flask", "PostgreSQL"],
        img: placeholder,
    }
]
