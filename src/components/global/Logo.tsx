import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";

const Logo = (props: { color?: string }) => {
  return (
    <>
      <HStack alignItems={"center"} justifyContent={"flex-start"}>
        <Image src="/logo.svg" alt="logo" h={6} />
        <Text fontSize={"xl"} fontWeight={"bold"} color={props.color ?? "#FFF"}>
          Eavetop Shelters
        </Text>
      </HStack>
    </>
  );
};

export default Logo;
