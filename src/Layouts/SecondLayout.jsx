import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SecondLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default SecondLayout;
