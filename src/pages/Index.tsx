import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import ServicesOverview from "@/components/ServicesOverview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Partnerships from "@/components/Partnerships";
const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ProductShowcase />
      <ServicesOverview />
      <Partnerships />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
