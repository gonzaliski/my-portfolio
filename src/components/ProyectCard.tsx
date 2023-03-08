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
import TechnologyCard from "./TechnologyCard";

const ProyectCard = () => {
  return (
    <Card maxW={300}>
      <CardBody>
        <Image
          src="https://images.idgesg.net/images/article/2021/06/best-progressive-web-apps-for-productivity-100892925-large.jpg?auto=webp&quality=85,70"
          alt="Green double couch with wooden legs"
          borderRadius="xl"
          w={300}
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Pet Finder</Heading>
          <Text>Webapp donde podrás reportar mascotas perdidas.</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter gap={2} justifyContent={"center"} flexWrap={"wrap"}>
        <TechnologyCard technology="typescript"></TechnologyCard>
        <TechnologyCard technology="html"></TechnologyCard>
        <TechnologyCard technology="css"></TechnologyCard>
      </CardFooter>
    </Card>
  );
};

export default ProyectCard;
