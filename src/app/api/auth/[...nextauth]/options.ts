import axios from "axios";
import { processApiRequest } from "@/lib/api";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const authRes = await processApiRequest({
            url: "/auth/local",
            method: "post",
            body: {
              identifier: credentials?.email,
              password: credentials?.password,
            },
          });
          const { jwt } = authRes.data;

          

          const userRes = await processApiRequest({
            url: "/users/me",
            method: "get",
            headers: {
              Authorization: `Bearer ${jwt}`,
            },
          });
          
          const user = userRes.data;

          if (user && jwt) {
            return {
              id: user.documentId,
              name: user.name,
              accessToken: jwt,
              email: user.email,
              username: user.username,
              createdAt: user.createdAt,
            };
          } else {
            throw new Error("Invalid credentials");
          }
        } catch (error: any) {
          console.log("********", error?.response?.data);
          throw new Error(error?.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/login",
    newUser: "/auth/register",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.username = user.username;
        token.email = user.email;
        token.createdAt = user.createdAt;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as number;
        session.accessToken = token.accessToken as string;
        session.user.name = token.name as string;
        session.user.username = token.username as string;
        session.user.email = token.email as string;
        session.user.createdAt = token.createdAt as string;
      }
      return session;
    },
  },
  logger: {
    error(code, ...message) {
      console.error(code, message);
    },
  },
};