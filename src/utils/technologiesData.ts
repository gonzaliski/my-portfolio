import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextDotJs,
  SiStyledComponents,
  SiRedux,
  SiTailwindcss,
  SiFirebase,
  SiPostgresql,
} from "react-icons/si";
import typescript from "../images/typescript.png";
import javascript from "../images/javascript.png";
import html from "../images/html.png";
import css from "../images/css.png";
import react from "../images/react.png";
import next from "../images/next.png";
import styledcomponents from "../images/styled components.png";
import chakra from "../images/chakra-ui.png";
import tailwind from "../images/tailwind.png";
import recoil from "../images/recoil.jpg";
import firebase from "../images/firebase.png";
import postgresql from "../images/postgres.png";
import springboot from "../images/spring.png";
import git from "../images/git.png";
import redux from "../images/redux.png";
import { BsLightningFill } from "react-icons/bs";

export const pillTechnologiesData = [
  {
    name: "none",
    bg: "gray",
    color: "white",
    icon: SiJavascript,
  },
  {
    name: "javascript",
    bg: "yellow",
    color: "black",
    icon: SiJavascript,
  },
  {
    name: "typescript",
    bg: "blue.600",
    color: "white",
    icon: SiTypescript,
  },
  {
    name: "html",
    bg: "orange.500",
    color: "white",
    icon: SiHtml5,
  },
  {
    name: "css",
    bg: "blue.400",
    color: "white",
    icon: SiCss3,
  },
  {
    name: "react",
    bg: "blue.500",
    color: "white",
    icon: SiReact,
  },
  {
    name: "next",
    bg: "black",
    color: "white",
    icon: SiNextDotJs,
  },
  {
    name: "chakra",
    bg: "aquamarine",
    color: "black",
    icon: BsLightningFill,
  },
  {
    name: "styled components",
    bg: "pink.500",
    color: "white",
    icon: SiStyledComponents,
  },
  {
    name: "redux toolkit",
    bg: "purple.500",
    color: "white",
    icon: SiRedux,
  },
  {
    name: "tailwind",
    bg: "blue.500",
    color: "white",
    icon: SiTailwindcss,
  },
  {
    name: "firebase",
    bg: "yellow.400",
    color: "black",
    icon: SiFirebase,
  },
  {
    name: "postgres",
    bg: "blue.700",
    color: "white",
    icon: SiPostgresql,
  },
];

export const TechnologyCardURLs: {
  [key: string]: string;
} = {
  typescript: typescript,
  javascript: javascript,
  html: html,
  css: css,
  ["react.js"]: react,
  ["next.js"]: next,
  ["styled components"]: styledcomponents,
  ["chakra ui"]: chakra,
  ["tailwind"]: tailwind,
  ["recoil"]: recoil,
  ["firebase"]: firebase,
  ["postgresql"]: postgresql,
  ["springboot"]: springboot,
  ["git"]: git,
  ["redux toolkit"]: redux,
};
