import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Manage and Protect Your Will Assets Online';
const APP_DESCRIPTION = `Easily create and manage your will, secure your digital legacy, and protect your family's wealth with our comprehensive platform.`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta property="og:title" content={APP_NAME} />

          <meta property="og:description" content={APP_DESCRIPTION} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
