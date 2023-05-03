import { VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const SectionBox = ({ children, id, justify }: SectionBoxProps) => {
  return (
    <VStack
      as={motion.div}
      initial={"hidden"}
      whileInView={"visible"}
      transition="0.5s ease-out"
      viewport={{ once: false, amount: "some" }}
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      }}
      id={id}
      minH="100vh"
      w="100%"
      pl={[0, 0, "60px", "60px"]}
      pt={["62px", "62px", 0, 0]}
      alignItems={["center", "center", "flex-start", "flex-start"]}
      justifyContent={justify ? justify : "center"}
      gap={5}
    >
      {children}
    </VStack>
  );
};
