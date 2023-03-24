import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillMail } from "react-icons/ai";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import SectionBox from "./SectionBox";

const contactItems = [
  {
    icon: AiFillMail,
    text: "gonzalomendezst01@gmail.com",
  },
];

const Contact = () => {
  return (
    <>
      <SectionBox id="contact">
        <SectionHeading>Contacto</SectionHeading>
        <DarkThinSubtitle>Ponéte en contacto conmigo</DarkThinSubtitle>
        <VStack alignItems={"flex-start"}>
          {contactItems.map((it, idx: number) => (
            <MyListItem icon={it.icon} text={it.text} key={idx} />
          ))}
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
