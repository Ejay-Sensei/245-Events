import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Slow Panning Effect */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/backgrounds/hero-background.jpg"
          alt="245 Events Building Entrance"
          fill
          priority
          className="object-cover animate-slow-pan"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'var(--landing-bg-gradient)'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto">
        {/* 245 Logo */}
        <div className="mb-8 sm:mb-12">
          <Image
            src="/images/logo/245 Logo.png"
            alt="245 Events"
            width={200}
            height={80}
            priority
            className="w-auto h-16 sm:h-20 md:h-24"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 sm:mb-8 leading-tight">
          Elevate your corporate gatherings...
        </h1>

        {/* CTA Button */}
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-accent hover:bg-accent-hover transition-colors duration-200 border-radius-standard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          aria-label="Book an event at 245 Events"
        >
          Book Event
        </Link>
      </div>
    </main>
  );
}
