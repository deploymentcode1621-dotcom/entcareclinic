import Header from "../components/Navbar";
import ContactForm from "../components/AppointmentForm";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="py-20 container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
