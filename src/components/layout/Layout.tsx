import { Grid, useMediaQuery } from "@chakra-ui/react";
import { useCustomMediaQuery } from "../../hooks";
import NavBar from "../NavBar";

const Layout = ({ children }: { children: React.ReactElement }) => {
  const isSmallerThan768px = useCustomMediaQuery();
  return (
    <Grid
      minH="100vh"
      templateColumns={isSmallerThan768px ? "none" : "20% 1fr"}
    >
      <NavBar shouldBeHamburger={isSmallerThan768px}></NavBar>
      {children}
    </Grid>
  );
};

export default Layout;
