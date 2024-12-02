import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-600">
      {/* Navbar */}
      <div className="bg-transparent">
        <Navbar />

        {/* Main Content */}
        <main
          className="mx-auto flex w-full max-w-screen-xl flex-col items-center px-2 sm:px-4 lg:px-6"
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
