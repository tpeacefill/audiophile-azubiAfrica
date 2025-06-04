import Link from 'next/link';
import Image from 'next/image';
import { FacebookIcon, Twitter, Instagram } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/headphones', label: 'HEADPHONES' },
  { href: '/speakers', label: 'SPEAKERS' },
  { href: '/earphones', label: 'EARPHONES' },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white w-full pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute left-48 top-0 w-28 h-1 bg-[#D87D4A] " />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-12">
        {/* Left: Logo, Description, Copyright */}
        <div className="flex-1 flex flex-col gap-8">
          <Image src="/logo.svg" alt="Audiophile Logo" width={150} height={32} className="mb-6" />
          <p className="text-white text-base font-light max-w-lg mb-8 opacity-50">
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <p className="text-white text-base font-medium mt-8 opacity-50">Copyright 2021. All Rights Reserved</p>
        </div>
        {/* Right: Nav Links and Socials */}
        <div className="flex-1 flex flex-col items-center md:items-end gap-8">
          <nav className="flex space-x-8 mb-8">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="text-white text-base tracking-widest uppercase hover:text-[#D87D4A] transition-colors font-regular">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex space-x-6">
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#D87D4A] transition-colors">
              <FacebookIcon size={24} />
            </a>
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#D87D4A] transition-colors">
              <Twitter size={24} />
            </a>
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#D87D4A] transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 