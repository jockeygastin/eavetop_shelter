import { Box, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoMdStar } from "react-icons/io";

const FeedbackSlide = () => {
  return (
    <>
      <Box bgColor={"#dadada"} p={4} py={8} rounded={4}>
        <HStack justifyContent={"flex-start"} gap={4} alignItems={"center"} mb={2}>
          <Image
            src="/shevich.jpg"
            alt="feedback"
            height={"64px"}
            width={"64px"}
            rounded={"full"}
            objectFit={"cover"}
            objectPosition={"top"}
          />
          <Box>
            <Heading>Sokina Malika</Heading>
            <Text fontSize={"xs"}>
              Porject Manager
            </Text>
          </Box>
        </HStack>
        <Text fontSize={"sm"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum eaque rerum dolorem minus inventore eligendi voluptas eveniet consequuntur molestias?
        </Text>
        <HStack gap={1} mt={2}>
          {Array.from(Array(5).keys()).map((index) => (
            <IoMdStar key={index}  color={"#FF8400"} />
          ))}
        </HStack>
      </Box>
    </>
  );
};

export default FeedbackSlide;
