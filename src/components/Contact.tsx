import { Flex, HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillMail } from "react-icons/ai";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import { TechnologyCard } from "./TechnologyCard";

const contactItems = [
  {
    icon: AiFillMail,
    text: "gonzalomendezst01@gmail.com",
  },
];

const Contact = () => {
  const isSmallerThan768px = useCustomMediaQuery();
  const technologiesUsed = ["react.js", "typescript", "chakra ui"];
  return (
    <>
      <SectionBox
        id="contact"
        justify={isSmallerThan768px ? "flex-start" : null}
      >
        <SectionHeading>Contacto</SectionHeading>
        <DarkThinSubtitle>Ponéte en contacto conmigo</DarkThinSubtitle>
        <VStack alignItems={"flex-start"}>
          {contactItems.map((it, idx: number) => (
            <MyListItem icon={it.icon} text={it.text} key={idx} />
          ))}
        </VStack>
        <VStack pt={250}>
          <DarkThinSubtitle color={"gray"}>
            Esta web está hecha en:
          </DarkThinSubtitle>
          <HStack alignItems={"baseline"}>
            {technologiesUsed.map((t) => (
              <TechnologyCard technology={t}></TechnologyCard>
            ))}
          </HStack>
        </VStack>
      </SectionBox>
    </>
  );
};

const MyListItem = ({ icon, text }: MyListItemProps) => {
  return (
    <HStack>
      <Icon as={icon} boxSize={10}></Icon>
      <Text fontSize={"md"}>{text}</Text>
    </HStack>
  );
};

export default Contact;
