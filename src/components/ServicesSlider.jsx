import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ServicesSlider({ services, currentSlide, slidesPerView, nextSlide, prevSlide, setCurrentSlide }) {
  // Utility function to determine the width class for a slide
  const getSlideWidthClass = (count) => {
    if (count === 1) return 'w-full';
    if (count === 2) return 'w-1/2';
    return 'w-1/3';
  };

  const maxSlides = services.length - slidesPerView + 1;

  return (
    <section
      id="services"
      className="py-20 mt-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/entclient/company data/ENT website/Banner 3.png')",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-4">
            Specialities ENT Care Services
          </h2>

          <p className="text-gray-800 max-w-4xl mx-auto text-base md:text-lg leading-relaxed">
            Our ENT Clinic offers comprehensive evaluation, diagnosis,
            and treatment of conditions affecting the ear, nose, throat, head, and neck.
            We provide both medical and surgical care using state-of-the-art technology
            and evidence-based practices.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden px-2">
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesPerView)}%)` }}
            >
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`flex-shrink-0 px-3 md:px-4 ${getSlideWidthClass(slidesPerView)}`}
                  // Note: Animation styles from original code are kept for continuity, though CSS logic should be in a stylesheet
                  style={{ animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards` }}
                >
                  <div className="text-center group">
                    <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2  border-orange-300
 shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent px-2 min-h-[60px] flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
  <span>{service.title}</span>

  {service.subtitle && (
    <span className="text-black text-sm md:text-base font-semibold mt-1">
      {service.subtitle}
    </span>
  )}
</h3>


                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-2 md:p-3 rounded-full shadow-xl z-10 transition-all duration-300 ${
              currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-2xl'
            }`}
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentSlide >= services.length - slidesPerView}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-gradient-to-br from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white p-2 md:p-3 rounded-full shadow-xl z-10 transition-all duration-300 ${
              currentSlide >= services.length - slidesPerView ? 'opacity-30 cursor-not-allowed' : 'hover:scale-110 hover:shadow-2xl'
            }`}
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 w-10 shadow-lg'
                    : 'bg-gray-300 hover:bg-gray-400 w-2.5'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}