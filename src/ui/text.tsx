import { Heading, Text } from "@chakra-ui/react";

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

export const DarkThinSubtitle = ({ children }: ChildrenProps) => {
  return <Text fontSize="2xl">{children}</Text>;
};
