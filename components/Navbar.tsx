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
            FaithConnect
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
                    Grow In:
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-1">
                    {/* Column 1 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/prayer-life"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Prayer Life
                      </Link>
                      <Link
                        href="/topics/bible-study"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Bible Study
                      </Link>
                      <Link
                        href="/topics/worship"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Worship
                      </Link>
                      <Link
                        href="/topics/fellowship"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Fellowship
                      </Link>
                      <Link
                        href="/topics/discipleship"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Discipleship
                      </Link>
                      <Link
                        href="/topics/evangelism"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Evangelism
                      </Link>
                    </div>

                    {/* Column 2 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/faith-building"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Faith Building
                      </Link>
                      <Link
                        href="/topics/spiritual-disciplines"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Spiritual Disciplines
                      </Link>
                      <Link
                        href="/topics/christian-living"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Christian Living
                      </Link>
                      <Link
                        href="/topics/stewardship"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Stewardship
                      </Link>
                      <Link
                        href="/topics/service"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Service
                      </Link>
                    </div>

                    {/* Column 3 */}
                    <div className="space-y-1">
                      <Link
                        href="/topics/forgiveness"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Forgiveness
                      </Link>
                      <Link
                        href="/topics/gratitude"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Gratitude
                      </Link>
                      <Link
                        href="/topics/community-building"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Community Building
                      </Link>
                      <Link
                        href="/topics/spiritual-gifts"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Spiritual Gifts
                      </Link>
                      <Link
                        href="/topics/christian-character"
                        className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors whitespace-nowrap"
                      >
                        Christian Character
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
                      Spiritual Guidance
                    </h3>
                    <Link
                      href="/topics/spiritual-direction"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Spiritual Direction
                    </Link>
                    <Link
                      href="/topics/christian-counseling"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Christian Counseling
                    </Link>
                    <Link
                      href="/topics/pastoral-care"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Pastoral Care
                    </Link>
                    <Link
                      href="/topics/biblical-counseling"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Biblical Counseling
                    </Link>
                    <Link
                      href="/topics/spiritual-mentoring"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Spiritual Mentoring
                    </Link>
                  </div>

                  {/* Coaching Column */}
                  <div className="w-full sm:w-1/2">
                    <h3 className="text-sm font-semibold text-fuchsia-400 mb-2">
                      Life Coaching
                    </h3>
                    <Link
                      href="/topics/christian-life-coaching"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Christian Life Coaching
                    </Link>
                    <Link
                      href="/topics/purpose-discovery"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Purpose Discovery
                    </Link>
                    <Link
                      href="/topics/faith-based-wellness"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Faith-Based Wellness
                    </Link>
                    <Link
                      href="/topics/christian-leadership"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Christian Leadership
                    </Link>
                    <Link
                      href="/topics/calling-discernment"
                      className="block px-3 py-1.5 text-sm hover:bg-zinc-700 rounded transition-colors"
                    >
                      Calling Discernment
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
            href="/spiritual-mentors"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Spiritual Mentors
          </Link>

          {/* Other Nav Links */}
          <Link
            href="/devotionals"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Devotionals & Resources
          </Link>
          <Link
            href="/prayer-partner"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Prayer Partner
          </Link>
          <Link
            href="/prayer-requests"
            className="text-base font-medium text-zinc-200 hover:text-white hover:bg-zinc-800 transition-colors px-3 xl:px-4 py-2 rounded-full"
          >
            Prayer Requests
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
                      href="/spiritual-mentors"
                      className="block py-2 text-sm text-zinc-300"
                    >
                      Spiritual Mentors
                    </Link>
                  </div>
                )}
              </div>

              {/* Other Nav Links - Mobile */}
              <Link
                href="/devotionals"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                Devotionals & Resources
              </Link>
              <Link
                href="/prayer-partner"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                Prayer Partner
              </Link>
              <Link
                href="/prayer-requests"
                className="block text-base font-medium text-white py-3 border-b border-zinc-800"
              >
                Prayer Requests
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
