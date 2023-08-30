import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <>
      {/* https://nextjs.org/docs/messages/no-document-title */}
      <Head>
        <title>Urban Footnotes</title>
        <meta name="description" content="A project presented by Urban Cruise Ship" />
      </Head>
      <div className='bg-neutral-900 bg-opacity-95'>
        <div className="sm:max-w-screen-lg lg:px-0 lg:max-w-screen-lg mx-auto relative">
            <div className='bg-neutral-900'>
                <div>{children}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Layout;