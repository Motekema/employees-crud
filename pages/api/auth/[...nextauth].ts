import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Add logic to validate credentials (e.g., check database)
        const user = { id: 1, email: "user@example.com", password: "password" };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        ) {
          return user;
        }
        return null; // Return null if credentials are invalid
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET, // Add a secret key in .env
  session: {
    strategy: "jwt", // Use JWT for session management
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom sign-in page
  },
});
