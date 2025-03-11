import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

const VerticalSpacer = ({ h }: { h?: BoxProps["h"] }) => {
  return (
    <>
      <Box w={"full"} h={h ?? "9vh"}></Box>
    </>
  );
};

export default VerticalSpacer;
