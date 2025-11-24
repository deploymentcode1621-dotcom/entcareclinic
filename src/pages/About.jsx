import Header from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <section className="py-20 container mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-lg leading-relaxed">
          We are a specialized ENT clinic providing advanced treatment for Ear, Nose & Throat...
        </p>
      </section>
      <Footer />
    </>
  );
};

export default About;
