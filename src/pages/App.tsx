import { Box, ChakraProvider, Grid, theme, VStack } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Box overflow={"auto"} h="100vh">
        <VStack>
          <Main></Main>
          <AboutMe></AboutMe>
          <Projects></Projects>
          <Skills></Skills>
          <Contact></Contact>
        </VStack>
      </Box>
    </Layout>
  </ChakraProvider>
);
