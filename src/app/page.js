import CtaSection from "./components/CTASection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Rating from "./components/Rating";
import Testimonials from "./components/Testimonials";
import Thirdpage from "./components/Thirdpage";

export default function Home() {
  return (
   <main className="min-h-screen overflow-x-hidden  ">
      <Hero/>
      <Header />
      <Thirdpage />
      <Rating />
      <HowItWorks />
      <Testimonials/>
      <FAQSection/>
      <CtaSection/>
      <Footer/>
    </main>
  );
}
