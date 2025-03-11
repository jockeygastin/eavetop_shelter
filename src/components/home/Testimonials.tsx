import React from "react";
import { Box, HStack, Heading, Image, Stack, Text } from "@chakra-ui/react";
import VerticalSpacer from "../global/VerticalSpacer";
import { EmblaOptionsType } from "embla-carousel";
import EmblaCarousel from "../custom/embla/EmblaCarousel";
import { IoMdStar } from "react-icons/io";

const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Testimonials = () => {
  return (
    <>
      <HStack w={"full"} mt={12} mx={["4", "16"]}>
        <Box w={"64px"} p={["1px"]} bgColor={"#ffb200"}></Box>
        <Heading size={["xl", "2xl"]} color={"#1E3E62"}>
          Testimonials
        </Heading>
        <Box w={"64px"} p={"1px"} bgColor={"#ffb200"}></Box>
      </HStack>

      <Stack
        h={"80vh"}
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={"#1E3E62"}
      >
        <Box px={[4, 16]} maxW={['full', '85%']} mt={["8", "16"]}>
          <Stack direction={["column", "row"]} justifyContent={"space-between"}>
            <Box p={[4, 0]} maxW={"500px"}>
              <Heading size={["xl", "3xl"]} color={"#FFB200"}>
                Our Happy Clients Says About Us{" "}
              </Heading>
              <Text color={"#FFF"} textStyle={["sm", "md"]}>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </Text>
            </Box>

            <Box>
              <HStack>
                <Text textStyle={["3xl", "5xl"]} fontWeight="semibold" color={"#FFB200"} gap={'4px'} mt={["6","8"]}>
                  597
                </Text>
                
                <Heading size={["sm", "3xl"]} color={"#fff"} maxW={"350px"} mt={["10", "8"]}>
                  Customer have given rating for support
                </Heading>
              
              </HStack>
              <HStack>
                <HStack pr={[4,8]} mr={[2, 8]} borderRight={"2px solid #FAFAFA"} mx={'15px'} gap={1}>
                  <IoMdStar color={"#FF8400"} />
                  <IoMdStar color={"#FF8400"} />
                  <IoMdStar color={"#FF8400"} />
                  <IoMdStar color={"#FF8400"} />
                  <IoMdStar color={"#FF8400"} />
                </HStack>

                <Text color={"#fff"} fontSize={["sm", "md"]}>Average rating 5/5</Text>
              </HStack>
            </Box>
          </Stack>
          <br />

          <br />
          <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </Box>
      </Stack>
    </>
  );
};

export default Testimonials;
