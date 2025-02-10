import { Box, Container, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    return (
        <>
            <Container>
                <Stack direction={["column", "row"]} p={8} gap={16}>


                    <Box w={'full'} >
                        <Image src='/next.svg' h={6} mb={4} />
                        <Text fontSize={'sm'}>
                            Lorem ipsum dolor sit amet. Quos voluptas sunt tempore ipsam odio ad odit tenetur autem placeat mollitia.
                        </Text>
                    </Box>
                    <Box w={'full'} >
                        <Text fontSize={20} mb={4}>Policies</Text>
                        <Link href="#">
                            <Text fontSize={'sm'} mb={1}>Terms of Use</Text>
                        </Link><br />
                        <Link href="#">
                            <Text fontSize={'sm'} mb={1}>Privacy Policy</Text>
                        </Link><br />
                        <Link href="#">
                            <Text fontSize={'sm'} mb={1}>Refund Policy</Text>
                        </Link>
                    </Box>
                    <Box w={'full'} >
                        <Text fontSize={20}>Heading</Text>
                    </Box>
                    <Box w={'full'} >
                        <Text fontSize={20}>Heading</Text>
                    </Box>

                    {/* <div className="flex flex-row"></div> = <HStack> */}
                    {/* <div className="flex flex-col"></div> = <VStack> */}
                    {/* <div className="flex"></div> = <Stack> */}
                    {/* <div></div> = <Box> */}

                </Stack>
            </Container>
        </>

    )
}

export default Footer