'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import CartModal from './CartModal';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/headphones', label: 'Headphones' },
  { href: '/speakers', label: 'Speakers' },
  { href: '/earphones', label: 'Earphones' },
];

const categories = [
  {
    title: 'HEADPHONES',
    image: '/section2/section2-Image1.png',
    link: '/headphones',
  },
  {
    title: 'SPEAKERS',
    image: '/section2/section2Image2.png',
    link: '/speakers',
  },
  {
    title: 'EARPHONES',
    image: '/section2/section2-Image3.png',
    link: '/earphones',
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/70 backdrop-blur' : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex container for logo, nav, cart, with border bottom */}
          <div className="relative flex items-center h-20 border-b border-white/10 gap-6 md:gap-10 lg:gap-16 lg:justify-between">
            {/* Hamburger: always left on small and md, hidden on lg */}
            <button
              className="absolute left-0 md:static md:mr-6 focus:outline-none lg:hidden z-10"
              aria-label="Open menu"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
            {/* Logo: centered on small, left on md and up, flush left on lg */}
            <div className="flex-shrink-0 flex items-center mx-auto md:mx-0 absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:relative md:ml-0 lg:ml-0 lg:relative lg:left-0 lg:translate-x-0">
              <Link href="/">
                <Image src="/logo.svg" alt="Audiophile Logo" height={24} width={90} className="h-6 w-auto" priority />
              </Link>
            </div>
            {/* Nav Links: only show on lg and up, centered */}
            <div className="hidden lg:flex flex-grow justify-center">
              <div className="flex items-center space-x-14">
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
              <button className="p-2 rounded-full cursor-pointer text-white hover:text-[#D87D4A]" onClick={() => setCartOpen(true)}>
                <Image src="/cart.svg" alt="Cart" height={24} width={24} className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu: only for small screens */}
        {mobileOpen && (
          <div className="md:hidden bg-white px-4 pb-8 pt-8 z-50">
            <div className="grid grid-cols-1 gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.title}
                  className="flex flex-col items-center bg-gray-100 rounded-lg pt-0 pb-6 shadow-sm hover:shadow-lg transition-shadow duration-200 relative overflow-visible mb-0"
                >
                  <div className="-mt-16 flex items-center justify-center h-32 z-10 mb-4">
                    <Image 
                      src={cat.image} 
                      alt={cat.title} 
                      width={160} 
                      height={160} 
                      className="object-contain w-32 h-32" 
                    />
                  </div>
                  <h3 className="text-base font-medium tracking-widest uppercase mb-3 text-black text-center">
                    {cat.title}
                  </h3>
                  <Link href={cat.link} className="flex items-center space-x-2 group" onClick={() => setMobileOpen(false)}>
                    <span className="text-gray-500 font-regular tracking-widest uppercase text-sm group-hover:text-[#D87D4A] transition-colors">
                      SHOP
                    </span>
                    <svg 
                      className="text-[#D87D4A] group-hover:translate-x-1 transition-transform w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
      {cartOpen && (
        <CartModal
          onClose={() => setCartOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;