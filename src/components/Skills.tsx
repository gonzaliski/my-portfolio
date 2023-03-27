import { HStack } from "@chakra-ui/react";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import { TechnologyCard } from "./TechnologyCard";
const technologies = [
  "javascript",
  "typescript",
  "html",
  "css",
  "react.js",
  "next.js",
  "styled components",
  "chakra ui",
  "react hook form",
  "recoil",
];

const Skills = () => {
  const isSmallerThan768px = useCustomMediaQuery();

  return (
    <>
      <SectionBox
        id="skills"
        justify={isSmallerThan768px ? "flex-start" : null}
      >
        <SectionHeading>Skills</SectionHeading>
        <DarkThinSubtitle textAlign={"center"} width={"80 %"}>
          Estos son mis conocimientos técnicos
        </DarkThinSubtitle>
        <HStack
          wrap={"wrap"}
          gap={5}
          alignItems={"baseline"}
          justifyContent={"center"}
          padding={["0 20px", "none"]}
        >
          {technologies.map((t, idx: number) => (
            <TechnologyCard technology={t} key={idx} />
          ))}
        </HStack>
      </SectionBox>
    </>
  );
};

export default Skills;
