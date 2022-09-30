import { DefaultSeo } from 'next-seo';
import '../src/styles/globals.css';
import SEO from '../next-seo.config';
import { SessionProvider } from 'next-auth/react';
import Layout from '../src/components/Layout';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <DefaultSeo {...SEO} />

        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
