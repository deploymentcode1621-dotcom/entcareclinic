import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Phone, ArrowRight, Stethoscope, Users, Award, Star, Clock, Shield } from 'lucide-react';

export default function ENTHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activestat, setActivetat] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full -mr-48 -mt-48 opacity-30 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 rounded-full -ml-40 -mb-40 opacity-30 blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-pink-200 rounded-full opacity-20 blur-2xl"></div>
      
      {/* Floating medical icons */}
      <div className="absolute top-20 left-10 opacity-10">
        <Stethoscope className="w-16 h-16 text-purple-600 animate-pulse" />
      </div>
      <div className="absolute bottom-32 right-20 opacity-10">
        <Heart className="w-12 h-12 text-blue-600 animate-pulse" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm text-purple-700 px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg border border-purple-100">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Heart className="w-4 h-4 text-pink-500" />
              <span>Compassionate Care Since 2010</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
                <span className="block">Healing Ears, Noses</span>
                <span className="block">& Throats <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">with Heart</span></span>
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-purple-700 to-blue-600 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg">
              Experience world-class treatment from our expert ENT specialists. We combine 
              <span className="text-purple-700 font-semibold"> cutting-edge technology </span> 
              with compassionate care for your entire family.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="group relative bg-gradient-to-r from-purple-700 to-blue-600 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-purple-200 transition-all duration-300 hover:scale-105 active:scale-95 flex items-center space-x-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-5 h-5 relative z-10" />
                <span className="relative z-10">Book Appointment</span>
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white text-purple-700 px-7 py-3.5 rounded-xl font-semibold text-sm border-2 border-purple-200 hover:border-purple-400 hover:bg-purple-50 hover:shadow-lg transition-all duration-300 flex items-center space-x-2">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                <span>Call Now</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-8">
              {[
                { icon: Users, value: '15K+', label: 'Happy Patients', color: 'purple' },
                { icon: Stethoscope, value: '25+', label: 'Expert Doctors', color: 'blue' },
                { icon: Award, value: '14+', label: 'Years Excellence', color: 'pink' }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className={`group bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + i * 100}ms` }}
                >
                  <div className={`w-10 h-10 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform ${stat.color === 'purple' ? 'from-purple-500 to-purple-600' : stat.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-pink-500 to-pink-600'}`}>
                    <stat.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Main Image Container */}
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-br from-purple-200 to-blue-200 rounded-3xl opacity-50 blur-xl"></div>
              
              <div className="relative bg-white p-3 rounded-3xl shadow-2xl">
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src="/company data/ENT website/Home page.png" 
                    alt="ENT Specialist" 
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 via-transparent to-transparent"></div>
                  
                  {/* Bottom Info Card */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">24/7 Emergency Care</div>
                          <div className="text-xs text-gray-500">Always here for you</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 bg-green-100 px-3 py-1.5 rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-semibold text-green-700">Open Now</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Rating Badge */}
                <div className="absolute -top-3 -right-3 bg-white rounded-2xl px-4 py-3 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-lg font-bold text-gray-900">4.9</span>
                  </div>
                  <div className="text-xs text-gray-500 text-center">2.5k reviews</div>
                </div>
                
                {/* Shield Badge */}
                <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-4 shadow-xl">
                  <Shield className="w-6 h-6 text-white mb-1" />
                  <div className="text-xs font-semibold text-white">Certified</div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 left-1/4 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{animationDuration: '3s'}}>
                <Clock className="w-6 h-6 text-pink-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}