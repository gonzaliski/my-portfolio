import { VStack } from "@chakra-ui/react";

export const SectionBox = ({ children, id, justify }: SectionBoxProps) => {
  return (
    <VStack
      id={id}
      minH="100vh"
      w="100%"
      pl={[0, 0, "60px", "60px"]}
      pt={[35, 35, 0, 0]}
      alignItems={["center", "center", "flex-start", "flex-start"]}
      justifyContent={justify ? justify : "center"}
      gap={5}
    >
      {children}
    </VStack>
  );
};
