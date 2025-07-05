import React from "react";
import Link from "next/link";

export default function BookPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 bg-gray-50">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Book Your Event
        </h1>
                  <p className="text-lg text-gray-600 mb-8">
            Ready to elevate your corporate gathering? Let&apos;s make it happen.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-6">
              Our booking system is being crafted to perfection. 
              We&apos;ll be ready to host your next incredible event very soon.
            </p>
          
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-accent hover:bg-accent-hover transition-colors duration-200 border-radius-standard focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 