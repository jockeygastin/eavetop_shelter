import VerticalSpacer from "@/components/global/VerticalSpacer";
import {
  Box,
  Heading,
  HStack,
  Image,
  Show,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <>
      <VerticalSpacer />
      <Stack
        pos={"relative"}
        direction={["column", "row"]}
        justifyContent={"space-evenly"}
        minH={"80vh"}
        bgImage={'url("/roof.jpg")'}
        bgSize={"cover"}
        pt={["0", "4"]}
      >
        <div className="overlay"></div>
        <Box zIndex={9} p={[4, 8]} maxW={["100%", "95%"]}>
          <Heading
            size={["2xl", "5xl"]}
            color={"#ffb200"}
            maxW={["100%", "80%"]}
          >
            we're Committed To Roofing Excellence
          </Heading>
          <br />
          <Text color={"#fff"} maxW={["100%", "80%"]}>
            Find the best roofing solutions from handling insurance
            communications to coordinating with trusted and vetted contractors
            are taken care of.
          </Text>
        </Box>
        <Image
          src="/binya.jpg"
          alt="hero"
          height={["40%", "500px"]}
          width={["100%", "60%"]}
          zIndex={9}
          p={["2", "0"]}
          mb={["20", "2"]}
        />
      </Stack>

      <VerticalSpacer />
      <HStack
        w={"full"}
        mt={[0, 12]}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Box w={"64px"} p={"1px"} bgColor={"#ffb200"}></Box>
        <Heading textAlign={"center"} size={["xl", "4xl"]} color={"#1E3E62"}>
          About Us
        </Heading>

        <Box w={"64px"} p={"1px"} bgColor={"#ffb200"}></Box>
      </HStack>
      <Stack
        direction={["column", "row"]}
        justifyContent={"space-between"}
        bgImage={["none", "url('/drawing.svg')"]}
        bgSize={"contain"}
        bgRepeat={"no-repeat"}
        w={["100%", "full"]}
        minH={["100%", "100vh"]}
      >
        <br />
        <Box display={["block", "none"]}>
          <Image
            src="/roofing.jpg"
            alt="hero"
            height={"450px"}
            width={"100%"}
            p={["2", "0"]}
          />
        </Box>
        <Box></Box>
        <Box px={[8, 10]} maxW={["3xl", "6xl"]} mt={["10", "52"]}>
          <Heading size={["2xl", "4xl"]} color={"#ffb200"}>
            Realiable Roofing & Fixing Services.
          </Heading>
          <br />
          <Text color={["#000", "#FFF"]} maxW={["0xl", "70%"]}>
            There are many variation of passages of Lorem lpsum available, but
            the majority have suffered alternation in some form.
          </Text>
          <br />
          <HStack fontWeight={"semibold"} color={["#1E3E62", "#FFF"]}>
            <FaCheckCircle color="#ffb200" size={"1.0em"} style={{ flex: 1 }} />
            <p style={{ flex: 7 }}>32k parrtners Have Worked Us.</p>
          </HStack>
          <br />
          <HStack fontWeight={"semibold"} color={["#000", "#ffb200"]}>
            <FaCheckCircle color="#ffb200" size={"1.0em"} style={{ flex: 1 }} />
            <p style={{ flex: 7 }}>
              Professional And Experienced Human Resources.
            </p>
          </HStack>
          <br />
          <HStack fontWeight={"semibold"} color={["#1E3E62", "#FFF"]}>
            <FaCheckCircle color="#ffb200" size={"1.0em"} style={{ flex: 1 }} />
            <p style={{ flex: 7 }}>Provide The Best Roof Services</p>
          </HStack>
          <br />
        </Box>
      </Stack>

      {/* <Box display={["block", "none"]}>      
        <Image src="/roofing.jpg" alt="hero" height={'400px'} width={'100%'} />
      </Box> */}
    </>
  );
};

export default page;
