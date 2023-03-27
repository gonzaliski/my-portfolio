import { Button, HStack, Icon, Image, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Typical from "react-typical";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";

const Main = () => {
  const isSmallerThan768px = useCustomMediaQuery();
  const downloadCv = () => {
    const link = document.createElement("a");
    link.download = `GonzaloMendezStefano.pdf`;
    link.href = "GonzaloMendezStefano.pdf";
    link.click();
  };
  return (
    <>
      <SectionBox id="main" justify={isSmallerThan768px ? "center" : undefined}>
        <Image
          src="profile.png"
          boxSize={["200px", "300px", "300px", "300px"]}
          objectFit="contain"
        ></Image>
        <SectionHeading
          textAlign={["center", "center", "initial", "initial"]}
          size={["xl", "3xl"]}
        >
          Gonzalo Gabriel Mendez Stefano
        </SectionHeading>
        <DarkThinSubtitle
          height={["70px", "initial"]}
          textAlign={["center", "initial"]}
        >
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
