import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Fade,
  Flex,
  Grid,
  Icon,
  Image,
  Link,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isActive, setIsActive] = useState(false);
  const menuLinksData = [
    {
      link: "main",
      content: <Icon as={AiFillHome}></Icon>,
    },
    {
      link: "aboutme",
      content: "Sobre mi",
    },
    {
      link: "projects",
      content: "Proyectos",
    },
    {
      link: "skills",
      content: "Skills",
    },
    {
      link: "contact",
      content: "Contacto",
    },
  ];

  const toggleMenu = () => {
    onToggle();
    setIsActive(!isActive);
  };

  return (
    <>
      <Box
        bg={"gray.300"}
        display={["flex", "flex", "none", "none"]}
        w={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
        p={2}
        position="fixed"
        zIndex={10}
      >
        <Box>
          {isActive ? (
            <Icon as={AiOutlineClose} boxSize={10} onClick={toggleMenu} />
          ) : (
            <Icon as={AiOutlineMenu} boxSize={10} onClick={toggleMenu} />
          )}
        </Box>
        <Image src={"/letter-g.png"} w={10} />
      </Box>
      {isOpen && (
        <Fade in={isOpen}>
          <Flex
            height={"100%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
            bg={"gray.400"}
            display={["flex", "flex", "none", "none"]}
            zIndex={2}
            position="absolute"
            pb="50%"
          >
            <Flex
              flexDir={"column"}
              alignItems="center"
              gap={10}
              fontSize={"lg"}
              fontFamily={"monospace"}
              fontWeight={600}
            >
              {menuLinksData.map((l) => (
                <HamburgerMenuLink
                  content={l.content}
                  link={l.link}
                  callback={toggleMenu}
                />
              ))}
            </Flex>
          </Flex>
        </Fade>
      )}

      <Grid
        alignContent="center"
        justifyItems="center"
        bg={"gray.300"}
        w="100%"
        h="100%"
        fontSize={"lg"}
        fontFamily={"monospace"}
        fontWeight={600}
        display={["none", "none", "grid", "grid"]}
      >
        <Breadcrumb>
          <VStack alignItems={"flex-start"} fontSize="xl">
            {menuLinksData.map((l) => (
              <MyMenuLink link={l.link} content={l.content}></MyMenuLink>
            ))}
          </VStack>
        </Breadcrumb>
      </Grid>
    </>
  );
};

const MyMenuLink = ({ link, content }: MyMenuLinkProps) => {
  const smoothScroll = (link: string) => {
    const element = document.getElementById(link);
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <BreadcrumbItem>
      <BreadcrumbLink onClick={() => smoothScroll(link)}>
        {content}
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};

const HamburgerMenuLink = ({
  content,
  link,
  callback,
}: HamburgerMenuLinkProps) => {
  return (
    <Link href={"#" + link} onClick={() => callback()}>
      {content}
    </Link>
  );
};

export default NavBar;
