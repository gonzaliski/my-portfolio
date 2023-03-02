import { ChakraProvider, Grid, theme, VStack } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Main from "./components/Main";
import NavBar from "./components/NavBar";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" templateColumns="20% 1fr">
      <NavBar></NavBar>
      <VStack>
        <ColorModeSwitcher position="absolute" right={10} />
        <Main></Main>
      </VStack>
    </Grid>
  </ChakraProvider>
);
