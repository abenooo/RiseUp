import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import { Shield } from "lucide-react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <main>
      <div className="w-full pt-16 pb-8 ">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-fuchsia-500 to-purple-600 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-white/90 mb-8">
              Get the latest articles, resources, and mental health tips
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="rounded-full bg-white/20 border-white/30 text-white placeholder:text-white/70 py-6"
              />
              <Button className="bg-white text-fuchsia-600 hover:bg-white/90 rounded-full px-6 py-6 h-auto whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="w-full px-5 py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-fuchsia-400" />
              <span className="text-2xl font-bold">RiseUp</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building a holistic lifestyle through mental wellness, therapy,
              and coaching. We're here to support your journey to better mental
              health.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Linkedin size={20} />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-fuchsia-400 transition-colors"
              >
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Blogs & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/topics"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Mental Health Topics
                </Link>
              </li>
              <li>
                <Link
                  href="/ai-friend"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  AI Friend
                </Link>
              </li>
              <li>
                <Link
                  href="/find-therapists"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Find Therapists
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/topics/mental-wellness"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Mental Wellness
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/anxiety"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Anxiety Support
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/depression-counseling"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Depression Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/relationship-counseling"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Relationship Counseling
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/life-coaching"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Life Coaching
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/mindfulness-coaching"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Mindfulness Coaching
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">📍</span>
                <span className="text-gray-400">
                  123 Mental Health Street, Wellness City, WC 12345
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">📞</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">✉️</span>
                <span className="text-gray-400">support@riseuptherapy.com</span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">⏰</span>
                <span className="text-gray-400">
                  Mon-Fri: 9am-6pm, Sat: 10am-4pm
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="w-full px-5 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 sm:mb-0">
            © {new Date().getFullYear()} RiseUp Therapy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-gray-400 hover:text-fuchsia-400 text-sm transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
