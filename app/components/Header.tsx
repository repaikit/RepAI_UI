"use client";

import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const mobileMenuButton = document.querySelector('.mobile-menu');
    const mobileMenuContent = document.getElementById('mobile-menu-content');
    
    if (mobileMenuButton && mobileMenuContent) {
      const handleClick = () => {
        mobileMenuContent.classList.toggle('mobile-menu-open');
      };
      
      mobileMenuButton.addEventListener('click', handleClick);
      
      return () => {
        mobileMenuButton.removeEventListener('click', handleClick);
      };
    }
  }, []);

  return (
    <header className="border-b sticky top-0 bg-white/80 backdrop-blur z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="https://pbs.twimg.com/media/Gy3MvajbYAA0wWH?format=png&name=small"
            alt="repai.vn logo"
            className="h-6 sm:h-8 w-auto"
          />
          <a href="/" className="font-semibold text-sm sm:text-base">repai.vn</a>
        </div>
        
        {/* Desktop Menu */}
        <nav className="desktop-menu ml-auto flex items-center gap-4 text-sm">
          <a className="hover:text-primary" href="/projects">Projects</a>
          <a className="hover:text-primary" href="/individuals">Individuals</a>
          <a className="hover:text-primary" href="/nft-certificates">NFT Certificates</a>
          <a className="hover:text-primary" href="/verify/demo">Verify</a>
          <a className="hover:text-primary" href="/admin">Admin</a>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1">
            <span className="block h-0.5 w-full bg-gray-900"></span>
            <span className="block h-0.5 w-full bg-gray-900"></span>
            <span className="block h-0.5 w-full bg-gray-900"></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu Content */}
      <div id="mobile-menu-content" className="hidden absolute top-full left-0 right-0 bg-white border-b shadow-md py-4 px-6 flex flex-col space-y-4 w-full text-sm">
        <a className="hover:text-primary py-2" href="/projects">Projects</a>
        <a className="hover:text-primary py-2" href="/individuals">Individuals</a>
        <a className="hover:text-primary py-2" href="/nft-certificates">NFT Certificates</a>
        <a className="hover:text-primary py-2" href="/verify/demo">Verify</a>
        <a className="hover:text-primary py-2" href="/admin">Admin</a>
      </div>
    </header>
  );
}