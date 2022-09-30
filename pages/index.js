import { NextSeo } from 'next-seo';
import AuthScreen from '@/components/Auth/AuthScreEn';
import Profile from '@/components/Auth/Profile';

export default function Home() {
  return (
    <>
      <NextSeo title='Home' />
      <div className='h-40 block'>
        <a href='/api/restricted'>Content</a>
      </div>
      <AuthScreen />
      <Profile />
    </>
  );
}
