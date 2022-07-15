import Head from 'next/head';
import Header from '@components/molecules/Header';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Head>
        <title>Digitación Hub</title>
        <link rel='icon' href='/LOGO-solo-icono.svg' />
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
}
