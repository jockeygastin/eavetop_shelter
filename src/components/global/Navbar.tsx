import {
  Box,
  Button,
  Drawer,
  HStack,
  IconButton,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Services",
    url: "/services",
  },

  {
    label: "Contact Us",
    url: "/contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false)


  return (
    <>
      <Box
        pos={"fixed"}
        top={0}
        left={0}
        width={"100%"}
        className="navbar"
        zIndex={999}
      >
        <HStack p={6} color={"#FFF"}>
          <Logo />

          <Spacer />

          <HStack gap={4} display={["none", "flex"]} w={'50%'}>
            <HStack gap={8} w={'full'} justifyContent={'flex-start'}>
              {links.map((link, i) => (
                <Link href={link.url} key={i}>
                  <Text>{link.label}</Text>
                </Link>
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
              color={"#FFF"}
              _hover={{
                color: "#000",
              }}
            >
              Create Account
            </Button>

            <Button
              as={"a"}
              // @ts-ignore
              href={"/auth/login"}
              rounded={"full"}
              size={"lg"}
              bgColor={"#FFF"}
              color={"#FFB200"}
              _hover={{ bgColor: "#ffb200", color: "#FFF" }}
            >
              Sign In
            </Button>
          </HStack>

          <Box display={["flex", "none"]}>
            <Drawer.Root open={open} onOpenChange={(e) => setOpen(e.open)}>
              <Drawer.Backdrop />
              <Drawer.Trigger asChild>
                <IconButton
                  aria-label="Toggle Menu"
                  children={<HiOutlineMenuAlt3 />}
                  variant={'ghost'}
                  color={'#FFF'}
                />
              </Drawer.Trigger>

              <Drawer.Positioner>
                <Drawer.Content>
                  <Drawer.CloseTrigger>
                    <IconButton
                      pos={"absolute"}
                      top={4}
                      right={4}
                      children={<IoClose />}
                      fontSize={"20px"}
                      variant={'ghost'}
                    />
                  </Drawer.CloseTrigger>

                  <Drawer.Header>
                    <Drawer.Title>
                      <Logo color={"#000"} />
                    </Drawer.Title>
                  </Drawer.Header>

                  <Drawer.Body>
                    {links.map((link, i) => (
                      <Link href={link.url} key={i} onClick={() => setOpen(false)}>
                        <Text mt={4} color={"#000"}>
                          {link.label}
                        </Text>
                      </Link>
                    ))}
                  </Drawer.Body>
                  <Drawer.Footer />
                </Drawer.Content>
              </Drawer.Positioner>
            </Drawer.Root>
          </Box>
        </HStack>
      </Box>

      <Box h={["0", "0"]}></Box>
    </>
  );
};

export default Navbar;
