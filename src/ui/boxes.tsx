import { VStack } from "@chakra-ui/react";

export const SectionBoxDesktop = ({ children, id }: SectionBoxProps) => {
  return (
    <VStack
      id={id}
      minH="100vh"
      w="100%"
      alignItems={"flex-start"}
      justifyContent={"center"}
      pl={20}
      gap={5}
    >
      {children}
    </VStack>
  );
};

export const SectionBoxMobile = ({ children, id }: SectionBoxProps) => {
  return (
    <VStack
      id={id}
      minH="100vh"
      w="100%"
      alignItems={"center"}
      justifyContent={"center"}
      gap={5}
    >
      {children}
    </VStack>
  );
};
