import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-chemicals.jpg";
import heroBgImage from "@/assets/hero-bg-chemicals.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImage}
          alt="YAB Chemicals Industrial Facility"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70"></div>
        <div className="absolute inset-0 bg-gradient-subtle opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Trusted <span className="text-primary">Chemical</span> Supplier for{" "}
              <span className="text-accent">Ethiopian</span> Industries
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              YAB Chemicals connects global markets with local industries, providing premium chemical solutions 
              with a commitment to safety, quality, and innovation.
            </p>

            {/* Key Points */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">International Sourcing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Safety Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-corporate hover-shadow group">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="hover-lift">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Stats/Visual Elements */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg hover-shadow hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Products Available</div>
              </div>
              <div className="bg-card p-6 rounded-lg hover-shadow hover-lift">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Countries Sourced</div>
              </div>
              <div className="bg-card p-6 rounded-lg hover-shadow hover-lift">
                <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Satisfied Clients</div>
              </div>
              <div className="bg-card p-6 rounded-lg hover-shadow hover-lift">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-48 h-48 bg-accent/5 rounded-full blur-2xl"></div>
    </section>
  );
};

export default Hero;