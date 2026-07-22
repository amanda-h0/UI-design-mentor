import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Design Mentor | Better UI design",
  description: "Your second pair of eyes for better UI design. Thoughtful design reviews that help growing designers learn and improve.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
