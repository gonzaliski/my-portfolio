import { Grid, Icon, Link, VStack } from "@chakra-ui/react";
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
        <VStack alignItems={"flex-start"} fontSize="xl">
          <Link href="#main">
            <Icon as={AiFillHome}></Icon>
          </Link>
          <Link>Sobre mi</Link>
          <Link href="#proyects">Mis proyectos</Link>
          <Link>Skills</Link>
          <Link>Educación</Link>
          <Link>Contacto</Link>
        </VStack>
      </Grid>
    </>
  );
};

export default NavBar;
