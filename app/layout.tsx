import type React from "react";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>X402 Forge</title>
        <meta
          name="description"
          content="X402 Forge - AI-powered 3D model generation"
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
