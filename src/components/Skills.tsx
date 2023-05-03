import { HStack } from "@chakra-ui/react";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import { TechnologyCard } from "./TechnologyCard";
import { motion } from "framer-motion";
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
          as={motion.div}
          initial={"hidden"}
          whileInView={"visible"}
          transition="0.5s linear"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
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
