import "./globals.css";
import { fontInter } from "./fonts";
import Footer from "./footer";

export const metadata = {
  title: "WealthTracker",
  description: "Track and Manage all your accounts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fontInter.className} antialiased`}>
        <header>This is header</header>
        <main className="min-h-screen"> {children}</main>
        <Footer />
      </body>
    </html>
  );
}
