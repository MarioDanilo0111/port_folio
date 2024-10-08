interface TechIcon {
  src: string;
  alt: string;
}

interface Project {
  title: string;
  linkRepo: string;
  description: string;
  techIcons: TechIcon[];
  projectImage?: TechIcon;
  dataAOS: string;
}

interface ProjectGroup {
  headerTitle: string;
  spanHeaderTitle: string;
  gitHubIcon: TechIcon;
  projects: Project[];
}

const ProjectsArray: ProjectGroup[] = [
  {
    headerTitle: "Pro",
    spanHeaderTitle: "jects",
    gitHubIcon: { src: "/icons/github-icon.webp", alt: "GitHub" },

    projects: [
      {
        title: "Notes App",
        linkRepo: "https://github.com/MarioDanilo0111/NotesApp",
        description:
          "A full stack web application that allows users to create, read, update, and delete notes. Security and user authentication are bolstered by Passport and its Google OAuth2.0 strategy.",
        dataAOS: "fade-rigth",

        techIcons: [
          { src: "/icons/expressjs.webp", alt: "express" },
          { src: "/icons/mongodb.webp", alt: "mongodb" },
          { src: "/icons/API.webp", alt: "api" },
          { src: "/icons/passport.svg", alt: "passport" },
        ],
        projectImage: {
          src: "/images/notesApp.webp",
          alt: "NotesApp",
        },
      },
      {
        title: "Food Waste App",
        linkRepo: "https://github.com/MarioDanilo0111/femtioPro",
        description:
          "This app is a web application built with React, utilizing various dependencies for front-end design and functionality.",

        dataAOS: "fade-left",

        techIcons: [
          { src: "/icons/react.svg", alt: "react" },
          { src: "/icons/react-router.webp", alt: "react-router" },
          { src: "/icons/javascript.webp", alt: "javascript" },
          { src: "/icons/bootstrap.webp", alt: "bootstrap" },
        ],
        projectImage: {
          src: "/images/50pro.webp",
          alt: "femtioPro",
        },
      },
      {
        title: "Candy Cyberstor",
        linkRepo: "https://github.com/MarioDanilo0111/candycyberstorappImp",
        description:
          "Project created during a TypeScript course, built with Axios. Ability to respond with a bill of purchased items and quantity that will be delivered to the provided address.",

        dataAOS: "fade-right",

        techIcons: [
          { src: "/icons/vitejs.svg", alt: "Vite" },
          { src: "/icons/axios.webp", alt: "Axios" },
          { src: "/icons/react-hooks.webp", alt: "ReactHooks" },
          { src: "/icons/typescript-icon.webp", alt: "TypeScript" },
        ],
        projectImage: {
          src: "/images/candyAxios.webp",
          alt: "Candy Cyberstor",
        },
      },
      {
        title: "Music Album Manager",
        linkRepo: "https://github.com/MarioDanilo0111/MusicAlbumManager",
        description:
          "Application for managing music album, including genres, release years, and band names to the data structure. With a full CRUD functionality for interacting, utilizing Node&apos;s JSON server.",

        dataAOS: "fade-left",

        techIcons: [
          { src: "/icons/react.svg", alt: "React" },
          { src: "/icons/nodejs-plain.webp", alt: "NodeJS" },
          { src: "/icons/crud.webp", alt: "CRUD" },
          { src: "/icons/typeJson.webp", alt: "TypeJson" },
        ],
        projectImage: {
          src: "/images/save-miw.webp",
          alt: "MusicAlbumManager",
        },
      },
      {
        title: "Hacker News",
        linkRepo: "https://github.com/MarioDanilo0111/hackersNews-app",
        description:
          "Application for fetching data from Hacker News API, structured from the request parameters and efficiently organized using TypeScript for typing support.",

        dataAOS: "fade-right",

        techIcons: [
          { src: "/icons/vitejs.svg", alt: "viteJs" },
          { src: "/icons/typescript-icon.webp", alt: "tys" },
          { src: "/icons/axios.webp", alt: "axios" },
          { src: "/icons/node-sass.webp", alt: "nodeJs" },
        ],

        projectImage: {
          src: "/images/hackerNews.webp",
          alt: "hackerNews",
        },
      },
      {
        title: "Python Lexicon AI Project",
        linkRepo: "https://github.com/MarioDanilo0111/Lexicon_Project",
        description:
          "My first attempt at building an application using Python. Using AI intelligens and Streamlit interface options. This project was a significant milestone in my coding journey, developing an idee that could be scaled to be a more powerful solution for developers when understanding complex programming concepts.",

        dataAOS: "fade-left",

        techIcons: [
          { src: "/icons/streamlit_py.svg", alt: "streamlit" },
          { src: "/icons/Pandas.png", alt: "pandas_py" },
          {
            src: "/icons/scikit-learn.png",
            alt: "scikit-learn-python",
          },
          { src: "/icons/plotly_py.webp", alt: "plotython" },
        ],
        projectImage: {
          src: "/images/lex_py_app.webp",
          alt: "lexicon_py_app",
        },
      },
    ],
  },
];

export default ProjectsArray;
