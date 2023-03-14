import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Icon,
  VStack,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <>
      <Grid
        alignContent="center"
        justifyItems="center"
        bg={"gray.300"}
        w="100%"
        h="100%"
      >
        <Breadcrumb>
          <VStack alignItems={"flex-start"} fontSize="xl">
            <BreadcrumbItem>
              <BreadcrumbLink href="#main">
                <Icon as={AiFillHome}></Icon>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#aboutme">Sobre mi</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#projects">Proyectos</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#skills">Skills</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink href="#contact">Contacto</BreadcrumbLink>
            </BreadcrumbItem>
          </VStack>
        </Breadcrumb>
      </Grid>
    </>
  );
};

export default NavBar;
