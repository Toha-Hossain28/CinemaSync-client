import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Banner from "../Components/Banner";
import FeaturedMovies from "../Components/FeaturedMovies";
import NewsLetter from "../Components/NewsLetter";
import TestimonialSection from "../Components/Testimonials";

function MainLayout() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Banner />
      </section>
      <section>
        <FeaturedMovies />
      </section>
      <section>
        <NewsLetter />
      </section>
      <section>
        <TestimonialSection />
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
