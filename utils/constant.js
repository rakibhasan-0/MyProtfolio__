import placeholder from "../public/placeholder.png";
import radio from "../public/RadioInfo_.png";
import budoo from "../public/UmeaBudoo.png";



export const MY_INFO= " A dedicated and enthusiastic Computer Science student at Umeå University. I have a deep-rooted passion for software development, technology, and problem-solving. Skilled in Java, JavaScript (React) and C, I am always eager to explore new technologies and take on challenges. Complementing my technical skills, I excel at collaborating in team settings, maintaining a detail-oriented approach, and managing time efficiently. With a continuous drive for self-improvement,"



export const PROJECTS = [
    {
        tittle: "Yotei",
        description: "A web application which which is made for local budo club to mange their information and tasks. This application is application made by several students in the course of Software Engineering at Umeå University. I have made significant contribution in the front-end and back-end part of the application",
        tachStack: ["React", "Java", "Spring Boot", "PostgreSQL"],
        img: budoo,
    },

    {
        tittle: "Radio Information",
        description: "That application will provide programs schedule of the Swedish Radios, furthermore, it will provide the user information of the selected program",
        techStack: ["Java", "JavaSwing"],
        img: radio,
    },

    {
        tittle: "Mdu",
        description: "Basically, that program will perform the functionality of the mdu command in Unix/Linux. It will take a file/folder as input then it will calculate the size by using threads from the thread-pool",
        techStack: ["C"],
        img: placeholder,
    },

    {
        tittle: "CRUD",
        description: "A simple CRUD application based on the school library system. It will provide the functionality of adding, deleting, updating, and searching the books",
        techStack:["Pyhton", "Flask", "PostgreSQL"],
        img: placeholder,
    }
]