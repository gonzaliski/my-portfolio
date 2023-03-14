import { Box, ChakraProvider, Grid, theme, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" templateColumns="20% 1fr">
      <NavBar></NavBar>
      <Box overflow={"auto"} h="100vh">
        <VStack>
          <ColorModeSwitcher position="absolute" right={10} top={5} />
          <Main></Main>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
        </VStack>
      </Box>
    </Grid>
  </ChakraProvider>
);
