import {
  Box,
  Container,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <Container>
          <Stack direction={["column", "row"]} p={8} gap={16}>
            <Box w={"full"} color={"#FFF"}>
              <HStack mb={4}>
                <Logo />
              </HStack>
              <Text fontSize={"sm"}>
                Lorem ipsum dolor sit amet. Quos voluptas sunt tempore ipsam
                odio ad odit tenetur autem placeat mollitia.
              </Text>
            </Box>
            <Box w={"full"} color={"#FFF"}>
              <Text fontSize={20} mb={4}>
                Policies
              </Text>
              <Link href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Terms of Use
                </Text>
              </Link>
              <br />
              <Link href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Privacy Policy
                </Text>
              </Link>
              <br />
              <Link href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Refund Policy
                </Text>
              </Link>
            </Box>
            <Box w={"full"} color={"#FFF"}>
              <Text fontSize={20} mb={3}>Solutions</Text>
              <Link style={{width: "100%"}} href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Team
                </Text>
              </Link>  
              <Link style={{width: "100%"}} href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Guide
                </Text>
              </Link>  
              <Link style={{width: "100%"}} href="#">
                <Text fontSize={"sm"} color={"#FFF"} mb={1}>
                  Service
                </Text>
              </Link>
            </Box>
            <Box w={"full"} color={"#FFF"}>
              <Text fontSize={20}>Company</Text>
            </Box>

            {/* <div className="flex flex-row"></div> = <HStack> */}
            {/* <div className="flex flex-col"></div> = <VStack> */}
            {/* <div className="flex"></div> = <Stack> */}
            {/* <div></div> = <Box> */}
          </Stack>
        </Container>
      </div>
    </>
  );
};

export default Footer;
