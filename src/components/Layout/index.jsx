import React from 'react';
import Link from 'next/link';
export default function Layout({ children }) {
  return (
    <main className='min-h-screen max-w-7xl mx-auto min-w-full overflow-hidden flex-col justify-start items-center bg-slate-600'>
      <Navbar />
      {children}
      <footer className='flex flex-col justify-center items-center w-full p-2 border-t'>
        <h1 className='text-center text-sky-500 text-2xl'>
          © 2021 Next.js + Next - auth
        </h1>
        <p className='text-center text-sky-500'> a side project by Alwaz</p>
        <br />

        <p className='text-center text-sky-500 text-base animate-pulse'>
          {' '}
          <a
            target={'_blank'}
            href='https://github.com/alwaz-shahid/next-auth-app-base'
          >
            You can find the source code 👉 <hr /> Source code
          </a>
          <hr />
        </p>
        <p className='text-center text-indigo-500 p-2 text-4xl text-red-500'>
          <a
            target={'_blank'}
            href='https://github.com/alwaz-shahid'
            className='flex items-center'
          >
            Follow me on Guthub to get updates on my projects
          </a>
        </p>
      </footer>
    </main>
  );
}

const Navbar = () => {
  return (
    <nav className='navbar  '>
      <div className='flex-wrap flex  md:flex-row flex-col'>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/profile'>
          <a> 🔐 Profile</a>
        </Link>
        <Link href='/people'>
          <a> 🔐 People</a>
        </Link>
      </div>
      <div className='flex items-center px-2 md:flex-row flex-col'>
        <p className=' lg:my-2 lg:p-2 p-1 text-center bg-sky-500 rounded-md'>
          {' '}
          Api routes
        </p>
        <a href='/api/restricted'>🔐 Protected</a>l
        <a href='/api/test'>🔐 Test api</a>
        <a href='/api/edge-hack'>🔐 Try out edge feature</a>
      </div>
    </nav>
  );
};
