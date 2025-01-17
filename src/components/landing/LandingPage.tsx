import About from "./pages/About";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Navbar from "./ui/Navbar";

function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}

export default LandingPage;
