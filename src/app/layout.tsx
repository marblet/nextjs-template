import type { Metadata } from "next";
import "ress";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
