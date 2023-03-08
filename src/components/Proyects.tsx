import { Heading, HStack } from "@chakra-ui/react";
import { SectionBox } from "../ui/boxes";
import { SectionHeading } from "../ui/text";
import ProyectCard from "./ProyectCard";

const Proyects = () => {
  return (
    <>
      <SectionBox id="proyects">
        <SectionHeading>Proyectos</SectionHeading>
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
