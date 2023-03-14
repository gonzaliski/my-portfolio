import { Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAboutMeItems } from "../api";
import { AboutItemProps } from "../custom";
import { SectionBox } from "../ui/boxes";
import { DarkThinSubtitle, SectionHeading } from "../ui/text";

const AboutMe = () => {
  const [aboutMeDataList, setAboutMeDataList] = useState([] as any);
  async function getAboutMeData() {
    const res = await getAboutMeItems();
    console.log(res);

    setAboutMeDataList(res);
  }

  useEffect(() => {
    getAboutMeData();
  }, []);
  return (
    <>
      <SectionBox id="aboutme">
        <SectionHeading>Sobre mi</SectionHeading>
        <DarkThinSubtitle>
          Estos son algunos projectos que he realizado
        </DarkThinSubtitle>
        <HStack justifyContent="space-between" w="90%" alignItems={"normal"}>
          {aboutMeDataList.map(({ imgUrl, title, description }: any) => (
            <AboutItem
              imgUrl={imgUrl}
              title={title}
              description={description}
            />
          ))}
        </HStack>
      </SectionBox>
    </>
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
