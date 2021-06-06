import Header from '../Header';
import Menu from '../Menu';
import Footer from '../Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Menu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
