import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect } from 'react';

export default function LoginBtn() {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (session) {
      // signIn('google');
      console.log(session);
    }
  }, [session]);

  if (session) {
    return (
      <div className='p-5 space-x-5 space-y-5 w-5/6 mx-auto '>
        <p className='block py-2'>Status: {status}</p>
        <div className='w-3/4 mx-auto overflow-scroll bg-slate-800'>
          <pre className='block py-2'>Session: {JSON.stringify(session)}</pre>
        </div>
        <hr />
        Signed in as: {session.user.email} <br />
        <hr />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div className='p-2 w-1/2'>
      <div>
        <p className='block py-2'>Not signed in</p>
        <p className='block py-2'>Status: {status}</p>
        <p className='block py-2'>Session: {session}</p>
        <hr />
        <p className='block py-2'>Please sign in to view protected content</p>
      </div>

      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
