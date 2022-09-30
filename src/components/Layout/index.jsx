import React from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <main className='min-h-screen max-w-7xl mx-auto min-w-full overflow-hidden flex-col justify-start items-center'>
      <Navbar />
      {children}
    </main>
  );
}

const Navbar = () => {
  return (
    <nav className='space-x-5 p-2 '>
      <Link href='/'>
        <a className='p-2 my-2 hover:bg-red-400 rounded-md'>Home</a>
      </Link>
      <Link href='/profile'>
        <a className='p-2 my-2 hover:bg-red-400 rounded-md'> 🔐 Profile</a>
      </Link>
      <a
        className='p-2 my-2 hover:bg-red-400 rounded-md'
        href='/api/restricted'
      >
        🔐 Protected
      </a>
    </nav>
  );
};
