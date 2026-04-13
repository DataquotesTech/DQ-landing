import ScrollProgress from "@/components/landing/ScrollProgress";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import TrustSnapshot from "@/components/landing/TrustSnapshot";
import VerticalsSection from "@/components/landing/VerticalsSection";
import ProblemSolution from "@/components/landing/ProblemSolution";
import ServicesDeepDive from "@/components/landing/ServicesDeepDive";
import ProcessFramework from "@/components/landing/ProcessFramework";
import Testimonials from "@/components/landing/Testimonials";
import CaseStudies from "@/components/landing/CaseStudies";
import WhoThisIsFor from "@/components/landing/WhoThisIsFor";
import FAQ from "@/components/landing/FAQ";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <Navbar />  
      <HeroSection />         
      <TrustSnapshot />
      <VerticalsSection />
      <ProblemSolution />
      <ServicesDeepDive />
      <ProcessFramework />
      <Testimonials />
      <CaseStudies />
      <WhoThisIsFor />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
