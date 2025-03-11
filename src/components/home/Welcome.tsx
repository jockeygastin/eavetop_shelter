'use client'
import { Box, Heading, Image, Stack, Text,Button } from "@chakra-ui/react";
import React from "react";
// import Lottie from "lottie-react";
// import animation from "../../../public/lottie/animation.json";



const Welcome = () => {
  return (
    <>
      <Stack
        direction={["column", "row"]}
        alignItems={"center"}
        justifyContent={"space-between"}
        bgColor={["#fff"]}
      >
        <Image w={["full", "50%"]} src="/welcome.svg" pt={[6]} />
        {/* <Lottie animationData={animation} loop={true} /> */}

        <Box px={[6, 16]} maxW={["x"]}>
          <Heading size={["2xl", "5xl"]} color={"#1e3e62"}>
            Welcome to ApexRoofs Repairingour{" "}
            <span style={{ color: "#ffb200" }}>goal is to fix your Roof</span>
          </Heading>
          <br />
          <Text fontWeight={"semibold"} textStyle={["md", "lg"]}>
            {" "}
            Everything we do at Home instead CareGiver is driven by our
            universal mission:To enhance the lives of aging adults and their
            families.
          </Text>
          <br />
          <Text textStyle={["sm", "md"]}>
            It is a ling established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that has a more-or-less normal distribution
            of letters,
          </Text>
          <br />

          <Button
                      as={"a"}
                      // @ts-ignore
                      href={"/auth/login"}
                      rounded={"full"}
                      size={"lg"}
                      bgColor={'#1e3e62'}
                      color={'#FFF'}
                      _hover={{bgColor:"#ffb200", color:"#fff"}}
                    >
                      READ MORE
                    </Button>
        </Box>
      </Stack>
    </>
  );
};

export default Welcome;
