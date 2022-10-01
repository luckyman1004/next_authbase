import React from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <main className='min-h-screen max-w-7xl mx-auto min-w-full overflow-hidden flex-col justify-start items-center bg-slate-600'>
      <Navbar />
      {children}
    </main>
  );
}

const Navbar = () => {
  return (
    <nav className='space-x-5 p-2 flex items-center bg-slate-700'>
      <Link href='/'>
        <a className='p-2 my-2 hover:bg-red-400 rounded-md'>Home</a>
      </Link>
      <Link href='/profile'>
        <a className='p-2 my-2 hover:bg-red-400 rounded-md'> 🔐 Profile</a>
      </Link>
      <Link href='/people'>
        <a className='p-2 my-2 hover:bg-red-400 rounded-md'> 🔐 People</a>
      </Link>
      <div className='flex items-center space-x-4'>
        <p className=' block my-2 p-2 font-bold text-center bg-sky-500 rounded-md'>
          {' '}
          Api routes {'=>'}{' '}
        </p>
        <a
          className='p-2 my-2 hover:bg-red-400 rounded-md'
          href='/api/restricted'
        >
          🔐 Protected
        </a>
        l
        <a className='p-2 my-2 hover:bg-red-400 rounded-md' href='/api/test'>
          🔐 Test api
        </a>
        <a
          className='p-2 my-2 hover:bg-red-400 rounded-md'
          href='/api/edge-hack'
        >
          🔐 Try out edge feature
        </a>
      </div>
    </nav>
  );
};
