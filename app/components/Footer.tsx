import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Twitter } from 'lucide-react';
import { FaFacebookSquare } from 'react-icons/fa';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/headphones', label: 'HEADPHONES' },
  { href: '/speakers', label: 'SPEAKERS' },
  { href: '/earphones', label: 'EARPHONES' },
];

export default function Footer() {
  return (
    <footer className="bg-[#101010] text-white w-full pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Orange accent bar */}
        <div className="w-28 h-1 bg-[#D87D4A] mx-auto md:mx-0 md:ml-0 lg:ml-0 xl:ml-0 mb-16" />
        
        {/* Medium/Tablet and Desktop Layout */}
        <div className="hidden md:block">
          {/* Logo and Navigation - Stacked on medium, side by side on large */}
          <div className="lg:flex lg:justify-between lg:items-center mb-8">
            <div className="mb-8 lg:mb-0">
              <Image 
                src="/logo.svg" 
                alt="Audiophile Logo" 
                width={150} 
                height={32} 
              />
            </div>

            <nav className="flex space-x-8">
              {navLinks.map(link => (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-white text-sm tracking-widest uppercase hover:text-[#D87D4A] transition-colors font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Description and Social Icons - Stacked on medium, side by side on large */}
          <div className="lg:flex lg:justify-between lg:items-end mb-8">
            <p className="text-white/50 text-base font-light leading-relaxed mb-8 lg:mb-0 lg:max-w-2xl">
              Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>
            <div className="hidden lg:flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#D87D4A] transition-colors">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-[#D87D4A] transition-colors">
                <Twitter size={24} fill="currentColor" stroke="none" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#D87D4A] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Copyright and Social Icons (medium screens) */}
          <div className="flex justify-between items-center pt-12">
            <p className="text-white/50 text-base font-medium">
              Copyright 2021. All Rights Reserved
            </p>
            <div className="flex lg:hidden space-x-4">
              <a href="#" aria-label="Facebook" className="text-white hover:text-[#D87D4A] transition-colors">
                <FaFacebookSquare size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-white hover:text-[#D87D4A] transition-colors">
                <Twitter size={24} fill="currentColor" stroke="none" />
              </a>
              <a href="#" aria-label="Instagram" className="text-white hover:text-[#D87D4A] transition-colors">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center text-center">
          {/* Logo */}
          <Image 
            src="/logo.svg" 
            alt="Audiophile Logo" 
            width={150} 
            height={32} 
            className="mb-12" 
          />
          
          {/* Navigation - Vertical */}
          <nav className="flex flex-col space-y-6 mb-12">
            {navLinks.map(link => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="text-white text-sm tracking-widest uppercase hover:text-[#D87D4A] transition-colors font-bold"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Description */}
          <p className="text-white/50 text-base font-light leading-relaxed mb-12 max-w-md">
            Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          {/* Copyright */}
          <p className="text-white/50 text-base font-medium mb-12">
            Copyright 2021. All Rights Reserved
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook" className="text-white hover:text-[#D87D4A] transition-colors">
              <FaFacebookSquare size={24} />
            </a>
            <a href="#" aria-label="Twitter" className="text-white hover:text-[#D87D4A] transition-colors">
              <Twitter size={24} fill="currentColor" stroke="none" />
            </a>
            <a href="#" aria-label="Instagram" className="text-white hover:text-[#D87D4A] transition-colors">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}