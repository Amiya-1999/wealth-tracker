import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox, PiggyBank } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
import { fontPrompt } from "@/app/fonts";

const Header = async () => {
  await checkUser();

  return (
    <div className="fixed top-0 w-full bg-gradient-to-r from-white/50 to-blue-50 backdrop-blur-md shadow-md z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/assets/images/Logo.png"}
            alt="Wealth Tracker"
            height={60}
            width={200}
            className="h-12 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <SignedIn>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900"
            >
              <Button variant="ghost" className="font-semibold">
                <LayoutDashboard />
                <span className="hidden md:inline md:text-base md:pt-1">Dashboard</span>
              </Button>
            </Link>
            <Link
              href="/transaction/create"
              className="text-gray-700 hover:text-gray-900"
            >
              <Button variant="ghost" className="font-semibold">
                <PenBox className="h-4 w-4" />
                <span className="hidden md:inline md:text-base md:pt-1">
                  Add Transaction
                </span>
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton forceRedirectUrl="/dashboard">
              <Button
                variant="outline"
                className="text-gray-700 hover:text-gray-900 font-semibold"
              >
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </div>
      </nav>
    </div>
  );
};

export default Header;
