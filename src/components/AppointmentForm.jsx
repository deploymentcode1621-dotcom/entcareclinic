import React from 'react';
import { Check } from 'lucide-react';

export default function AppointmentForm({
  formData,
  errors,
  isSubmitted,
  isSubmitting,
  handleChange,
  handleSubmit
}) {
  return (
    <section id="appointment" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-center">
          
          {/* Left Side - Doctor Image (2 columns on large screens) */}
          <div className="lg:col-span-2 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Doctor Image Container */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72">
                <img
                  src="/company data/ENT website/content.png"
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
              <h3 className="text-xl font-bold text-gray-800">Dr. Swati Kodur (Patil)</h3>
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
  );
}