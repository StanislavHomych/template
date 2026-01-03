import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { footer, logo, name, contact } = siteConfig;

  return (
    <footer className="bg-[#0066FF] text-white mx-4 mb-4 rounded-xl">
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-12 ">
        {/* Logo and Site Name */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-6">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
              <path d="M6 2L2 6L6 10M10 2L14 6L10 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-base font-normal text-white tracking-[-0.01em]">
              {logo.linkText.toUpperCase()}
            </span>
          </div>
        
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-10">
          {/* Product Section */}
          <div>
            <h3 className="font-normal mb-4 text-white uppercase text-xs tracking-[0.05em]">{footer.product.title}</h3>
            <ul className="space-y-2">
              {footer.product.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:opacity-70 transition-opacity text-sm leading-relaxed">
                    {link.href === '/product' ? footer.calculatorLinkLabel : link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="font-normal mb-4 text-white uppercase text-xs tracking-[0.05em]">{footer.legal.title}</h3>
            <ul className="space-y-2">
              {footer.legal.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:opacity-70 transition-opacity text-sm leading-relaxed">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-normal mb-4 text-white uppercase text-xs tracking-[0.05em]">{footer.resources.title}</h3>
            <ul className="space-y-2">
              {footer.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white hover:opacity-70 transition-opacity text-sm leading-relaxed">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

          
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="mb-8">
          <div className="border-t border-white border-opacity-20 mb-6"></div>
          <div className="text-sm text-white opacity-90 leading-relaxed">
            <span className="font-normal">Disclaimer: </span>
            <span>{footer.disclaimer}</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white opacity-90">
              © {currentYear} {name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
