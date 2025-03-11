"use client";

import { Box, ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, ThemeProviderProps } from "next-themes";
import Navbar from "../global/Navbar";
import Footer from "../global/Footer";

export function Provider(props: ThemeProviderProps) {
  return (
    // @ts-ignore
    <ChakraProvider value={defaultSystem}>
      <SessionProvider>
        <ThemeProvider attribute="class" disableTransitionOnChange {...props}>
          <Navbar />
          <Box minH={"100vh"}>{props?.children}</Box>
          <Footer />
        </ThemeProvider>
      </SessionProvider>
    </ChakraProvider>
  );
}
