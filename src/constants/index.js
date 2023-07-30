import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  beyondata,
  brainvire,
  evince,
  mobmaxime,
  gamerji,
  tcs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI/UX Design",
    icon: ux,
  },
  {
    title: "Software Planning",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "postgresql",
    icon: postgresql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Trainee Magento 2 Developer",
    company_name: "BRAINVIRE INFOTECH",
    icon: brainvire,
    iconBg: "#ffffff",
    date: "Feb 2021 - July 2022",
  },
  {
    title: "Junior Magento 2 Developer",
    company_name: "EVINCE DEVELOPMENT ",
    icon: evince,
    iconBg: "#ffffff",
    date: "Aug 2021 - Sept 2022",
  },
  {
    title: "Junior ReactJS Developer",
    company_name: "GAMERJI E-SPORTS",
    icon: gamerji,
    iconBg: "#333333",
    date: "OCT 2022",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Gamerji E-Sports(CRM-ERP)",
    description:
      "ReactJS based project and adding Redux to it in this project (ERP/CRM) I make modules and also fetch APIs to make react ui design for the same. In this we used a Mongodb database.",
    // tags: [
    //   {
    //     name: "react",
    //     color: "blue-text-gradient",
    //   },
    //   {
    //     name: "mongodb",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    // ],
    image: komikult,
    repo: "",
    demo: "",
    // repo: "https://github.com/HACDedsec/My-IOT-workspace",
    // demo: "https://www.instagram.com/oobit_technical_organization/?hl=en",
  },
  {
    id: "project-2",
    name: "Saasleagueops(V!, Glance)",
    description:
      "In This project is based on a Esports tournament in this i used a redux based react js and work on a UI And APIs implementations. (ReactJS,NodeJS,MongoDB,Github,Jira,Postman..)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    // repo: "https://github.com/shaqdeff/Leaderboard",
    // demo: "https://oob-it.web.app/",
  },
  // {
  //   id: "project-3",
  //   name: "Math Magicians",
  //   description: "This is a single-page calculator app built with React",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: math,
  //   repo: "https://github.com/shaqdeff/Math-Magicians",
  //   demo: "https://inspiring-medovik-37d3b3.netlify.app/",
  // },
  // {
  //   id: "project-4",
  //   name: "Movie Metro",
  //   description: `A single-page application that allows users to search for any movie or show's ratings and its details.`,
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: movie,
  //   repo: "https://github.com/shaqdeff/Movie-Metro",
  //   demo: "https://movie-metro.netlify.app/",
  // },
  // {
  //   id: "project-5",
  //   name: "Nyeusi Fest Site",
  //   description:
  //     "This is a demo concert website for a music festival called Nyeusi.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: "https://github.com/shaqdeff/Nyeusi-Fest-Site",
  //   demo: "https://shaqdeff.github.io/Nyeusi-Fest-Site/",
  // },
];

export { services, technologies, experiences, projects };
