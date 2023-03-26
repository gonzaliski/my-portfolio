import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Grid,
  Icon,
  IconButton,
  Link,
  LinkOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  VStack,
} from "@chakra-ui/react";
import { AiFillHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <>
      <Box bg={"gray.300"} display={["flex", "flex", "none", "none"]}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<Icon as={GiHamburgerMenu} boxSize={"90%"} />}
            variant={"ghost"}
            size="lg"
            w={"min-content"}
          />
          <MenuList>
            <LinkOverlay href="#main">
              <MenuItem
                icon={<Icon as={BsFillPersonFill} />}
                closeOnSelect={true}
              >
                Info
              </MenuItem>
            </LinkOverlay>
            <MenuItem
              icon={<Icon as={BsFillPersonFill} />}
              closeOnSelect={true}
            >
              Sobre mi
            </MenuItem>
            <MenuItem
              icon={<Icon as={BsFillPersonFill} />}
              closeOnSelect={true}
            >
              Proyectos
            </MenuItem>
            <MenuItem
              icon={<Icon as={BsFillPersonFill} />}
              closeOnSelect={true}
            >
              Skills
            </MenuItem>
            <MenuItem
              icon={<Icon as={BsFillPersonFill} />}
              closeOnSelect={true}
            >
              Contacto
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>

      <Grid
        alignContent="center"
        justifyItems="center"
        bg={"gray.300"}
        w="100%"
        h="100%"
        display={["none", "none", "grid", "grid"]}
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
