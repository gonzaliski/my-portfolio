import { Heading, Text } from "@chakra-ui/react";
import { ChildrenProps } from "../custom";

export const SectionHeading = ({ children }: ChildrenProps) => {
  return (
    <Heading
      size="3xl"
      bgGradient="linear(to-l, blue.300, purple.600)"
      bgClip="text"
      fontWeight="extrabold"
    >
      {children}
    </Heading>
  );
};

export const DarkThinSubtitle = ({ children }: any, { props }: any) => {
  return (
    <Text fontSize="2xl" {...props} fontFamily={"monospace"}>
      {children}
    </Text>
  );
};
