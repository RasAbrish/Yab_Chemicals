import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Truck,
  Globe,
  Shield,
  HeadphonesIcon,
  Users,
  Zap,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ServicesOverview = () => {
  const services = [
    {
      icon: Globe,
      title: "Global Sourcing",
      description:
        "Strategic partnerships with international suppliers to ensure reliable chemical supply chains",
      features: ["50+ Countries", "Quality Assurance", "Competitive Pricing"],
    },
    {
      icon: Truck,
      title: "Logistics & Distribution",
      description:
        "Efficient delivery systems ensuring safe transport of chemicals across Ethiopia",
      features: ["Fast Delivery", "Safe Handling", "Nationwide Coverage"],
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description:
        "Strict adherence to international safety standards and regulatory requirements",
      features: ["ISO Certified", "Safety Training", "Regulatory Compliance"],
    },

    {
      icon: Users,
      title: "Industry Partnerships",
      description:
        "Long-term relationships with businesses across various industrial sectors",
      features: ["B2B Solutions", "Volume Discounts", "Credit Terms"],
    },
  ];

  const navigate = useNavigate();
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive{" "}
            <span className="text-gradient bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end chemical supply solutions designed to meet the diverse
            needs of Ethiopian industries
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="shadow-lg hover-shadow hover-lift group transition-all duration-300 border-l-4 border-l-primary/20 hover:border-l-primary"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-10 text-primary" />
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
                      <div
                        key={feature}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
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
        <Button
          variant="outline"
          size="lg"
          className="mt-5 bg-gradient-to-r from-blue-700 to-blue-500 text-white border-0 rounded-full hover:from-blue-600 hover:to-blue-800 hover:text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
          onClick={() => navigate("/services")}
        >
          Our Services
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </section>
  );
};

export default ServicesOverview;
