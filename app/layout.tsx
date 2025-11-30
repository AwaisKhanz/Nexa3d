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
        <title>Poke3d</title>
        <meta
          name="description"
          content="Poke3d - AI-powered 3D model generation"
        />
      </head>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
