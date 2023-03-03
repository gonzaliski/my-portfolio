import { Heading, HStack } from "@chakra-ui/react";
import { SectionBox } from "../ui/boxes";
import ProyectCard from "./ProyectCard";

const Proyects = () => {
  return (
    <>
      <SectionBox id="proyects">
        <Heading
          size="3xl"
          bgGradient="linear(to-l, blue.300, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Proyectos
        </Heading>
        <HStack gap={10} wrap={"wrap"}>
          <ProyectCard></ProyectCard>
          <ProyectCard></ProyectCard>
          <ProyectCard></ProyectCard>
        </HStack>
      </SectionBox>
    </>
  );
};

export default Proyects;
