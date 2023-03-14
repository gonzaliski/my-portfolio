import { Button, HStack, Icon, Link, Image } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import Typical from "react-typical";

const Main = () => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.download = `GonzaloMendezStefano.pdf`;
    link.href = "GonzaloMendezStefano.pdf";
    link.click();
  };
  return (
    <>
      <SectionBox id="main">
        <Image src="profile.png" boxSize="300px" objectFit="contain"></Image>
        <SectionHeading>Gonzalo Gabriel Mendez Stefano</SectionHeading>
        <DarkThinSubtitle>
          Hola!, soy un{" "}
          <Typical
            steps={[
              "Desarrollador Frontend",
              1000,
              "Estudiante de Programación",
              1000,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </DarkThinSubtitle>
        <Button onClick={downloadCv} bgColor={"purple.500"} color="white">
          Descargar CV
        </Button>
        <HStack>
          <Link href="https://www.linkedin.com/in/gonzalo-gabriel-mendez-stefano-60b800236/">
            <Icon as={AiFillLinkedin} boxSize={16}></Icon>
          </Link>
          <Link href="https://github.com/gonzaliski">
            <Icon as={AiFillGithub} boxSize={16}></Icon>
          </Link>
        </HStack>
      </SectionBox>
    </>
  );
};

export default Main;
