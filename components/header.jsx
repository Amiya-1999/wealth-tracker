import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox, PiggyBank } from "lucide-react";

const Header = () => {
  return (
    <div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
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
              <Button variant="ghost">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:inline">Dashboard</span>
              </Button>
            </Link>
            <Link
              href="/transaction/create"
              className="text-gray-700 hover:text-gray-900"
            >
              <Button variant="ghost">
                <PenBox className="h-4 w-4" />
                <span className="hidden md:inline">Add Transaction</span>
              </Button>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-gray-900">
              <Button variant="ghost">
                <PiggyBank className="h-4 w-4" />
                <span className="hidden md:inline">Account</span>
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button
                variant="outline"
                className="text-gray-700 hover:text-gray-900"
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
