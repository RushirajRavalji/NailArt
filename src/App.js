import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100
    });

    // Initialize GLightbox
    GLightbox({
      touchNavigation: true,
      loop: true,
      autoplayVideo: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url("https://source.unsplash.com/random/1920x1080?nail-art")',
        }}>
          <div className="absolute inset-0 bg-pale-pink bg-opacity-50"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl md:text-6xl text-charcoal mb-4" data-aos="fade-up">
            Demo Nail Art Design
          </h1>
          <p className="text-xl md:text-2xl text-medium-gray mb-8" data-aos="fade-up" data-aos-delay="300">
            Modern · Minimal · Magnificent
          </p>
          <button
            className="bg-magenta text-white px-8 py-3 rounded-full hover:scale-105 transition-transform duration-200"
            data-aos="fade-up"
            data-aos-delay="600"
            onClick={() => document.getElementById('gallery').scrollIntoView()}
          >
            View Gallery
          </button>
        </div>
      </header>

      {/* Content sections will be added here */}
      
    </div>
  );
}

export default App;
