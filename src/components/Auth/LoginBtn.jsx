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
      <>
        <h1 className='text-2xl font-bold p-5'>{status}</h1>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
