import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const testimonials = [
  {
    id: 1,
    name: "Alex Rodriguez",
    review:
      "CinemaSync transformed how I discover movies! The personalized recommendations are spot-on, and I've found so many hidden gems I would've never discovered on my own.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sarah Thompson",
    review:
      "As a film buff, CinemaSync is my go-to platform. The community discussions are incredible, and I love tracking my watched movies and getting tailored suggestions.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    review:
      "Finally, a platform that understands my movie tastes! The detailed reviews, ratings, and community interactions make CinemaSync more than just a movie website.",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/85.jpg",
  },
];

const TestimonialSection = () => {
  return (
    <div className="bg-gradient-to-r from-evergreen to-deepOceanBlue text-white py-16 px-6">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">What Our Adventurers Say</h2>
        <p className="mt-3 text-lg font-light">
          Real stories, genuine experiences.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-aos="fade-up"
            className="max-w-sm bg-white text-black rounded-lg shadow-md p-6 relative"
          >
            <img
              src={testimonial.photo}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full border-4 border-evergreen absolute -top-8 left-1/2 transform -translate-x-1/2"
            />
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-sm">{testimonial.review}</p>
              <div className="flex justify-center mt-4">
                {Array.from({ length: testimonial.rating }).map((_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
