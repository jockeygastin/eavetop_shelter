"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, ThemeProviderProps } from "next-themes";

export function Provider(props: ThemeProviderProps) {
  return (
    // @ts-ignore
    <ChakraProvider value={defaultSystem} suppressHydrationWarning>
      <SessionProvider>
        <ThemeProvider attribute="class" {...props} />
      </SessionProvider>
    </ChakraProvider>
  );
}
