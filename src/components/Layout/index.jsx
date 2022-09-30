import React from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <main className='min-h-screen max-w-7xl mx-auto min-w-full '>
      <Navbar />
      {children}
    </main>
  );
}

const Navbar = () => {
  return (
    <nav className='space-x-5 p-2 '>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/profile'>
        <a>Profile</a>
      </Link>
    </nav>
  );
};
