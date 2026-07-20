import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Հենզել և Սյուզաննա",
  description: "Հենզել և Սյուզաննա",
  openGraph: {
    title: "Հենզելի և Սյուզաննայի նշանադրության հրավիրատոմս",
    description: "Նշանադրության հրավիրատոմս",
    url: "https://henzel-syuzanna.vercel.app",
    siteName: "Հենզել և Սյուզաննա",
    images: [
      {
        url: "https://henzel-syuzanna.vercel.app/img1.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      >
        {children}
      </body>
    </html>
  );
}
