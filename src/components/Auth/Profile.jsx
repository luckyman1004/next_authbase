import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  //   useEffect(() => {
  //     if (session) {
  //       alert('You are signed in ' + session.user.image);
  //     }
  //   }, [session]);

  if (!session) return null;
  return (
    <div className='text-5xl p-16 space-x-10 space-y-10'>
      <h1 className='text-2xl font-bold'>Profile</h1>

      <div className='mt-4'>
        <h2 className='text-xl font-bold'>User</h2>

        <img
          src={session.user.image}
          alt={session.user.name}
          className='rounded-full w-20 h-20 p-5'
        />
        <p className='mt-2'>Name: {session.user.name}</p>
        <p className='mt-2'>Email: {session.user.email}</p>
        
      </div>
    </div>
  );
}
