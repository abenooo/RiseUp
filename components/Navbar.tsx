"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";

function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [expertsOpen, setExpertsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileExpertsOpen, setMobileExpertsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1023px)");

  // Close dropdowns only when switching from mobile to desktop
  useEffect(() => {
    setServicesOpen(false);
    setExpertsOpen(false);

    // Only reset mobile menu when screen size changes, not the dropdown states
    if (isMobile === false) {
      setMobileMenuOpen(false);
      // We don't reset mobileServicesOpen and mobileExpertsOpen here
      // so they persist when reopening the mobile menu
    }
  }, [isMobile]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: any) => {
      // Only close if clicking outside the mobile menu container
      const mobileMenuContainer = document.getElementById(
        "mobile-menu-container"
      );
      const hamburgerButton = document.getElementById("hamburger-button");

      if (
        mobileMenuOpen &&
        mobileMenuContainer &&
        !mobileMenuContainer.contains(e.target) &&
        hamburgerButton &&
        !hamburgerButton.contains(e.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [mobileMenuOpen]);

  return (
    <header className="w-full flex justify-center bg-black py-2 sm:py-4 md:py-6 relative z-50">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-zinc-900/80 border border-zinc-800 rounded-full shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2 z-50">
          <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-fuchsia-500" />
          <Link href='/' className="text-xl sm:text-2xl font-bold text-white">
            RiseUp
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          id="hamburger-button"
          className="lg:hidden ml-auto mr-0 text-white p-1 rounded-md focus:outline-none"
          onClick={(e) => {
            e.stopPropagation();
            setMobileMenuOpen(!mobileMenuOpen);
            // Don't reset dropdown states when toggling the menu
          }}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
              onMouseEnter={() => setServicesOpen(true)}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div
              className={`absolute left-0 mt-2 w-[90vw] max-w-[1100px] rounded-xl shadow-lg bg-zinc-800 border border-zinc-700 z-[1000] py-4 px-4 transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <div className="flex flex-col md:flex-row">
                {/* Left Section - Get Help For (3 columns) */}
                <div className="w-full md:w-[60%] pr-0 md:pr-4 mb-4 md:mb-0">
                  <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                    Get Help For:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/anxiety"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Anxiety
                      </Link>
                      <Link
                        href="/topics/stress"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Stress
                      </Link>
                      <Link
                        href="/topics/sadness"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Sadness
                      </Link>
                      <Link
                        href="/topics/confusion"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Confusion
                      </Link>
                      <Link
                        href="/topics/feeling-lost"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Feeling Lost
                      </Link>
                      <Link
                        href="/topics/feeling-alone"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Feeling Alone
                      </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/trauma"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Trauma
                      </Link>
                      <Link
                        href="/topics/burnout"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Burnout
                      </Link>
                      <Link
                        href="/topics/societal-pressure"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Societal Pressure
                      </Link>
                      <Link
                        href="/topics/inferiority-complex"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Inferiority Complex
                      </Link>
                      <Link
                        href="/topics/exam-anxiety"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Exam Anxiety
                      </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/panic-attacks"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Panic Attacks
                      </Link>
                      <Link
                        href="/topics/peer-pressure"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Peer Pressure
                      </Link>
                      <Link
                        href="/topics/toxic-workplace"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Toxic Workplace
                      </Link>
                      <Link
                        href="/topics/imposter-syndrome"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Imposter Syndrome
                      </Link>
                      <Link
                        href="/topics/lack-of-confidence"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Lack Of Confidence
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Vertical Separator */}
                <div className="hidden md:block border-r border-zinc-700 mx-4 h-auto"></div>

                {/* Right Section - Therapy and Coaching (2 columns) */}
                <div className="w-full md:w-[40%] flex flex-col sm:flex-row">
                  {/* Therapy Column */}
                  <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                      Therapy
                    </h3>
                    <Link
                      href="/topics/mental-wellness"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Therapy for Mental Wellness
                    </Link>
                    <Link
                      href="/topics/marriage-counseling"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Marriage Counseling
                    </Link>
                    <Link
                      href="/topics/relationship-counseling"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Relationship Counseling
                    </Link>
                    <Link
                      href="/topics/depression-counseling"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Depression Counseling
                    </Link>
                    <Link
                      href="/topics/individual-therapy"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Individual Therapy
                    </Link>
                  </div>

                  {/* Coaching Column */}
                  <div className="w-full sm:w-1/2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                      Coaching
                    </h3>
                    <Link
                      href="/topics/self-improvement"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Coaching For Self-Improvement
                    </Link>
                    <Link
                      href="/topics/life-coaching"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Life Coaching
                    </Link>
                    <Link
                      href="/topics/mindfulness-coaching"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Mindfulness Coaching
                    </Link>
                    <Link
                      href="/topics/positivity-coaching"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Positivity Coaching
                    </Link>
                    <Link
                      href="/topics/career-coaching"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Career Coaching
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-700">
                <Link
                  href="/topics"
                  className="block px-3 py-1.5 text-sm font-medium text-white hover:bg-zinc-700 rounded transition-colors"
                >
                  View All →
                </Link>
              </div>
            </div>
          </div>

          {/* Talk to Experts Link */}
          <Link
            href="/talk-to-experts"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Talk to Experts
          </Link>

          {/* Other Nav Links */}
          <Link
            href="/blogs"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Blogs & Resources
          </Link>
          <Link
            href="/ai-friend"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            AI Friend
          </Link>
          <Link
            href="/vent"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Vent Here
          </Link>
        </nav>

        {/* Buttons - Desktop */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <Link href="/login">
            <Button
              variant="outline"
              size="sm"
              className="border-fuchsia-600 text-fuchsia-400 bg-transparent hover:bg-fuchsia-900/20 rounded-full px-4 xl:px-6 py-2 text-sm xl:text-base font-medium"
            >
              Log In
            </Button>
          </Link>
          <Link href="/signup">
            <Button
              size="sm"
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full px-4 xl:px-6 py-2 text-sm xl:text-base font-medium"
            >
              Sign Up Free
            </Button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu - Fixed to right side */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            id="mobile-menu-container"
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-zinc-900 shadow-xl p-6 overflow-y-auto"
            style={{ overflowX: "hidden" }} // Prevent horizontal scrolling
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-fuchsia-500" />
                <Link href='/'   className="text-2xl font-bold text-white">RiseUp</Link>
              </div>
              <button
                className="text-white p-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav className="space-y-2">
              {/* Services Dropdown - Mobile */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-base font-medium text-white py-3 border-b border-zinc-800"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="mt-2 pl-4 space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                        Get Help For:
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        <Link
                          href="/topics/anxiety"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Anxiety
                        </Link>
                        <Link
                          href="/topics/stress"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Stress
                        </Link>
                        <Link
                          href="/topics/sadness"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Sadness
                        </Link>
                        <Link
                          href="/topics/trauma"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Trauma
                        </Link>
                        <Link
                          href="/topics/burnout"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Burnout
                        </Link>
                        <Link
                          href="/topics/confusion"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Confusion
                        </Link>
                      </div>
                      <Link
                        href="/topics"
                        className="block mt-2 text-sm font-medium text-fuchsia-400"
                      >
                        View All →
                      </Link>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                        Therapy
                      </h3>
                      <div className="space-y-1">
                        <Link
                          href="/topics/mental-wellness"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Mental Wellness
                        </Link>
                        <Link
                          href="/topics/marriage-counseling"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Marriage Counseling
                        </Link>
                        <Link
                          href="/topics/relationship-counseling"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Relationship Counseling
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                        Coaching
                      </h3>
                      <div className="space-y-1">
                        <Link
                          href="/topics/self-improvement"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Self-Improvement
                        </Link>
                        <Link
                          href="/topics/life-coaching"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Life Coaching
                        </Link>
                        <Link
                          href="/topics/mindfulness-coaching"
                          className="block py-1.5 text-sm text-zinc-300"
                        >
                          Mindfulness Coaching
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Talk to Experts Link - Mobile */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-base font-medium text-white py-3 border-b border-zinc-800"
                  onClick={() => setMobileExpertsOpen(!mobileExpertsOpen)}
                >
                  Talk to Experts
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      mobileExpertsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpertsOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <Link
                      href="/talk-to-experts"
                      className="block py-2 text-sm text-zinc-300"
                    >
                      Talk to Experts
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Nav Links - Mobile */}
              <Link
                href="/blogs"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                Blogs & Resources
              </Link>
              <Link
                href="/ai-friend"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                AI Friend
              </Link>
              <Link
                href="/find-therapists"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                Vent Here
              </Link>
            </nav>

            {/* Buttons - Mobile */}
            <div className="mt-8 space-y-3">
              <Link href="/login" className="block w-full">
                <Button
                  variant="outline"
                  className="w-full border-fuchsia-600 text-fuchsia-400 bg-transparent hover:bg-fuchsia-900/20 rounded-full py-2 text-base font-medium"
                >
                  Log In
                </Button>
              </Link>
              <Link href="/signup" className="block w-full">
                <Button className="w-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full py-2 text-base font-medium">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
