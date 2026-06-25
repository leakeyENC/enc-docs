"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

// SSR-safe theme switching via a `data-theme` attribute on <html>.
// Preserves the original `ed-theme` localStorage key so a returning
// user's choice carries over from the standalone build.
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="light"
      enableSystem={false}
      storageKey="ed-theme"
      themes={["light", "dark"]}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
