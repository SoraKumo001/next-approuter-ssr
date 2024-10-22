import { SSRProvider } from "next-ssr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SSRProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </SSRProvider>
  );
}
