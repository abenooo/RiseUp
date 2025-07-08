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
              <span className="text-2xl font-bold">FaithConnect</span>
            </div>
            <p className="text-gray-400 mb-6">
              Building a vibrant Christian community through spiritual growth,
              fellowship, and discipleship. We're here to support your journey of faith.
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
                  href="/devotionals"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Devotionals & Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/spiritual-growth"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Spiritual Growth Topics
                </Link>
              </li>
              <li>
                <Link
                  href="/prayer-partner"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Prayer Partner
                </Link>
              </li>
              <li>
                <Link
                  href="/spiritual-mentors"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Spiritual Mentors
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
            <h3 className="text-lg font-semibold mb-4">Spiritual Growth Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/topics/prayer-life"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Prayer Life
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/bible-study"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Bible Study
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/fellowship"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Fellowship
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/discipleship"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Discipleship
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/christian-service"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Christian Service
                </Link>
              </li>
              <li>
                <Link
                  href="/topics/worship"
                  className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                >
                  Worship & Praise
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
                  123 Faith Street, Christian Community, CC 12345
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">📞</span>
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <span className="text-fuchsia-400 mr-2">✉️</span>
                <span className="text-gray-400">support@faithconnect.com</span>
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

            Stay Connected with Daily Devotionals
      <div className="w-full px-5 py-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            Receive daily devotionals, prayer requests, and spiritual growth resources
            © {new Date().getFullYear()} FaithConnect. All rights reserved.
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
              #ChristianCommunity
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
