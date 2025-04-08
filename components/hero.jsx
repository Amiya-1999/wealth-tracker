"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const HeroSection = () => {
  const imageRef = useRef();

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.style.transform = "rotateX(0deg)";
      } else {
        imageElement.style.transform = "rotateX(50deg)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pb-20">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl pb-6 gradient-title image-bg">
        Take Control of Your Finances <br /> the Smart Way
        </h1>
        <p className="text-[20px] sm:text-[21px] md:text-[22px] lg:text-[23px] text-gray-600 mb-8 max-w-2xl mx-auto">
        Track, analyze, and optimize your spending — all in one AI-powered platform, built for smart financial living
        </p>
        <div className="flex justify-center space-x-6">
          <Link href="/dashboard">
            <Button size="lg">
              Get Started
            </Button>
          </Link>
          <Link href="/">
            <Button size="lg" variant="outline">
              Demo Video
            </Button>
          </Link>
        </div>
        <div className="mt-10 perspective-[700px] overflow-hidden mx-1 sm:mx-4 lg:mx-7">
          <div
            ref={imageRef}
            className={`rotate-x-[50deg] transition-transform duration-500 ease-out`}
          >
            <Image
              src="/assets/images/HomeImage.png"
              width={1280}
              height={720}
              alt="Track Finance"
              priority
              className="rounded-lg shadow-2xl border mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
