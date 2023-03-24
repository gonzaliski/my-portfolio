import { Box, HStack, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useCustomMediaQuery } from "../hooks";
import {
  pillTechnologiesData,
  TechnologyCardURLs,
} from "../utils/technologiesData";

const PillTechnologyCard = ({ technology }: TechnologyCardProps) => {
  const [tech, setTech] = useState({} as any);
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
      maxW={"auto"}
      p={[1, 1]}
      color={tech.color}
      fontSize="sm"
    >
      <HStack justifyContent={"center"}>
        <Icon as={tech.icon} boxSize={5}></Icon>
        <Text as="p" size={"md"} fontFamily="monospace">
          {technology.toUpperCase()}
        </Text>
      </HStack>
    </Box>
  );
};

const TechnologyCard = ({ technology }: TechnologyCardProps) => {
  const isSmallerThan768px = useCustomMediaQuery();

  return (
    <VStack alignItems="center">
      <Image
        src={TechnologyCardURLs[technology]}
        width={isSmallerThan768px ? 50 : 100}
      />
      <Text fontSize={"sm"} textAlign={"center"} maxW={100}>
        {technology.toUpperCase()}
      </Text>
    </VStack>
  );
};

export { PillTechnologyCard, TechnologyCard };
