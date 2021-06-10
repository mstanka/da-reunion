import Layout from '../components/Layout';
import SimpleReactLightbox from 'simple-react-lightbox';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SimpleReactLightbox>
  );
}

export default MyApp;
