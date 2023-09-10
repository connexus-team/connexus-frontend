import "./globals.css";
import { Toaster } from "react-hot-toast";
import Providers from "@/components/Providers";
import { Header } from "@/components/Header";

export const metadata = {
  title: "Connexus",
  description: "Connexus",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Toaster position="bottom-right" />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
