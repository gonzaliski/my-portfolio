import { Heading, Text } from "@chakra-ui/react";

export const SectionHeading = (props: any) => {
  return (
    <Heading
      size="3xl"
      bgGradient="linear(to-l, blue.300, purple.600)"
      bgClip="text"
      fontWeight="extrabold"
      {...props}
    >
      {props.children}
    </Heading>
  );
};

export const DarkThinSubtitle = (props: any) => {
  return (
    <Text fontSize="2xl" {...props} fontFamily={"monospace"}>
      {props.children}
    </Text>
  );
};
