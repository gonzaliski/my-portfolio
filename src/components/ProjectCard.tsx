import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ProjectCardProps } from "../custom";
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
      <CardBody>
        <Image src={imgUrl} alt="project img" borderRadius="xl" w={300} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter gap={2} justifyContent={"center"} flexWrap={"wrap"}>
        {technologies.map((t) => (
          <PillTechnologyCard technology={t}></PillTechnologyCard>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
