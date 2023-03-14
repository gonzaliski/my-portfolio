import { Heading, HStack } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getProjectsData } from "../api";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [proyectsList, setProyectsList] = useState([] as any);
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
      <SectionBox id="projects">
        <SectionHeading>Proyectos</SectionHeading>
        <DarkThinSubtitle>
          Estos son algunos projectos que he realizado
        </DarkThinSubtitle>
        <HStack gap={10} wrap={"wrap"}>
          {proyectsList.map((p: any) => (
            <ProjectCard
              imgUrl={p.imgUrl}
              title={p.title}
              description={p.description}
              technologies={p.technologies}
              projectUrl={p.projectUrl}
              projectRepo={p.projectRepo}
            />
          ))}
        </HStack>
      </SectionBox>
    </>
  );
};

export default Projects;
