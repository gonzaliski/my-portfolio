import { Button, HStack, Icon, Image, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";

const Main = () => {
  const isSmallerThan768px = useCustomMediaQuery();
  const downloadCv = () => {
    const link = document.createElement("a");
    link.download = `Gonzalo Mendez Stefano.pdf`;
    link.href = "Gonzalo Mendez Stefano.pdf";
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
          size={["xl", "xl", "3xl", "3xl"]}
        >
          Gonzalo Gabriel Mendez Stefano
        </SectionHeading>
        <DarkThinSubtitle
          height={["70px", "70px", "initial", "initial"]}
          textAlign={["center", "center", "initial", "initial"]}
        >
          Hola!, soy un{" "}
          <TypeAnimation
            sequence={[
              "Desarrollador Frontend", // Types 'One'
              1000, // Waits 1s
              "Estudiante de Programación", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
            ]}
            wrapper="b"
            cursor={true}
            repeat={Infinity}
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
