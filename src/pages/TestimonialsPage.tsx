import Navigation from "@/components/Navigation";
import Testimonials from "@/components/Testimonials";
import Partnerships from "@/components/Partnerships";
import Footer from "@/components/Footer";

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Client <span className="text-primary">Testimonials</span> & <span className="text-accent">Partnerships</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what our clients say about us and explore our trusted global partnerships
            that enable us to deliver world-class chemical solutions.
          </p>
        </div>
      </section>

      <Testimonials />
      <Partnerships />
      <Footer />
    </div>
  );
};

export default TestimonialsPage;