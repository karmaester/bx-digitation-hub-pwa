import Header from '../Header/component/Header'
import Head from 'next/head'

export default function Layout({ children }: { children: JSX.Element }) {

    return (
        <>
            <Head>
                <title>Digitación Hub</title>
                <link rel="icon" href="/LOGO-solo-icono.svg" />
            </Head>
            <Header />
            <main>{children}</main>
            <style global jsx>{`
        body {
            background-color: #fafafa;
          margin: 0;
          font-family: 'SF Pro Text', 'SF Pro Icons', 'Helvetica Neue', 'Helvetica',
      'Arial', sans-serif;
        }
      `}</style>
        </>
    )
}