"use client";
import { PasswordInput } from "@/components/ui/password-input";
import { toaster } from "@/components/ui/toaster";
import { processApiRequest } from "@/lib/api";
import { Button, Image, Field, VStack, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const page = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleRegister() {
    try {
      const res = await processApiRequest({
        method: "post",
        url: "/auth/local/register",
        body: {
          email: email, // jockey1998 gmail.com
          username: email.split("@")[0],
          password: password,
          name: fullName,
        },
      });

      console.log("Login successful!!");
      console.log(res);
      toaster.success({ description: "Registration successful" });

      setEmail("")
      setFullName("")
      setPassword("")
    } catch (error: any) {
      console.log("Registration FAIL FAIL!!");
      console.log(error.message);
      toaster.error({ description: error?.message });
    }
  }

  return (
    <>
      <VStack
        w={"full"}
        h={"80vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={[4, 6]}
        className="svg-bg"
      >
        <VStack
          bgColor={"#fff"}
          w={"full"}
          maxW={"480px"}
          p={6}
          py={12}
          gap={8}
          border={"1px solid #DADADA"}
        >
          <Image src="/next.svg" h={6} mb={"20"} />

          <Field.Root>
            <Field.Label>Full Name</Field.Label>
            <Input
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <PasswordInput
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field.Root>

          <Button minW={"36"} onClick={handleRegister}>
            Register
          </Button>
        </VStack>
      </VStack>
    </>
  );
};

export default page;
