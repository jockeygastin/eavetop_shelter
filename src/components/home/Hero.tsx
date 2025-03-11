"use client"
import React from 'react'
import { Image, Text, Heading, HeadingPropsProvider, Box, HStack, Stack } from "@chakra-ui/react"
import Lottie from "lottie-react";
import animation from "../../../public/lottie/animation.json";


const Hero = () => {
  return (
    <>
    <Stack direction={['column', 'row']} alignItems={'center'} justifyContent={'space-between'}
     bgColor={'#1E3E62'} pt={[10, 0]} height={['60vh', '80vh']}>

    <Box px={[8,16]} maxW={['2xl']}>
     <Heading size={['3xl', '5xl']} color={'#FFB200'}>
      Realiable Roofing & Fixing Services.
      </Heading> 
     <Text color={'#FFF'}>There are many variation of passages of Lorem lpsum available,
      but the majority have suffered alternation in some form.
     </Text>
    </Box>
    {/* <Image src="/roofing.jpg" alt="hero" height={'750px'} */}
      {/* width={'55%'}     */}
      <Box px={[30,10]} maxW={['xl']} transform={'auto'} translateX={['0', '-10vw']}>
      <Lottie animationData={animation} loop={true}
      />
      </Box>

      </Stack>
    </>
  )
}

export default Hero