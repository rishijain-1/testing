import React from 'react';
import Head from 'next/head';

const Layout = ({ children, title, desc, hasClass, classOpt }) => {
  return (
    <div
      className={`main-wrapper ${
        hasClass ? 'overflow-hidden' : ''
      } ${classOpt}`}
    >
      <Head>
        <title>
          {title
            ? `Quiety | ${title}`
            : `Manage and Protect Your Will Assets Online | Secure Your Family's Future`}
        </title>
        {desc && <meta name="description" content={desc} />}
        {/* */}
      </Head>

      {children}
    </div>
  );
};

export default Layout;
