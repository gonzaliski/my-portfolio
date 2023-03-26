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
