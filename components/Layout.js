import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      {/* https://nextjs.org/docs/messages/no-document-title */}
      <Head>
        <title>Urban Footnotes</title>
        <meta name="description" content="A project presented by Urban Cruise Ship" />
      </Head>
      <div className='bg-neutral-900'>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;