'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { nav, logo, name } = siteConfig;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-[#F5F5F0] border-b border-black border-opacity-10 transition-all duration-300 ${isScrolled ? 'shadow-sm' : ''}`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-300 hover:scale-105">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
                <path d="M6 2L2 6L6 10M10 2L14 6L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-normal text-black tracking-[-0.01em]">
                {logo.linkText.toUpperCase()}
              </span>
            </Link>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {nav.links.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:opacity-70 transition-all duration-300 font-normal text-xs tracking-[0.05em] uppercase relative group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label.toUpperCase()}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-black hover:opacity-70 transition-opacity">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

