import { Button, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";

const links = ["Home", "About", "Services", "Contact"];

const Navbar = () => {
  return (
    <>
      <HStack p={8}>
        <Image src="/next.svg" alt="logo" h={6} />

        <Spacer />

        <HStack gap={8}>
          {links.map((link, i) => (
            <Text key={i}>{link}</Text>
          ))}
        </HStack>

        <Spacer />

        <Button
          as={"a"}
          // @ts-ignore
          href={"/auth/register"}
          variant={"outline"}
          rounded={"full"}
          size={"lg"}
        >
          Create Account
        </Button>

        <Button
          as={"a"}
          // @ts-ignore
          href={"/auth/login"}
          rounded={"full"}
          size={"lg"}
        >
          Sign In
        </Button>
      </HStack>
    </>
  );
};

export default Navbar;
