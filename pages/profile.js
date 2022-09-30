import { useSession } from 'next-auth/react';
import React from 'react';
import Profile from '../src/components/Auth/Profile';
import NotLogged from '../src/components/NotLogged';
export default function profilePage() {
  const { data: session, status } = useSession();
  return (
    <div className='h-screen p-5 flex flex-col justify-center'>
      {session ? <Profile /> : <NotLogged />}
    </div>
  );
}
