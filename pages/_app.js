import Layout from '../components/Layout';
import Head from 'next/head';
import SimpleReactLightbox from 'simple-react-lightbox';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Head>
        <title>Reunion našima očima</title>
        <meta
          name="description"
          content="Poznávejte ostrov Reunion našima očima - cestovatelský web"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Reunion našima očima" key="title" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
