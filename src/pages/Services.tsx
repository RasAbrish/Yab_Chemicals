import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Truck, Globe, Shield, HeadphonesIcon, Users, Zap, 
  CheckCircle, Clock, Award, MapPin 
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Global Chemical Sourcing",
      description: "Access to international chemical markets with strategic partnerships worldwide",
      features: [
        "Sourcing from 50+ countries",
        "Quality verification at origin",
        "Competitive international pricing",
        "Direct manufacturer relationships"
      ],
      color: "primary"
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "Safe and efficient delivery of chemicals throughout Ethiopia",
      features: [
        "Specialized chemical transport",
        "Temperature-controlled storage",
        "Nationwide delivery network",
        "Real-time tracking systems"
      ],
      color: "accent"
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Comprehensive safety protocols and regulatory compliance support",
      features: [
        "ISO 9001:2015 certified",
        "Safety data sheets (SDS)",
        "Regulatory documentation",
        "Safety training programs"
      ],
      color: "primary"
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Expert consultation and ongoing technical assistance",
      features: [
        "Chemical application guidance",
        "Process optimization support",
        "24/7 technical helpline",
        "On-site consultation"
      ],
      color: "accent"
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Tailored solutions for businesses across various sectors",
      features: [
        "Manufacturing industries",
        "Research institutions",
        "Healthcare sector",
        "Agriculture & fertilizers"
      ],
      color: "primary"
    },
    {
      icon: Zap,
      title: "Innovation & R&D",
      description: "Custom chemical solutions and research & development support",
      features: [
        "Custom formulations",
        "Product development support",
        "Laboratory testing services",
        "Innovation partnerships"
      ],
      color: "accent"
    }
  ];

  const additionalServices = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control processes"
    },
    {
      icon: Clock,
      title: "Just-in-Time Delivery",
      description: "Optimized supply chain for timely chemical delivery"
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Assistance with industry certifications and compliance"
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Multiple distribution centers across Ethiopia"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive chemical supply solutions designed to meet the diverse needs of Ethiopian industries
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="hover-shadow hover-lift group transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${service.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} rounded-lg flex items-center justify-center group-hover:${service.color === 'primary' ? 'bg-primary/20' : 'bg-accent/20'} transition-colors`}>
                        <Icon className={`h-6 w-6 ${service.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                      </div>
                      <div>
                        <CardTitle className="text-lg group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6 group-hover:border-primary/30">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Additional <span className="text-primary">Capabilities</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Supporting services that enhance our core chemical supply operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="text-center hover-lift group transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-corporate text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Contact our team today to discuss your chemical supply needs and discover how we can support your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Request Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;