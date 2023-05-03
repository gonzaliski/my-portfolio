import { HStack, VStack, Text, Link, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProjectsData } from "../api";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const Projects = () => {
  const [proyectsList, setProyectsList] = useState([] as any);
  const isSmallerThan768px = useCustomMediaQuery();

  async function getProyects() {
    const res = await getProjectsData();
    console.log(res);

    setProyectsList(res);
  }

  useEffect(() => {
    getProyects();
  }, []);
  return (
    <>
      <SectionBox
        id="projects"
        justify={isSmallerThan768px ? "flex-start" : null}
      >
        <SectionHeading>Proyectos</SectionHeading>
        <DarkThinSubtitle textAlign={"center"} width={"80 %"}>
          Estos son algunos proyectos que he realizado
        </DarkThinSubtitle>
        <Link
          href="https://apx.school/profile/f5f13b62-42c5-4db8-906b-9b452748b5bc"
          fontSize="sm"
        >
          Ver mas proyectos
        </Link>

        <Flex
          w={"90%"}
          as={motion.div}
          initial={"hidden"}
          whileInView={"visible"}
          transition="0.5s linear"
          viewport={{ once: true, amount: "some" }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          gap={["40px", "40px", "none", "none"]}
          flexDir={["column", "column", "row", "row"]}
          flexWrap={"wrap"}
          alignItems={["center", "center", "center", "normal"]}
          justifyContent={["center", "center", "center", "space-between"]}
        >
          {proyectsList.map((p: any, idx: number) => (
            <ProjectCard
              imgUrl={p.imgUrl}
              title={p.title}
              description={p.description}
              technologies={p.technologies}
              projectUrl={p.projectUrl}
              projectRepo={p.projectRepo}
              key={idx}
            />
          ))}
        </Flex>
      </SectionBox>
    </>
  );
};

export default Projects;
