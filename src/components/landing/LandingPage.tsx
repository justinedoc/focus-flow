import { useEffect } from "react";
import About from "./pages/About";
import Banner from "./pages/Banner";
import Faq from "./pages/Faq";
import Features from "./pages/Features";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/Testimonials";
import Navbar from "./ui/Navbar";
import ScrollReveal from "scrollreveal";
import { animations } from "./animations";

function LandingPage() {
  useEffect(() => {
    const sr = ScrollReveal?.({
      distance: "16px",
      duration: 1200,
      delay: 100,
      reset: false,
    });
    animations(sr);
  }, []);
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Faq />
      <Banner />
      <Footer />
    </main>
  );
}

export default LandingPage;
