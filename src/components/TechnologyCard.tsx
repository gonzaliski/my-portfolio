import { Box, HStack, Icon, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
} from "react-icons/si";

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const [tech, setTech] = useState({} as TechnologyData);
  const techologiesData = [
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
  useEffect(() => {
    const result =
      techologiesData.find((t) => t.name == technology) || techologiesData[0];
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

export default TechnologyCard;
