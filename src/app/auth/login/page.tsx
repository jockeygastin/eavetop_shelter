"use client";
import { PasswordInput } from "@/components/ui/password-input";
import { toaster } from "@/components/ui/toaster";
import { processApiRequest } from "@/lib/api";
import { Button, Field, Image, Input, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  async function handleLogin() {
    setIsLoading(true)
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/dashboard",
      });
      if (res?.error) {
        throw new Error(res.error);
      }
    } catch (error: any) {
      console.log("Login FAIL FAIL FAIL!!");
      console.log(error.message);
      toaster.error({ description: error?.message });
    } finally{
      setIsLoading(false)
    }
  }

  return (
    <>
      <VStack
        alignItems={"center"}
        justifyContent={"center"}
        h={"80vh"}
        p={[4, 6]}
        className="svg-bg"
      >
        <VStack
          bgColor={"#FFF"}
          w={"full"}
          maxW={"480px"}
          p={6}
          py={12}
          gap={8}
          border={"1px solid #DADADA"}
        >
          <Image src="/next.svg" h={6} mb={"20"} />

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>

          <Button loading={isLoading} onClick={handleLogin}>Login</Button>
        </VStack>
      </VStack>
    </>
  );
};

export default page;
