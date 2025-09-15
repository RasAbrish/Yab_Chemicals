import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Truck,
  Globe,
  Shield,
  HeadphonesIcon,
  Users,
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  Award,
  MapPin,
} from "lucide-react";

const Services: React.FC = () => {
  const mainServices = [
    {
      icon: Globe,
      title: "Global Chemical Sourcing",
      description:
        "Access to international chemical markets with strategic partnerships worldwide",
      features: [
        "Sourcing from 50+ countries",
        "Quality verification at origin",
        "Competitive international pricing",
        "Direct manufacturer relationships",
      ],
      color: "primary",
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Safe and efficient delivery of chemicals throughout Ethiopia",
      features: [
        "Specialized chemical transport",
        "Temperature-controlled storage",
        "Nationwide delivery network",
        "Real-time tracking systems",
      ],
      color: "primary",
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Comprehensive safety protocols and regulatory compliance support",
      features: [
        "ISO 9001:2015 certified",
        "Safety data sheets (SDS)",
        "Regulatory documentation",
        "Safety training programs",
      ],
      color: "primary",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Expert consultation and ongoing technical assistance",
      features: [
        "Chemical application guidance",
        "Process optimization support",
        "24/7 technical helpline",
        "On-site consultation",
      ],
      color: "accent",
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Tailored solutions for businesses across various sectors",
      features: [
        "Manufacturing industries",
        "Research institutions",
        "Healthcare sector",
        "Agriculture & fertilizers",
      ],
      color: "accent",
    },
    {
      icon: Zap,
      title: "Innovation & R&D",
      description:
        "Custom chemical solutions and research & development support",
      features: [
        "Custom formulations",
        "Product development support",
        "Laboratory testing services",
        "Innovation partnerships",
      ],
      color: "accent",
    },
  ];

  const additionalServices = [
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality control processes",
    },
    {
      icon: Clock,
      title: "Just-in-Time Delivery",
      description: "Optimized supply chain for timely chemical delivery",
    },
    {
      icon: Award,
      title: "Certification Support",
      description: "Assistance with industry certifications and compliance",
    },
    {
      icon: MapPin,
      title: "Strategic Locations",
      description: "Multiple distribution centers across Ethiopia",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

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
              Comprehensive chemical supply solutions designed to meet the
              diverse needs of Ethiopian industries
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
                      <div
                        className={`w-10 h-10 ${
                          service.color === "primary"
                            ? "bg-primary/10"
                            : "bg-accent/10"
                        } rounded-lg flex items-center justify-center group-hover:${
                          service.color === "primary"
                            ? "bg-primary/20"
                            : "bg-accent/20"
                        } transition-colors`}
                      >
                        <Icon
                          className={`h-8 w-10 ${
                            service.color === "primary"
                              ? "text-primary"
                              : "text-accent"
                          }`}
                        />
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
                        <div
                          key={feature}
                          className="flex items-center space-x-2"
                        >
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
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
              Supporting services that enhance our core chemical supply
              operations
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
      <section className="py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Contact our team today to discuss your chemical supply needs and
            discover how we can support your business growth.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 text-white border-0 rounded-full 
             hover:from-red-700 hover:via-red-600 hover:to-red-500 hover:shadow-lg hover:text-white 
             transition-all duration-300 transform hover:-translate-y-1"
            onClick={() => navigate("/contact")}
          >
            Contact Us
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
