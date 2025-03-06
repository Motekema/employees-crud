import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import bcrypt from "bcryptjs";

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

const client = new MongoClient(uri);

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await client.connect();
        const db = client.db("employees");
        const usersCollection = db.collection("employees");

        const user = await usersCollection.findOne({
          email: credentials?.email,
        });

        if (
          user &&
          credentials?.password &&
          bcrypt.compareSync(credentials.password, user.password)
        ) {
          return {
            id: user._id.toString(), // Convert ObjectId to string
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            phone: user.phone,
            role: user.role,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const typedUser = user as unknown as {
          _id: string;
          firstName: string;
          lastName: string;
          phone: string;
          role: string;
        };
        token.id = typedUser._id;
        token.firstName = typedUser.firstName;
        token.lastName = typedUser.lastName;
        token.phone = typedUser.phone;
        token.role = typedUser.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.phone = token.phone;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin",
  },
});
