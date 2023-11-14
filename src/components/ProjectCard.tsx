import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { PillTechnologyCard } from "./TechnologyCard";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  technologies,
  projectUrl,
  projectRepo,
}: ProjectCardProps) => {
  return (
    <Card maxW={{ base: 300, sm: 300, md: 600, lg: 1500 }} w={{ lg: "full" }}>
      <CardBody h={"300px"}>
        <Flex
          flexDir={{ base: "column", sm: "column", md: "column", lg: "row" }}
          gap={{ base: 0, md: 6 }}
        >
          <Image
            src={imgUrl}
            alt="project img"
            alignSelf={"center"}
            borderRadius="xl"
            w={{ base: 300, sm: 300, md: 300, lg: 400 }}
          />
          <Stack mt={{ base: 6, md: 0 }} spacing="3">
            <HStack
              justifyContent={{ base: "space-between", md: "flex-start" }}
              gap={{ base: 0, md: 8 }}
            >
              <LinkBox>
                <LinkOverlay
                  href={projectUrl}
                  display={"flex"}
                  alignItems={"center"}
                  gap={{ base: 0, sm: 0, md: 1 }}
                >
                  <Icon as={AiOutlineLink} boxSize={6} />
                  <Text display={["none", "none", "inline"]}>
                    Link al proyecto
                  </Text>
                </LinkOverlay>
              </LinkBox>
              <LinkBox>
                <LinkOverlay
                  href={projectRepo}
                  display={"flex"}
                  alignItems={"center"}
                  gap={{ base: 0, sm: 0, md: 1 }}
                >
                  <Icon as={AiFillGithub} boxSize={6} />
                  <Text display={["none", "none", "inline"]}>
                    Link al repositorio
                  </Text>
                </LinkOverlay>
              </LinkBox>
            </HStack>
            <Heading size="md">{title}</Heading>
            <Text>{description}</Text>
            <Text
              display={{ base: "none", sm: "none", md: "none", lg: "block" }}
              fontWeight={"thin"}
              color={"grey"}
            >
              Tecnologías usadas:
            </Text>
            <CardFooter
              display={{ base: "none", sm: "none", lg: "flex" }}
              gap={2}
              justifyContent={"flex-start"}
              flexWrap={"wrap"}
              p={0}
              minH={"100px"}
            >
              {technologies.map((t: any, idx: number) => (
                <PillTechnologyCard
                  technology={t}
                  key={idx}
                ></PillTechnologyCard>
              ))}
            </CardFooter>
          </Stack>
        </Flex>
      </CardBody>
      <Divider display={{ lg: "none" }} />
      <CardFooter
        display={{ base: "flex", sm: "flex", md: "flex", lg: "none" }}
        gap={2}
        justifyContent={"center"}
        flexWrap={"wrap"}
        p={3}
        minH={"100px"}
      >
        {technologies.map((t: any, idx: number) => (
          <PillTechnologyCard technology={t} key={idx}></PillTechnologyCard>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
