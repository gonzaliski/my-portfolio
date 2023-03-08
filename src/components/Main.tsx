import { Button, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";

const Main = () => {
  return (
    <>
      <SectionBox id="main">
        <SectionHeading>Gonzalo Gabriel Mendez Stefano</SectionHeading>
        <DarkThinSubtitle>
          Bienvenidx a mi portfolio de front-end Web Developer
        </DarkThinSubtitle>
        <Button bgColor={"purple.500"} color="white">
          Descargar CV
        </Button>
        <HStack>
          <Icon as={AiFillLinkedin} boxSize={16}></Icon>
          <Icon as={AiFillGithub} boxSize={16}></Icon>
        </HStack>
      </SectionBox>
    </>
  );
};

export default Main;
