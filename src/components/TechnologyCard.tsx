import { Box, VStack, Icon, Text, Image, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";

const pillTechnologiesData = [
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
    bg: "blue.500",
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
    bg: "black.100",
    color: "white",
    icon: SiReact,
  },
];
const PillTechnologyCard = ({ technology }: TechnologyCardProps) => {
  const [tech, setTech] = useState({} as TechnologyData);
  useEffect(() => {
    const result =
      pillTechnologiesData.find((t) => t.name == technology) ||
      pillTechnologiesData[0];
    setTech(result);
  }, []);
  return (
    <Box
      bg={tech.bg}
      w="auto"
      maxW={"100px"}
      p={[1, 1]}
      color={tech.color}
      fontSize="sm"
    >
      <HStack justifyContent={"center"}>
        <Icon as={tech.icon}></Icon>
        <Text as="b" size={"md"}>
          {technology}
        </Text>
      </HStack>
    </Box>
  );
};

const TechnologyCardURLs: {
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
    "https://www.daggala.com/static/228867c3668e439101821568a8a03b54/19ca5/sc.png",
  ["chakra ui"]: "https://img.icons8.com/color/512/chakra-ui.png",
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  return (
    <VStack alignItems="center">
      <Image src={TechnologyCardURLs[technology]} width={100} />
      <Text fontSize={"sm"} textAlign={"center"} maxW={100}>
        {technology.toUpperCase()}
      </Text>
    </VStack>
  );
};

export { PillTechnologyCard, TechnologyCard };
