import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-800">
      <div className="bg-transparent">
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        <main className="flex flex-col items-center" role="main">
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
