import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { MyListItemProps } from "../custom";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";

const contactItems = [
  {
    icon: AiFillMail,
    text: "gonzalomendezst01@gmail.com",
  },
  {
    icon: AiFillPhone,
    text: "+54 11 32708118",
  },
];

const Contact = () => {
  return (
    <>
      <SectionBox id="contact">
        <SectionHeading>Contacto</SectionHeading>
        <DarkThinSubtitle>Ponéte en contacto conmigo</DarkThinSubtitle>
        <VStack alignItems={"flex-start"}>
          {contactItems.map((it) => (
            <MyListItem icon={it.icon} text={it.text} />
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
