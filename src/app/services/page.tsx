"use client";

import VerticalSpacer from "@/components/global/VerticalSpacer";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import GalleryItem from "@/components/custom/GalleryItem";

const page = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      offset: -10,
    });
  }, []);

  return (
    <>
      <VerticalSpacer />

      <Box
        position={"relative"}
        mx={"auto"}
        textAlign={"center"}
        pt={12}
        bgImage={"url('/roofing.jpg')"}
        bgSize={"cover"}
        minH={"80vh"}
        pos={"relative"}
      >
        <div
          className="overlay"
          style={{ background: "rgba(0,0,0,0.2)" }}
        ></div>
        <Heading size={["2xl" ,"5xl"]} color={"#ffb200"} pos={"relative"}>
          We're Provding quality roofing services
        </Heading>
        <Text
          maxW={"4xl"}
          mx={"auto"}
          textAlign={"center"}
          pos={"relative"}
          color={"#fff"}
          fontSize={["sm", "md"]}
          p={["4", "0"]}
        >
          It is a long established fact that a reader will be distracted try the
          readable content of a page when looking at its layout.The point of
          using Lorem ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>
      </Box>

      <br />
      <br />
      <HStack
        pos={"relative"}
        w={"full"}
        mt={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"64px"} p={"1px"} bgColor={"#ffb200"}></Box>
        <Heading textAlign={"center"} size={["xl", "2xl"]} color={"#1E3E62"}>
          Our Services
        </Heading>
        <Box w={"64px"} p={"1px"} bgColor={"#ffb200"}></Box>
      </HStack>

      <HStack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"center"}
        mt={20}
        gap={"4rem"}
        mx={"auto"}
        maxW={["100%", "75%"]}
        flexWrap={'wrap'}
      >
        {/* <VStack gap={"4rem"} w={"full"} pos={'relative'} top={'4rem'}> */}

        <Box
          data-aos="flip-left"
          data-aos-duration="1500"
          bgColor={"#1E3E62"}
          p={4}
          flex={1}
        >
          <Image
            src="/com-roof.jpg"
            alt="hero"
            height={"500px"}
            width={"800px"}
          />
          {/* <GalleryItem src="/com-roof.jpg" /> */}
          <Heading color={"#ffb200"}>Roof Cornering</Heading>
          <Text color={"#fff"} textStyle={"sm"}>
            Communication with your Contractor: If you are home during the
            installation, feel free to be outside watching or communicating with
            the crew.
          </Text>
        </Box>

        <Box
          pos={"relative"}
          top={[0, "5rem"]}
          data-aos="flip-right"
          data-aos-duration="1500"
          flex={1}
        >
          <Image src="/images.jpg" alt="hero" height={"500px"} width={"100%"} />
          <Box bgColor={"#1E3E62"} p={4}>
            <Heading color={"#ffb200"}>Roof Siding Install</Heading>
            <Text color={"#fff"} textStyle={"sm"}>
              Communication with your Contractor: If you are home during the
              installation, feel free to be outside watching or communicating
              with the crew.
            </Text>
          </Box>
        </Box>

        <Box
          data-aos="flip-left"
          data-aos-duration="1500"
          bgColor={"#1E3E62"}
          p={4}
          flex={1}
        >
          <Image
            src="/Contractor.jpg"
            alt="hero"
            height={"500px"}
            width={"100%"}
          />
          <Heading color={"#ffb200"}>Roof Layer Fixing</Heading>
          <Text color={"#fff"} textStyle={"sm"}>
            Communication with your Contractor: If you are home during the
            installation, feel free to be outside watching or communicating with
            the crew.
          </Text>
        </Box>

        <Box
          pos={"relative"}
          top={[0, "10rem"]}
          data-aos="flip-right"
          data-aos-duration="1500"
          flex={1}
        >
          <Image src="/Durable.jpg" alt="hero" height={"500px"} />
          <Box bgColor={"#1E3E62"} p={4}>
            <Heading color={"#ffb200"}>Roof Installation</Heading>
            <Text color={"#fff"} textStyle={"sm"}>
              A roof is the top covering of a building, including all materials
              and constructions providing protection against rain, snow,
              sunlight, extremes of temperature, and wind.
            </Text>
          </Box>
        </Box>

        {/* </VStack> */}
      </HStack>

      <VerticalSpacer h={["10vh","30vh"]} />
    </>
  );
};

export default page;
