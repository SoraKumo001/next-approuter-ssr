import { SSRHeadRoot, SSRProvider } from "next-ssr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SSRProvider>
        <head>
          <SSRHeadRoot />
        </head>
        <body>{children}</body>
      </SSRProvider>
    </html>
  );
}
