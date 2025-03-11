"use client";
import React, { useState } from "react";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { BiSolidTimer } from "react-icons/bi";

import {
  Box,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  Input,
  Container,
  Textarea,
  Button,
} from "@chakra-ui/react";
import VerticalSpacer from "@/components/global/VerticalSpacer";
import { InputGroup } from "@/components/ui/input-group";
import { LuUser } from "react-icons/lu";

const page = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      {/* <VerticalSpacer /> */}
      <HStack bgColor={"#1e3e62"} flexWrap={["wrap-reverse", "nowrap"]} p={[2, 0]}>
        <Image
          src="/roofing.jpg"
          alt="hero"
          height={["400px", "700px"]}
          width={["100%", "70%"]}
        />
        <br />
        <Box height={["auto", "70vh"]} width={["100%", "60%"]}>
          <Box maxW={["100%", "70%"]} mx={[0, 16]} mt={20}>
            <Heading size={["xl", "5xl"]} color={"#ffb200"}>
              Solutions for an Every Roofing Problem
            </Heading>
            <Text color={"#fff"} textStyle={["sm", "md"]}>
              We'd love to hear from you.Welcome to ApexRoofs Repairingour goal
              is to fix your Roof Everything we do at Home instead CareGiver is
              driven by our universal mission: To enhance the lives of aging
              adults and their families.It is a ling established fact that a
              reader will be distracted by the readable content of a page when
              looking at its layout. The point of using Lorem Ipsum is that has
              a more-or-less normal distribution of letters,
            </Text>
          </Box>
        </Box>
      </HStack>

      <Box bgColor={["#1e3e62", "#FFF"]}>
      <Container bgColor={"#1e3e62"} pos={"relative"} top={['unset', "-8vh"]} mb={20}>
        <Stack
          direction={["column", "row"]}
          p={[4, 16]}
          height={"70vh"}
          justifyContent={"space-between"}
        >
          <Box>
            <HStack>
              <Box w={["50px", "64px"]} p={"1px"} bgColor={"#ffb200"}></Box>
              <Heading color={"#fff"} fontSize={["lg", "4xl"]}>
                Book Appointment
              </Heading>
              </HStack>
              <br />

            <Heading
              size={["xl", "4xl"]}
              color={"#ffb200"}
              maxW={["100%", "70%"]}
            >
              Get Your Roofing Solutions With Our Profession
            </Heading>
            <Text color={"#FFF"} maxW={["100%", "70%"]} textStyle={["sm", "md"]}>
              It is a ling established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </Text>
            <br />
            <Image
              src="/kindel.png"
              w={["full"]}
              h={["full", "40vh"]}
              objectFit={"contain"}
              mt={"2"}
              display={["none", "block"]}
            />
          </Box>

          <Box bgColor={"#FFF"} height={["70vh", "50vh"]} py={4} px={6} width={["100%","45%"]}>
            <Heading color={"#1e3e62"} mb={6} fontSize={["md", "xl"]}>
              Book Roofing Inspection
            </Heading>
            <Stack direction={["column", "row"]} w={'full'} gap={[4, "10"]} mb={6} flexWrap={"wrap"}>
              <InputGroup flex="1" startElement={<LuUser />}>
                <Input placeholder="Name" />
              </InputGroup>

              <InputGroup flex="1" startElement={<IoMdMail />}>
                <Input ps="2.3em" placeholder="Enter Your Email" />
              </InputGroup>
            </Stack>

            <Stack direction={["column", "row"]}  gap={[4, "10"]} mb={6}>
              <InputGroup flex="1" startElement={<FaPhoneVolume />}>
                <Input
                  placeholder="Phone"
                  type="tel"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    if (isNaN(Number(e.target.value))) return;
                    setPhone(e.target.value);
                  }}
                />
              </InputGroup>

              <InputGroup flex="1" startElement={<MdLocationPin />}>
                <Input ps="2.3em" placeholder="Your Location" />
              </InputGroup>
            </Stack>

            <Stack  gap={[4, "10"]} direction={["column", "row"]} display={["none", "flex"]}>
              <InputGroup flex="1" startElement={<HiMiniCalendarDateRange />}>
                <Input placeholder="Select Date" />
              </InputGroup>

              <InputGroup flex="1" startElement={<BiSolidTimer />}>
                <Input ps="2.3em" placeholder="Choose Time" />
              </InputGroup>
            </Stack>
            <Box mt={2}>
              <Textarea
                variant="outline"
                placeholder="Write Your Message"
                height={"15vh"}
              />
            </Box>
            <Button
              w={"full"}
              mt={2}
              colorPalette={"cyan"}
              bgColor={"#ffb200"}
              _hover={{ bgColor: "#1e3e62" }}
            >
              Submit Now
            </Button>
          </Box>
        </Stack>
      </Container>
      <br /> <br />
      <br /> <br />
      <br /> <br />


      </Box>
    </>
  );
};

export default page;
