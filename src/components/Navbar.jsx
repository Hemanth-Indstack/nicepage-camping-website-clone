import navLinks from "../data/navLinks";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-playfair text-xl">Camping</h1>

        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-black transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
