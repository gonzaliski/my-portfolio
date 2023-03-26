import { Grid, useMediaQuery } from "@chakra-ui/react";
import { useCustomMediaQuery } from "../../hooks";
import NavBar from "../NavBar";

const Layout = ({ children }: { children: React.ReactElement }) => {
  return (
    <Grid minH="100vh" templateColumns={["none", "none", "20% 1fr"]}>
      <NavBar></NavBar>
      {children}
    </Grid>
  );
};

export default Layout;
