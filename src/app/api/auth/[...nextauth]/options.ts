import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"
import { connect } from "@/lib/dbConnect";
import User from "@/models/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                await connect()
                try {
                    const user = await User.findOne({
                        $or: [
                            { email: credentials.indentifier.email },
                            { username: credentials.indentifier.username }
                        ]
                    })
                    if (!user)  {
                        throw new Error("No user found with this email")
                    }

                    if (!user.isVerified)  {
                        throw new Error("Please verify your account first before login!")
                    }

                    const isPasswordMatch = await bcrypt.compare(credentials.password, user.password)
                    if (!isPasswordMatch) throw new Error("Incorrect Password.")
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }:any) {
            if(token){
                session.user._id = token._id
                session.user.isVerified = token.isVerified
                session.user.isAcceptingMessages = token.isAcceptingMessages
                session.user.username = token.username
            }
            return session
        },
        async jwt({ token, user }) {
            token._id = user._id?.toString()
            token.isVerified = user.isVerified
            token.isAcceptingMessages = user.isAcceptingMessages
            token.username = user.username
          return token // returning modified token
        }
    },
    pages: {
        signIn: '/sign-in'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}