import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

// Assume this import works as per your setup
import { Roboto_Condensed as Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const Navbar = () => {
  const { userId } = auth();

  return (
    <div className="bg-black bg-opacity-50 backdrop-blur-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-12">
        <Link href="/" className={`${roboto.className} text-white relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:absolute after:bottom-[-1px] after:left-0 after:transition-all hover:after:bg-cyan-300`}>
            Home
        </Link>
        <div className="flex gap-8">
          {userId ? (
            <>
              <Link href="/dashboard" className={`${roboto.className} text-white relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:absolute after:bottom-[-1px] after:left-0 after:transition-all hover:after:bg-cyan-300`}>
                  Dashboard
                
              </Link>
              <UserButton afterSignOutUrl='/' />
            </>
          ) : (
            <>
              <Link href="/sign-in" className={`${roboto.className} text-white relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:absolute after:bottom-[-1px] after:left-0 after:transition-all hover:after:bg-cyan-300`}>Sign In
              </Link>
              <Link href="/sign-up" className={`${roboto.className} text-white relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:absolute after:bottom-[-1px] after:left-0 after:transition-all hover:after:bg-cyan-300`}>Sign Up
              </Link>
              <Link href="/about" className={`${roboto.className} text-white relative after:content-[''] after:block after:w-full after:h-0.5 after:bg-indigo-900 after:absolute after:bottom-[-1px] after:left-0 after:transition-all hover:after:bg-cyan-300`}>About
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
