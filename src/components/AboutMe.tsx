import { Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAboutMeItems } from "../api";
import { useCustomMediaQuery } from "../hooks";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";
import SectionBox from "./SectionBox";

const AboutMe = () => {
  const [aboutMeDataList, setAboutMeDataList] = useState([] as any);
  async function getAboutMeData() {
    const res = await getAboutMeItems();
    setAboutMeDataList(res);
  }

  useEffect(() => {
    getAboutMeData();
  }, []);
  return (
    <>
      <SectionBox id="aboutme">
        <SectionHeading>Sobre mi</SectionHeading>
        <DarkThinSubtitle textAlign={"center"} width={"80 %"}>
          Estos son algunos projectos que he realizado
        </DarkThinSubtitle>
        <AboutItemContainer>
          {aboutMeDataList.map(
            ({ imgUrl, title, description }: any, idx: number) => (
              <AboutItem
                imgUrl={imgUrl}
                title={title}
                description={description}
                key={idx}
              />
            )
          )}
        </AboutItemContainer>
      </SectionBox>
    </>
  );
};

const AboutItemContainer = ({ children }: { children: React.ReactNode }) => {
  const isSmallerThan768px = useCustomMediaQuery();
  return isSmallerThan768px ? (
    <VStack gap={"40px"}>{children}</VStack>
  ) : (
    <HStack justifyContent="space-between" w="90%" alignItems={"normal"}>
      {children}
    </HStack>
  );
};

const AboutItem = ({ imgUrl, title, description }: AboutItemProps) => {
  return (
    <VStack w="100%" maxW={"300px"} alignItems="center">
      <Image src={imgUrl} w={150} margin={5} />
      <Heading size={"lg"} textAlign={"center"}>
        {title}
      </Heading>
      <Text fontSize="lg" textAlign={"center"}>
        {description}
      </Text>
    </VStack>
  );
};

export default AboutMe;
