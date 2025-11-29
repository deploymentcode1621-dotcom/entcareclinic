import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

export default function App() {
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

  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getSlidesPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [slidesPerView, setSlidesPerView] = useState(getSlidesPerView());

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(getSlidesPerView());
      if (currentSlide > services.length - getSlidesPerView()) {
        setCurrentSlide(Math.max(0, services.length - getSlidesPerView()));
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentSlide]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const navLinks = [
    { href: '#appointment', label: 'Appointment' },
    { href: '#contact', label: 'Contact' }
  ];

  const services = [
    {
      id: 1,
      title: "Otology / Neurotology",
      subtitle: "(Ear Services)",
      image: "/entclient/company data/ENT website/Otology.png"
    },
    {
      id: 2,
      title: "Rhinology",
      subtitle: "(Nose & Sinus Services)",
      image: "/entclient/company data/ENT website/Rhinology.png"
    },
    {
      id: 3,
      title: "Laryngology",
      subtitle: "(Throat & Voice Services)",
      image: "/entclient/company data/ENT website/Laryngology.png"
    },
    {
      id: 4,
      title: "Sleep Medicine",
      subtitle: "",
      image: "/entclient/company data/ENT website/Otology.png"
    },
    {
      id: 5,
      title: "Allergy Diagnosis & Immunotherapy",
      subtitle: "",
      image: "/entclient/company data/ENT website/Rhinology.png"
    },
    {
      id: 6,
      title: "Vertigo",
      subtitle: "",
      image: "/entclient/company data/ENT website/Laryngology.png"
    },
    {
      id: 7,
      title: "Audiology & Hearing Services",
      subtitle: "",
      image: "/entclient/company data/ENT website/Otology.png"
    },
    {
      id: 8,
      title: "Pediatric ENT",
      subtitle: "",
      image: "/entclient/company data/ENT website/Rhinology.png"
    },
    {
      id: 9,
      title: "Head & Neck Surgery",
      subtitle: "",
      image: "/entclient/company data/ENT website/Laryngology.png"
    }
  ];

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

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.date.trim()) {
      newErrors.date = 'Date is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
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

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
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

      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="/entclient/company data/ENT website/Ent_Logo.png" className="h-12" alt="ENT Logo" />
            </div>

            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 rounded-lg p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden bg-white border-t border-gray-100`}
        >
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        backgroundImage: "url('/entclient/company data/ENT website/Banner 3.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay - Desktop */}
      <div
        className="hidden md:block w-full h-full absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(91, 58, 157, 0.95) 0%, rgba(46, 107, 166, 0.85) 100%)',
          clipPath: 'polygon(0 0, 65% 0, 50% 100%, 0 100%)',
          zIndex: 1
        }}
      />
      
      {/* Gradient Overlay - Mobile/Tablet */}
      <div 
        className="md:hidden absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(91, 58, 157, 0.92) 0%, rgba(62, 91, 169, 0.88) 40%, rgba(46, 107, 166, 0.82) 70%, rgba(46, 123, 184, 0.75) 100%)',
          zIndex: 1
        }}
      />
      
      {/* Yellow Accent Strip - Desktop */}
      <div 
        className="hidden md:block absolute bottom-0 left-0 w-full h-3"
        style={{
          background: 'linear-gradient(90deg, #FDB913 0%, #FDB913 48%, transparent 48%)',
          zIndex: 3
        }}
      />
      
      {/* Yellow Accent Strip - Mobile */}
      <div 
        className="md:hidden absolute bottom-0 left-0 w-full h-2"
        style={{
          background: '#FDB913',
          width: '40%',
          zIndex: 3
        }}
      />
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
            
            {/* LEFT CONTENT */}
            <div className="text-white space-y-4 md:space-y-6 max-w-xl pt-4 md:pt-8 lg:pt-12 z-20 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Healing Ears, Noses<br />& Throats with Heart.
              </h1>
              <p className="text-yellow-400 text-lg sm:text-xl md:text-2xl font-semibold">
                Trusted ENT care for your entire family
              </p>
              <button 
                onClick={handleBookAppointment}
                className="bg-white text-gray-800 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg inline-block"
              >
                Book An Appointment
              </button>
            </div>
            
            {/* RIGHT CONTENT - Desktop Image */}
            <div className="hidden md:block relative z-10 flex-shrink-0">
              <div className="relative" style={{ width: '550px', height: '600px' }}>
                <img
                  src="/entclient/company data/ENT website/consaltant.png"
                  alt="ENT Consultant with Patient"
                  className="absolute bottom-0 right-0 h-full w-auto object-contain object-bottom drop-shadow-2xl"
                  style={{ maxHeight: '90vh' }}
                />
              </div>
            </div>
            
            {/* RIGHT CONTENT - Mobile/Tablet Image */}
            <div className="md:hidden relative w-full z-10 mt-6 pb-8">
              <div className="relative mx-auto" style={{ maxWidth: '500px' }}>
                <img
                  src="/entclient/company data/ENT website/consaltant.png"
                  alt="ENT Consultant with Patient"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  style={{ maxHeight: '50vh' }}
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
   {/* Appointment Form Section */}
     <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          
          {/* Left Side - Doctor Image (2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Doctor Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <img
                  src="/entclient/company data/ENT website/content.png"
                  alt="Doctor"
                  className="w-full h-full object-cover rounded-2xl lg:rounded-3xl shadow-xl"
                />
                {/* Decorative gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-blue-600/20 to-transparent rounded-b-2xl lg:rounded-b-3xl"></div>
              </div>
              
              {/* Medical Icon Badge */}
              <div className="absolute -top-3 -left-3 w-14 h-14 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="w-11 h-11 lg:w-13 lg:h-13 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <svg className="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Doctor Info - Hidden on mobile */}
            <div className="text-center mt-5 hidden lg:block">
              <h3 className="text-xl font-bold text-gray-800">Dr. [Doctor Name]</h3>
              <p className="text-purple-600 font-medium mt-1 text-sm">ENT Specialist</p>
              <p className="text-gray-600 text-xs mt-2 max-w-xs mx-auto">
                Expert in Ear, Nose, Throat treatments with over 15 years of experience
              </p>
            </div>
          </div>

          {/* Right Side - Appointment Form (3 columns on large screens) */}
          <div className="lg:col-span-3 relative p-5 sm:p-6 md:p-7 rounded-2xl lg:rounded-3xl bg-white shadow-xl max-w-lg lg:max-w-none mx-auto w-full overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 lg:w-32 lg:h-32 bg-purple-100 rounded-full -mr-12 lg:-mr-16 -mt-12 lg:-mt-16 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 lg:w-24 lg:h-24 bg-blue-100 rounded-full -ml-10 lg:-ml-12 -mb-10 lg:-mb-12 opacity-50"></div>

            {/* Success Animation */}
            {isSubmitted && (
              <div className="absolute inset-0 bg-white z-50 flex flex-col items-center justify-center rounded-2xl lg:rounded-3xl">
                <div className="relative">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <Check className="w-10 h-10 text-white" strokeWidth={3} />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full animate-ping opacity-75"></div>
                </div>
                <h3 className="mt-5 text-xl font-bold text-gray-800">Appointment Booked!</h3>
                <p className="mt-2 text-sm text-gray-600">We'll contact you soon</p>
              </div>
            )}

            {/* Form Header */}
            <div className="relative text-center mb-5 md:mb-6">
              <div className="inline-block">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-700 to-blue-600 bg-clip-text text-transparent mb-2">
                  Book Your Appointment
                </h2>
                <div className="h-1 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full"></div>
              </div>
            </div>

            {/* Form */}
            <div className="relative space-y-3 md:space-y-4">
              {/* Name Field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={`w-full border-2 ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors`}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500 animate-pulse">{errors.name}</p>
                )}
              </div>

              {/* Age and Sex Fields */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder="Age"
                    min="1"
                    max="120"
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                    Sex
                  </label>
                  <select
                    name="sex"
                    value={formData.sex}
                    onChange={handleChange}
                    className="w-full border-2 border-gray-300 rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors bg-white"
                  >
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              {/* Mobile Number Field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  maxLength="10"
                  className={`w-full border-2 ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors`}
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500 animate-pulse">{errors.phone}</p>
                )}
              </div>

              {/* Date Field */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Appointment Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={`w-full border-2 ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors`}
                />
                {errors.date && (
                  <p className="mt-1 text-xs text-red-500 animate-pulse">{errors.date}</p>
                )}
              </div>

              {/* Service Dropdown */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Service <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`w-full border-2 ${errors.service ? 'border-red-500' : 'border-gray-300'} rounded-lg px-3 py-2 sm:py-2.5 text-sm focus:outline-none focus:border-purple-500 transition-colors bg-white`}
                >
                  <option value="">Select a service</option>
                  <option value="Ear">Ear</option>
                  <option value="Nose">Nose</option>
                  <option value="Throat">Throat</option>
                  <option value="Vertigo">Vertigo</option>
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-500 animate-pulse">{errors.service}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`w-full py-2.5 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-700 to-blue-600 hover:shadow-lg hover:scale-[1.02] active:scale-95'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-4 w-4 mr-2" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'BOOK APPOINTMENT'
                )}
              </button>

              <p className="text-center text-xs text-gray-500 mt-2">
                <span className="text-red-500">*</span> Required fields
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Services Section */}
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
                    className={`flex-shrink-0 px-3 md:px-4 ${
                      slidesPerView === 1 ? 'w-full' : 
                      slidesPerView === 2 ? 'w-1/2' : 'w-1/3'
                    }`}
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                    }}
                  >
                    <div className="text-center group">
                      <div className="relative w-48 h-48 md:w-52 md:h-52 lg:w-56 lg:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:rotate-6">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <h3 className="text-base md:text-lg font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent px-2 min-h-[60px] flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                        {service.title}
                        {service.subtitle && (
                          <>
                            <br />
                            <span className="text-lg font-bold md:text-base">{service.subtitle}</span>
                          </>
                        )}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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

            <div className="flex justify-center gap-2 mt-8">
              {[...Array(services.length - slidesPerView + 1)].map((_, index) => (
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
    </div>
  );
}