import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const WebsiteLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className=" pt-20">
        <div className="w-full max-w-7xl mx-auto px-4">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WebsiteLayout;
