import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="min-h-screen">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default MainLayout;
