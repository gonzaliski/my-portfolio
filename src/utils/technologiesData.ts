import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextDotJs,
  SiStyledComponents,
} from "react-icons/si";
import { BsLightningFill } from "react-icons/bs";

export const pillTechnologiesData = [
  {
    name: "none",
    bg: "gray",
    color: "black",
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
    bg: "pink.200",
    color: "black",
    icon: SiStyledComponents,
  },
];

export const TechnologyCardURLs: {
  [key: string]: string;
} = {
  javascript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
  typescript:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
  html: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
  css: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  ["react.js"]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  ["next.js"]:
    "https://seeklogo.com/images/N/next-js-icon-logo-EE302D5DBD-seeklogo.com.png",
  ["styled components"]:
    "https://cdn-media-1.freecodecamp.org/images/1*p1TndLk3UsGPBsM7qHPZIw.png",
  ["chakra ui"]: "https://img.icons8.com/color/512/chakra-ui.png",
  ["tailwind"]:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
  ["react hook form"]:
    "data:image/png;base64,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",
  ["recoil"]: "https://cdn.worldvectorlogo.com/logos/recoil-js.svg",
  ["firebase"]:
    "https://assets.stickpng.com/images/5847f40ecef1014c0b5e488a.png",
  ["postgresql"]:
    "https://assets.stickpng.com/images/584815fdcef1014c0b5e497a.png",
  ["springboot"]:
    "https://miro.medium.com/v2/resize:fit:550/0*5FEJ7emIEAxZRCQF",
  ["git"]: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
};
