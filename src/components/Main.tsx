import { Button, Heading, HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SectionBox } from "../ui/boxes";

const Main = () => {
  return (
    <>
      <SectionBox id="main">
        <Heading
          size="3xl"
          bgGradient="linear(to-l, blue.300, purple.600)"
          bgClip="text"
          fontWeight="extrabold"
        >
          Gonzalo Gabriel Mendez Stefano
        </Heading>
        <Text fontSize="2xl">
          Bienvenidx a mi portfolio de front-end Web Developer
        </Text>
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
