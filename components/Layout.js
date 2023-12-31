import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-neutral-900 bg-opacity-95">
        <div className="sm:max-w-screen-lg lg:px-0 lg:max-w-screen-lg mx-auto relative">
          <div className="bg-neutral-900">
            <Navbar />
            <div>{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
