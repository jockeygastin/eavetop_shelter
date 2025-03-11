"use client";
import {
  Box,
  Image,
  ImageProps,
  DialogBody,
  DialogContent,
  DialogBackdrop,
  useDisclosure,
  DialogRoot,
  DialogTrigger,
} from "@chakra-ui/react";
import React from "react";
import { IoSearch } from "react-icons/io5";

interface GalleryItemProps extends ImageProps {
  disableAnimation?: boolean;
}

const GalleryItem = (props: GalleryItemProps) => {
  const { open, onClose, setOpen } = useDisclosure();
  return (
    <>
      <DialogRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size={["sm", "sm", "lg", "xl"]}
      >
        <DialogBackdrop backdropFilter="blur(10px) hue-rotate(90deg)" />
        <DialogTrigger asChild>
          <Box
            data-aos={props?.disableAnimation ? "none" : "fade-up"}
            // pos={"relative"}
            transition={"all .3s ease"}
            _hover={{
              boxShadow: "lg",
            }}
          >
            <Box
              pos={"absolute"}
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgColor={"blackAlpha.600"}
              p={[4]}
              display={"grid"}
              placeContent={"center"}
              zIndex={2}
              cursor={"pointer"}
              transition={"all .3s ease"}
              opacity={0}
              _hover={{
                opacity: 1,
              }}
            >
              <IoSearch color="#FFF" fontSize={24} />
            </Box>
            <Image
              pos={"relative"}
              src={props?.src}
              h={[48, "sm"]}
              w={["full", 72]}
              objectFit={"cover"}
              {...props}
            />
          </Box>
        </DialogTrigger>
        <DialogContent>
          <DialogBody p={0} overflow={"hidden"}>
            <Image src={props?.src} />
          </DialogBody>
        </DialogContent>
      </DialogRoot>
    </>
  );
};

export default GalleryItem;
