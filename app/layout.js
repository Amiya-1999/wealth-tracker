import "./globals.css";
import { fontInter } from "./fonts";
import Footer from "../components/footer";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "WealthTracker",
  description: "Track and Manage all your accounts",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${fontInter.className} antialiased`}>
          <Header />
          <main className="min-h-screen"> {children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
