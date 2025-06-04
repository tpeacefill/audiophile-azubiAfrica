'use client'

import Link from 'next/link';
import Image from 'next/image';
import { Manrope } from 'next/font/google';
import { useState } from 'react';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/headphones', label: 'Headphones' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/earphones', label: 'Earphones' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-transparent ${manrope.variable} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Flex container for logo, nav, cart, with border bottom */}
        <div className="relative flex items-center h-20 border-b border-white/10">
          {/* Hamburger: always left on small and md, hidden on lg */}
          <button
            className="absolute left-0 md:static md:mr-6 focus:outline-none lg:hidden z-10"
            aria-label="Open menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {/* Logo: centered on small, left on md and up */}
          <div className="flex-shrink-0 flex items-center mx-auto md:mx-0 absolute left-1/2 -translate-x-1/2  md:translate-x-0 md:relative md:left-0 md:ml-0">
            <Link href="/">
              <Image src="/logo.svg" alt="Audiophile Logo" height={24} width={90} className="h-6 w-auto" priority />
            </Link>
          </div>
          {/* Nav Links: only show on lg and up, centered */}
          <div className="hidden lg:flex flex-grow justify-center">
            <div className="flex items-center space-x-10">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    'text-xs font-medium tracking-widest uppercase transition-colors duration-200 px-1 text-white hover:text-[#D87D4A]'
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {/* Cart Icon: always right */}
          <div className="absolute right-0 md:relative md:right-auto md:ml-auto flex items-center justify-end">
            <button className="p-2 rounded-full text-white hover:text-[#D87D4A]">
              <Image src="/cart.svg" alt="Cart" height={24} width={24} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu: only for small screens */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-gray-700 px-4 pb-4">
          <div className="flex flex-col space-y-4 mt-4">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  'text-base font-medium tracking-widest uppercase transition-colors duration-200 px-1 text-white hover:text-[#D87D4A]'
                }
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 