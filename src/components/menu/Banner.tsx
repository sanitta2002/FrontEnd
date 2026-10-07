import { useState, useEffect } from "react";
import bannerImg from "../../assets/images/banner.jpg";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img4 from "../../assets/images/img4.jpg";

const slides = [
  {
    id: 1,
    image: bannerImg,
    title: "UAE New Year Promo",
    subtitle: "From March 1 to April 1",
  },
  {
    id: 2,
    image: img1,
    title: "Spicy Chicken Chop",
    subtitle: "Special Weekend Discount - 20% OFF",
  },
  {
    id: 3,
    image: img2,
    title: "Signature Dum Briyani",
    subtitle: "Experience Authentic Flavors Today",
  },
  {
    id: 4,
    image: img4,
    title: "Chicken Tikka Masala",
    subtitle: "Rich, Bold & Extra Spicy!",
  },
];

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative h-[220px] md:h-[320px] lg:h-[400px] xl:h-[480px] w-full overflow-hidden bg-[#2a1a0a]">
        <div
          className="flex h-full w-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-full w-full shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-8 left-5 text-white md:bottom-12 md:left-10 lg:left-16">
                <h2 className="m-0 font-serif text-[26px] font-bold italic leading-tight tracking-wide drop-shadow-lg md:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-1 text-[13px] font-normal opacity-90 tracking-wide md:text-base">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-5 right-4 flex items-center gap-1.5 md:right-8">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === i ? "w-6 bg-white/95" : "w-1.5 bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;