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
        maxW={"300px"}
        h="100%"
      >
        <VStack alignItems={"flex-start"} fontSize="xl">
          <Link>
            <Icon as={AiFillHome}></Icon>
          </Link>
          <Link>Sobre mi</Link>
          <Link>Mis proyectos</Link>
          <Link>Skills</Link>
          <Link>Educación</Link>
          <Link>Contacto</Link>
        </VStack>
      </Grid>
    </>
  );
};

export default NavBar;
