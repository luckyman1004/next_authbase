import { useSession } from 'next-auth/react';
import React from 'react';
import { people_data } from '../data';
import NotLogged from '../src/components/NotLogged';
import Person from '../src/components/Person';

export default function people() {
  const { data: session, status } = useSession();
  if (!session) return <NotLogged />;
  return (
    <div className='h-screen p-5 flex flex-col justify-center'>
      <p className='text-2xl block my-2 p-2 font-bold text-center'>
        Status: {status}
      </p>

      <div className='h-[70vh] overflow-scroll flex-col items-center space-y-3'>
        <p className='text-2xl block my-2 p-2 font-bold text-center bg-red-500 w-full '>
          People List
        </p>
        {people_data.map((p, i) => (
          <Person key={i} data={p} error={false} />
        ))}
      </div>
    </div>
  );
}
