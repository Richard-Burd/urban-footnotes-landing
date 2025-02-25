import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-neutral-950 via-neutral-800 to-neutral-700">
      {/* Navbar */}
      <div className="bg-transparent">
        <Navbar />

        {/* Main Content */}
        <main className="flex flex-col items-center" role="main">
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
