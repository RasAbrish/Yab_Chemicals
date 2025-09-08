import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Globe, Shield, HeadphonesIcon, Users, Zap } from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Strategic partnerships with international suppliers to ensure reliable chemical supply chains",
      features: ["50+ Countries", "Quality Assurance", "Competitive Pricing"],
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description: "Efficient delivery systems ensuring safe transport of chemicals across Ethiopia",
      features: ["Fast Delivery", "Safe Handling", "Nationwide Coverage"],
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Strict adherence to international safety standards and regulatory requirements",
      features: ["ISO Certified", "Safety Training", "Regulatory Compliance"],
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Expert consultation and technical assistance for optimal chemical applications",
      features: ["Expert Advice", "24/7 Support", "Custom Solutions"],
    },
    {
      icon: Users,
      title: "Industry Partnerships",
      description: "Long-term relationships with businesses across various industrial sectors",
      features: ["B2B Solutions", "Volume Discounts", "Credit Terms"],
    },
    {
      icon: Zap,
      title: "Innovation Services",
      description: "Custom chemical solutions and R&D support for specialized requirements",
      features: ["Custom Formulations", "R&D Support", "Innovation Labs"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="text-accent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end chemical supply solutions designed to meet the diverse needs of Ethiopian industries
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.title}
                className="hover-shadow hover-lift group transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
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
                  <div className="space-y-2">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
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
  );
};

export default ServicesOverview;