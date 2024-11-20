import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-neutral-900 bg-opacity-95 min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="bg-neutral-900">
        <Navbar />
      

      {/* Main Content */}
      <main
          className="flex flex-col items-center mx-auto w-full max-w-screen-xl px-2 sm:px-4 lg:px-6"
        role="main"
      >
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-950">
        <Footer />
      </footer>
    </div>
    </div>
  );
};

export default Layout;
