import { authOptions } from "@/lib/authOptions";
import NextAuth from "@/types/next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
