import NextAuth from "next-auth";
import { string } from "zod";

declare module 'next-auth'{
    interface Session {
        user: {}
        id: string
        email: string
        nome: string
    }
}