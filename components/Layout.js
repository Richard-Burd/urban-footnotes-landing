import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800">
      <div className="bg-transparent">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:m-2 focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        >
          Skip to main content
        </a>
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <main id="main-content" tabIndex={-1} className="flex flex-col items-center outline-none">
          {children}
        </main>

        <footer className="bg-neutral-950">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Layout;
