import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "CMS Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 2000 }}
        />
        {children}
      </body>
    </html>
  );
}
