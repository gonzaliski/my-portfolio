import {
  Box,
  Circle,
  Flex,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { getProjectsData } from "../api";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { SectionHeading } from "../ui/text";
const events = [
  {
    date: "2023 - Actualidad",
    title: "Mentor en Digital House Schools",
    description:
      "Desarrollo de actividades, acompañamiento pedagógico y capacitación a docentes",
  },
];
const Experience = () => {
  const [proyectsList, setProyectsList] = useState([] as any);
  const isSmallerThan768px = useCustomMediaQuery();

  async function getProyects() {
    const res = await getProjectsData();
    console.log(res);

    setProyectsList(res);
  }
  return (
    <>
      <SectionBox
        id="projects"
        justify={isSmallerThan768px ? "flex-start" : null}
      >
        <SectionHeading>Experiencia</SectionHeading>

        <Flex
          w={"90%"}
          as={motion.div}
          initial={"hidden"}
          whileInView={"visible"}
          transition="0.5s linear"
          viewport={{ once: true, amount: "some" }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          gap={["40px", "40px", "none", "none"]}
          flexDir={["column", "column", "row", "row"]}
          flexWrap={"wrap"}
          alignItems={["center", "center", "center", "normal"]}
          justifyContent={["center", "center", "center", "space-between"]}
        >
          <Timeline events={events} />
        </Flex>
      </SectionBox>
    </>
  );
};

export default Experience;
const TimelineItem = ({ date, title, description }: Event) => {
  const bgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <Flex position="relative" mb={8}>
      <Circle
        position={"absolute"}
        left={"-3%"}
        size={12}
        color="white"
        bgGradient="linear(to-r, black, gray.400)"
        mt={2}
      >
        2023
      </Circle>
      <Box ml={4} pl={10} maxW={"md"}>
        <Text fontWeight="bold" fontSize="lg" mb={1}>
          {title}
        </Text>
        <Text color="gray.500" fontSize="sm">
          {date}
        </Text>
        <Text mt={2} bg={bgColor} p={2} borderRadius="md">
          {description}
        </Text>
      </Box>
    </Flex>
  );
};

const Timeline = ({ events }: { events: Event[] }) => {
  return (
    <VStack align="start" spacing={0} position="relative" gap={20}>
      <Box
        h={"full"}
        w={1}
        rounded="md"
        position="absolute"
        bg="purple.600"
        left={2}
      ></Box>
      {events.map((event, index: number) => (
        <TimelineItem
          key={index}
          date={event.date}
          title={event.title}
          description={event.description}
        />
      ))}
    </VStack>
  );
};

type Event = {
  date: string;
  title: string;
  description: string;
};
