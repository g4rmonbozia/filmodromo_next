import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isProtegido = nextUrl.pathname.startsWith('/dashboard') || nextUrl.pathname.startsWith('/studio');
      const isLogin = nextUrl.pathname.startsWith('/login');
      if (isProtegido) {
        if (isLoggedIn) return true;
        return false; //redireciona para o login
      } else if (isLoggedIn && isLogin) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
    async jwt({ token, user }) {
      user && (token.user = user);
      return token
    },
    async session({ session, token }) {
      session = token.user as any;
      return session
    },
  },
  providers: [],
} satisfies NextAuthConfig;