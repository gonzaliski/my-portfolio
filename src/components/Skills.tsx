import { HStack } from "@chakra-ui/react";
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
];

const Skills = () => {
  return (
    <>
      <SectionBox id="skills">
        <SectionHeading>Skills</SectionHeading>
        <DarkThinSubtitle>
          Estos son mis conocimientos técnicos
        </DarkThinSubtitle>
        <HStack wrap={"wrap"} gap={5} alignItems={"baseline"}>
          {technologies.map((t) => (
            <TechnologyCard technology={t} />
          ))}
        </HStack>
      </SectionBox>
    </>
  );
};

export default Skills;
