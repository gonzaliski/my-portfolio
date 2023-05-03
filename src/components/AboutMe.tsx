import { Flex, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getAboutMeItems } from "../api";
import { useCustomMediaQuery } from "../hooks";
import { SectionBox } from "../ui/boxes";
import { SectionHeading } from "../ui/text";
import { motion } from "framer-motion";

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
        <Flex
          as={motion.div}
          initial={"hidden"}
          whileInView={"visible"}
          transition="0.5s linear"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          w={"90%"}
          gap={["40px", "40px", "none", "none"]}
          flexDir={["column", "column", "row", "row"]}
          flexWrap={"wrap"}
          justifyContent={["center", "center", "center", "space-between"]}
          alignItems={["center", "center", "center", "normal"]}
        >
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
        </Flex>
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
