import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function AuthLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="flex justify-center items-center min-h-[calc(100vh-136px)]">
        <Outlet />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default AuthLayout;
