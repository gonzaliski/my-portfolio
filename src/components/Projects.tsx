import { HStack, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProjectsData } from "../api";
import { useCustomMediaQuery } from "../hooks";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import ProjectCard from "./ProjectCard";
import SectionBox from "./SectionBox";

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
        <DarkThinSubtitle textAlign={"center"} width={"80 %"}>
          Estos son algunos projectos que he realizado
        </DarkThinSubtitle>
        <ProjectCardContainer>
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
        </ProjectCardContainer>
      </SectionBox>
    </>
  );
};

const ProjectCardContainer = ({ children }: { children: React.ReactNode }) => {
  const isSmallerThan768px = useCustomMediaQuery();
  return isSmallerThan768px ? (
    <VStack gap={"40px"}>{children}</VStack>
  ) : (
    <HStack justifyContent="space-between" w="90%" alignItems={"normal"}>
      {children}
    </HStack>
  );
};

export default Projects;
