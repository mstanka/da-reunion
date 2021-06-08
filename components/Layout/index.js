import Header from '../Header';
import Menu from '../Menu';
import MobileMenu from '../MobileMenu';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MobileMenu />
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
