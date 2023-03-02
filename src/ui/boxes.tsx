import { VStack } from "@chakra-ui/react";

export const SectionBox = ({ children, id }: SectionBoxProps) => {
  return (
    <VStack
      id={id}
      h="100vh"
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
