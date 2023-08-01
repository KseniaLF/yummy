import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

import { connectToDB } from "@/utils/database";
import User from "@/models/user";

export const authConfig = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const isValidEmail = credentials.email === "llf9392@gmail.com";

        if (isValidEmail) return credentials.email;
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session }) {
      // store the user id from MongoDB to session
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();

      return session;
    },
    async signIn({ account, profile }) {
      try {
        if (account.provider === "google") {
          await connectToDB();

          const userExists = await User.findOne({ email: profile.email });

          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name,
            });
          }
        }

        return true;
      } catch (e) {
        console.log(e);
      }
    },
  },
};

// GOOGLE credentials
// {
//   user: 'llf9392@gmail.com',
//   account: {
//     providerAccountId: undefined,
//     type: 'credentials',
//     provider: 'credentials'
//   },
//   credentials: {
//     csrfToken: '2b366da612b469997fe5956a7e099aa971ae3674a52b52dea4d1ac0bdba3ca2f',
//     email: 'llf9392@gmail.com',
//     password: 'xs'
//   }
// }

// GOOGLE data
// {
//   user: {
//     id: '111546820310149795698',
//     name: 'Lf Lf',
//     email: 'llf9391@gmail.com',
//     image: 'https://lh3.googleusercontent.com/a/AAcHTte5J8VR_htyxCEMJGw3vSr8SZ0AUWD2s0rH5FyN1bhEuSU=s96-c'
//   },
//   account: {
//     provider: 'google',
//     type: 'oauth',
//     providerAccountId: '111546820310149795698',
//     access_token: 'ya29.a0AbVbY6OAWNo2TVyue5gBPGuPy_uQqlnRzix2nLoJQ7p6-dPjU73S7mN20juMJPah6Q-HyyFIXvk6eHJr79xBNJmJvZq1UDwe393ls9VPvFFAOQb8GM4niQwUkPaM13sFvuKVw3FYupD0qDgD16QPwn__YQg-aCgYKAfISARASFQFWKvPlB7_4Tu3BJHspB7amLhvMGA0163',
//     expires_at: 1690569605,
//     scope: 'https://www.googleapis.com/auth/userinfo.email openid https://www.googleapis.com/auth/userinfo.profile',
//     token_type: 'Bearer',
//     id_token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImZkNDhhNzUxMzhkOWQ0OGYwYWE2MzVlZjU2OWM0ZTE5NmY3YWU4ZDYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIyNDg5NDk3NzA4MzAtODU2YjhtcWtsMzdmZGhlOXZzaDExbjRqNXJodmw1anAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIyNDg5NDk3NzA4MzAtODU2YjhtcWtsMzdmZGhlOXZzaDExbjRqNXJodmw1anAuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMTE1NDY4MjAzMTAxNDk3OTU2OTgiLCJlbWFpbCI6ImxsZjkzOTFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiI3b1A4b3BweDdaOTJzbndsT0N3MGRnIiwibmFtZSI6IkxmIExmIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FBY0hUdGU1SjhWUl9odHl4Q0VNSkd3M3ZTcjhTWjBBVVdEMnMwckg1RnlOMWJoRXVTVT1zOTYtYyIsImdpdmVuX25hbWUiOiJMZiIsImZhbWlseV9uYW1lIjoiTGYiLCJsb2NhbGUiOiJ1ayIsImlhdCI6MTY5MDU2NjAwNiwiZXhwIjoxNjkwNTY5NjA2fQ.LFT9a9hLxOT8nyg8UNI9PGvKcz9vEuAFYG3ilrcWQM53FMTCr9Cb53689xzyznhw51sUdjzXWfpfYq3F8zhNJDmxoOj72GECkFfHHI_DbYP4ZdrwC477J-nyqDo2DHhLMBvc-wAqlKBvCzdchhRCUhhrlcNvJhNuORsCw8FMusG10_QCvl2PPaaJWlWqWfgqzi0MCGIWop-xT2JrpHiXII16MEsPIAUze5wte9iALIBsWKJdPw8z2cvkveZbXtQgFJC2ls7kMBSVN5JkSXNd5q994ilVNL2ksFYjxwpgbXUaaIbca1HPaI8Ck-sOA99IJlUrwy_2PaQexENm7OOlrA'
//   },
//   profile: {
//     iss: 'https://accounts.google.com',
//     azp: '248949770830-856b8mqkl37fdhe9vsh11n4j5rhvl5jp.apps.googleusercontent.com',
//     aud: '248949770830-856b8mqkl37fdhe9vsh11n4j5rhvl5jp.apps.googleusercontent.com',
//     sub: '111546820310149795698',
//     email: 'llf9391@gmail.com',
//     email_verified: true,
//     at_hash: '7oP8oppx7Z92snwlOCw0dg',
//     name: 'Lf Lf',
//     picture: 'https://lh3.googleusercontent.com/a/AAcHTte5J8VR_htyxCEMJGw3vSr8SZ0AUWD2s0rH5FyN1bhEuSU=s96-c',
//     given_name: 'Lf',
//     family_name: 'Lf',
//     locale: 'uk',
//     iat: 1690566006,
//     exp: 1690569606
//   }
// }
