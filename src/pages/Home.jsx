import Popup from "../components/Popup";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AppointmentForm from "../components/AppointmentForm";
import ServicesSlider from "../components/ServicesSlider";
import Footer from "../components/Footer";
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

// Import new modular components

export default function Home() {
  // --- Data and State Definitions (Centralized) ---

  const navLinks = [
    { href: '#appointment', label: 'Appointment' },
    { href: '#contact', label: 'Contact' }
  ];

  const  services = [
  { id: 1, title: "Otology / Neurotology", subtitle: "(Ear Services)", image: "/company data/ENT website/Otology.png" },
  { id: 2, title: "Rhinology", subtitle: "(Nose & Sinus Services)", image: "/company data/ENT website/Rhinology.png" },
  { id: 3, title: "Laryngology", subtitle: "(Throat & Voice Services)", image: "/company data/ENT website/Laryngology.png" },
  { id: 4, title: "Sleep Medicine", subtitle: "", image: "/company data/ENT website/Sleep Medicine.png" },
  { id: 5, title: "Allergy Diagnosis & Immunotherapy", subtitle: "", image: "/company data/ENT website/Allergy Diagnosis.png" },
  { id: 6, title: "Vertigo", subtitle: "", image: "/company data/ENT website/Vertigo.png" },
  { id: 7, title: "Audiology & Hearing Services", subtitle: "", image: "/company data/ENT website/Audiology & Hearing Services.png" },
  { id: 8, title: "Pediatric ENT", subtitle: "", image: "/company data/ENT website/Pediatric ENT.png" },
  { id: 9, title: "Head & Neck Surgery", subtitle: "", image: "/company data/ENT website/Head & Neck Surgery.png" },
];


  const [formData, setFormData] = useState({
    name: '',
    age: '',
    sex: '',
    phone: '',
    date: '',
    service: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile Nav State
  const [currentSlide, setCurrentSlide] = useState(0); // Services Carousel State
  const [showPopup, setShowPopup] = useState(false); // Popup Modal State

  // --- Utility Functions ---

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  // --- Effects ---

  // Handle Carousel resize logic
  useEffect(() => {
    const handleResize = () => {
      const newSlidesPerView = getSlidesPerView();
      setSlidesPerView(newSlidesPerView);
      if (currentSlide > services.length - newSlidesPerView) {
        setCurrentSlide(Math.max(0, services.length - newSlidesPerView));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide, services.length]);

  // Initial Popup Timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // --- Event Handlers ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.date.trim()) newErrors.date = 'Date is required';
    if (!formData.service) newErrors.service = 'Please select a service';
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          age: '',
          sex: '',
          phone: '',
          date: '',
          service: ''
        });
      }, 3000);
    }, 1500);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const nextSlide = () => {
    if (currentSlide < services.length - slidesPerView) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleBookAppointment = () => {
    setShowPopup(false);
    const appointmentSection = document.getElementById('appointment');
    if (appointmentSection) {
      appointmentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // --- Component Render ---

  return (
    <div className="min-h-screen bg-white">
      {/* Global CSS Animation for context */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
      `}</style>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 animate-fadeIn">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close popup"
            >
              <X size={24} />
            </button>

            <div className="text-center">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                  Book Your Appointment Today!
                </h2>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  Get expert ENT care from experienced specialists. Schedule your consultation now and take the first step towards better health.
                </p>
              </div>

              <button
                onClick={handleBookAppointment}
                className="w-full py-3 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 mb-3"
              >
                Book Appointment Now
              </button>

              <button
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
              >
                Maybe Later
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 1. Navbar */}
      <Navbar
        navLinks={navLinks}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLinkClick={handleLinkClick}
      />

      {/* 2. Hero Section */}
      <HeroSection handleBookAppointment={handleBookAppointment} />

      {/* 3. Appointment Form Section */}
      <AppointmentForm
        formData={formData}
        errors={errors}
        isSubmitted={isSubmitted}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {/* 4. Services Section */}
      <ServicesSlider
        services={services}
        currentSlide={currentSlide}
        slidesPerView={slidesPerView}
        nextSlide={nextSlide}
        prevSlide={prevSlide}
        setCurrentSlide={setCurrentSlide}
      />

      {/* 5. Footer/Contact Section */}
      <Footer />
    </div>
  );
}