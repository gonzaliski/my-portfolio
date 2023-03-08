import { Heading, HStack, Image, VStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAboutMeItems } from "../api";
import { SectionBox } from "../ui/boxes";
import { SectionHeading } from "../ui/text";

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
        <HStack justifyContent="space-between" w="90%">
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
    <VStack w="300px">
      <Image
        src={imgUrl}
        alt="Green double couch with wooden legs"
        borderRadius="xl"
        w={150}
      />
      <Heading size={"lg"}>{title}</Heading>
      <Text fontSize="lg">{description}</Text>
    </VStack>
  );
};

export default AboutMe;
