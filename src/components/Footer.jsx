  import React from "react";

  export default function Footer({ handleBookAppointment }) {
      const handleBook = () => {
  const section = document.getElementById("appointment");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
    return (
      <footer
        id="contact"
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: "url('/company data/ENT website/footer.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Background Blur Effects */}
        <div className="absolute inset-0 opacity-18 pointer-events-none">
          <div className="hidden sm:block absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-blue-400 rounded-full filter blur-3xl animate-pulse" />
          <div
            className="hidden sm:block absolute bottom-0 right-0 w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-purple-400 rounded-full filter blur-3xl animate-pulse"
            style={{ animationDelay: "1.5s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-72 sm:h-72 md:w-96 md:h-96 bg-pink-400 rounded-full filter blur-3xl opacity-30 animate-pulse"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-6 pb-8">
          {/* Top Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-2 sm:px-6 lg:px-10 pt-4 mb-6">
    {/* Location */}
    <div className="group bg-white/8 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20 shadow-md hover:bg-white/12 transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <h3 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
        Our Location
      </h3>

      <p className="text-xs sm:text-sm md:text-base mb-3 text-blue-100 group-hover:text-white transition-colors leading-relaxed flex-grow">
        No 701/702, 7th floor, WESTWOOD ESTATES,
        <br />
        Kaspate Wasti, Opposite Mont Vert Tropez Road,
        <br />
        Society, Wakod, Pimpri-Chinchwad, Maharashtra 411-057
      </p>

    <button className="w-auto self-start bg-gradient-to-r from-white to-blue-50 
  text-blue-700 font-bold px-4 py-2 rounded-lg 
  hover:from-blue-500 hover:to-blue-600 hover:text-white 
  transition-all duration-300 text-xs sm:text-sm uppercase shadow-md hover:shadow-lg">
    FIND OUR LOCATION
  </button>

    </div>

    {/* Appointment */}
    <div className="group bg-white/8 backdrop-blur-md rounded-xl p-4 sm:p-5 border border-white/20 shadow-md hover:bg-white/12 transform hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <h3 className="text-lg md:text-xl font-bold mb-3 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
        Appointment
      </h3>

      <p className="text-xs sm:text-sm md:text-base mb-3 text-blue-100 group-hover:text-white transition-colors flex-grow">
        Make your appointment online. Quick, easy, and convenient booking available 24/7.
      </p>

      <button
    onClick={handleBook}
    className="w-auto self-start bg-gradient-to-r from-green-500 to-emerald-600 
    hover:from-green-600 hover:to-emerald-700 text-white font-bold 
    px-4 py-2 rounded-lg text-xs sm:text-sm uppercase 
    shadow-md hover:shadow-lg transition-all duration-300">
    BOOK AN APPOINTMENT
  </button>

    </div>
  </div>


          {/* Middle Three Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-2 sm:px-6 lg:px-12 xl:px-16 py-6 md:py-10">

    {/* Services */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow">
      <h3 className="text-base lg:text-lg font-bold mb-3 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full" />
        <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
          Services
        </span>
      </h3>

      <ul className="space-y-0.5 text-sm lg:text-base text-blue-100">
        {[
          "Sleep Medicine",
          "Allergy Diagnosis & Immunotherapy",
          "Vertigo",
          "Audiology & Hearing Services",
          "Pediatric ENT",
          "Head & Neck Surgery",
          "Laryngology (Throat & Voice Services)",
          "Rhinology (Nose & Sinus Services)",
          "Otology / Neurotology (Ear Services)",
        ].map((s) => (
          <li key={s} className="py-1 px-2 rounded-lg hover:bg-white/10 transition-all duration-200">
            <span className="text-cyan-400">•</span> {s}
          </li>
        ))}
      </ul>
    </div>

    {/* Hyperlinks */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow">
      <h3 className="text-base lg:text-lg font-bold mb-3 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-emerald-300 rounded-full" />
        <span className="bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
          Hyperlinks
        </span>
      </h3>

      <ul className="space-y-0.5 text-sm lg:text-base text-blue-100">
        {[
          { href: "#contact", label: "Contact" },
          { href: "#appointment", label: "Appointment" },
          { href: "#reviews", label: "Reviews" },
          { href: "#doctors", label: "Doctors" },
          { href: "#home", label: "Home" },
          { href: "#about", label: "About Us" },
        ].map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className="flex items-center gap-2 py-1.5 px-2 rounded-xl hover:bg-gradient-to-r hover:from-green-500/20 hover:to-emerald-500/20 hover:text-emerald-300 transition-all duration-200"
            >
              <span className="text-emerald-400">•</span> {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Opening Hours */}
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 lg:p-5 border border-white/10 hover:bg-white/10 transition-all duration-300 shadow">
      <h3 className="text-base lg:text-lg font-bold mb-3 flex items-center gap-2">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-400 to-pink-300 rounded-full" />
        <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
          Opening Hours
        </span>
      </h3>

      <div className="space-y-0.5 text-sm lg:text-base">
        {[
          ["Monday", "10.00am - 2.00pm\n6.00pm - 8.30pm"],
          ["Tuesday", "10.00am - 2.00pm\n6.00pm - 8.30pm"],
          ["Wednesday", "10.00am - 2.00pm\n6.00pm - 8.30pm"],
          ["Thursday", "10.00am - 2.00pm\n6.00pm - 8.30pm"],
          ["Friday", "10.00am - 2.00pm\n6.00pm - 8.30pm"],
          ["Saturday", "10.30am - 6.30pm"],
          ["Sunday", "Closed"],
        ].map(([day, hrs]) => (
          <div
            key={day}
            className={`flex justify-between py-1.5 px-2 rounded-xl hover:bg-white/10 transition-all duration-200 ${
              day === "Sunday" ? "opacity-70" : ""
            }`}
          >
            <span className="font-semibold text-blue-100">{day}</span>
            <span
              className={`text-right font-medium text-xs lg:text-sm ${
                day === "Sunday" ? "text-red-300" : "text-emerald-300"
              }`}
              style={{ whiteSpace: "pre-line" }}
            >
              {hrs}
            </span>
          </div>
        ))}
      </div>
    </div>

  </div>

          {/* Bottom Section */}
          <div className="pt-4 pb-7 md:pb-9.5 order-t border-white/20 mx-2 sm:mx-6 lg:mx-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
              <img
                src="/company data/ENT website/logo 2.png"
                alt="Logo"
                className="h-16"
      />
              
              </div>

              {/* Read More */}
              <button className="    w-full md:w-auto bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-3 text-sm font-bold transition-all duration-300 shadow-md hover:shadow-xl">
                Read More
                <span className="text-lg">»</span>
              </button>
            </div>
          </div>
        </div>
      </footer>
    );
  }