import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../Components/Banner";

function MainLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Banner />
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
