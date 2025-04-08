import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "配信サーバー",
  description: "配信サーバーの写経",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
