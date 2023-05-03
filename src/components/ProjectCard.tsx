import {
  Card,
  CardBody,
  CardFooter,
  Divider,
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
    <Card maxW={300}>
      <CardBody h={"300px"}>
        <Image src={imgUrl} alt="project img" borderRadius="xl" w={300} />
        <Stack mt="6" spacing="3">
          <HStack justifyContent={"space-between"}>
            <LinkBox>
              <LinkOverlay href={projectUrl}>
                <Icon as={AiOutlineLink} boxSize={6} />
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href={projectRepo}>
                <Icon as={AiFillGithub} boxSize={6} />
              </LinkOverlay>
            </LinkBox>
          </HStack>
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter
        gap={2}
        justifyContent={"center"}
        flexWrap={"wrap"}
        p={3}
        h={"100px"}
      >
        {technologies.map((t: any, idx: number) => (
          <PillTechnologyCard technology={t} key={idx}></PillTechnologyCard>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
