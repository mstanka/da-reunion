import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
