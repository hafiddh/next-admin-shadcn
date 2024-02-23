"use client";
import React from "react";
import { ThemeProvider } from "../theme/theme-provider";
// import { SessionProvider, SessionProviderProps } from "next-auth/react";

export default function Providers({ children }) {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        themes={[
          "light",
          "dark",
          "blue-light",
          "blue-dark",
          "red-light",
          "red-dark",
        ]}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
}
