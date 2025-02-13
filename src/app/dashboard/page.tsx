'use client'
import { Box, VStack } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const {data} = useSession()
  
  return (
    <>
      <Box p={[6,8]} minH={'100vh'}>
        <h1>Welcome {data?.user?.name} to dashboard page</h1>
      </Box>
    </>
  )
}

export default page