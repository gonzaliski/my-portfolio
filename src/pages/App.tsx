import { Box, ChakraProvider, theme, VStack } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import Contact from "../components/Contact";
import Layout from "../components/layout/Layout";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { useCustomMediaQuery } from "../hooks";

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Box overflow={"auto"} h="100vh">
          <VStack gap={[10, 10, 10, "initial"]}>
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
};
