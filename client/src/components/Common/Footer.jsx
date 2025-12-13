import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <h2 className="text-white text-2xl font-bold">EduStream</h2>
          <p className="mt-4 text-sm">
            Learn and grow with the best online courses from top instructors around the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/courses" className="hover:text-white transition">Courses</a></li>
            <li><a href="/categories" className="hover:text-white transition">Categories</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-white transition">FAQ</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact Us</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF size={16} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-400 transition">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-pink-500 transition">
              <FaInstagram size={16} />
            </a>
            <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
