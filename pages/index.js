import { NextSeo } from 'next-seo';
import AuthScreen from '../src/components/Auth/AuthScreEn';
import Profile from '../src/components/Auth/Profile';

export default function Home() {
  return (
    <>
      <NextSeo title='Home' />
      <AuthScreen />
      <div className='h-screen p-5 flex flex-col justify-start space-y-10'>
        <h1 className='text-4xl font-bold text-center'>Welcome to NextAuth</h1>

        <p className='text-2xl font-bold text-center'>
          This is a demo of NextAuth
        </p>

        <p className='text-2xl font-bold text-center'>
          You can login with Google only if you have been approved
        </p>
        <p>
          this is just a demo version, so you can't login with your own account,
          you can only login with the demo account
        </p>
        <p>
          <span className='text-2xl font-bold'>Demo account:</span>
          <br />
        </p>
      </div>
    </>
  );
}
