import { VStack } from "@chakra-ui/react";

export const SectionBox = ({ children, id, justify }: SectionBoxProps) => {
  return (
    <VStack
      id={id}
      minH="100vh"
      w="100%"
      pl={[0, 0, "60px", "60px"]}
      alignItems={["center", "flex-start"]}
      justifyContent={justify ? justify : "center"}
      gap={5}
    >
      {children}
    </VStack>
  );
};
