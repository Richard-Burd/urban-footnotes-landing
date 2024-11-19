import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 bg-opacity-95">
        {/* Wider layout with centered content */}
        <div className="relative mx-auto max-w-screen-2xl px-12 sm:px-6 lg:px-8">
          <div className="bg-neutral-900">
            {/* Centered Navbar */}
            <div className="mx-auto max-w-screen-2xl">
              <Navbar />
            </div>
            {/* Main content centered */}
            <div className="mx-auto max-w-screen-2xl px-12">{children}</div>
            {/* Centered Footer */}
            <div className="mx-auto max-w-screen-lg">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
