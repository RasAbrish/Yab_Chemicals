import Navigation from "@/components/Navigation";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, Globe, Shield, Users, Target, Eye, 
  CheckCircle, Building, Calendar, MapPin 
} from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2008", event: "YAB Chemicals founded", description: "Started with a vision to bridge international chemical markets with Ethiopian industries" },
    { year: "2012", event: "First international partnerships", description: "Established relationships with chemical suppliers in Asia and Europe" },
    { year: "2015", event: "ISO certification achieved", description: "Received ISO 9001:2015 certification for quality management" },
    { year: "2018", event: "Expansion across Ethiopia", description: "Opened distribution centers in major Ethiopian cities" },
    { year: "2020", event: "Digital transformation", description: "Launched online platform for streamlined chemical sourcing" },
    { year: "2024", event: "Leading market position", description: "Became one of Ethiopia's top chemical suppliers" }
  ];

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management Systems", icon: Award },
    { name: "ISO 14001", description: "Environmental Management", icon: Globe },
    { name: "OHSAS 18001", description: "Occupational Health & Safety", icon: Shield },
    { name: "GMP Certified", description: "Good Manufacturing Practice", icon: CheckCircle }
  ];

  const partnerships = [
    { region: "Asia Pacific", countries: 15, description: "Strategic partnerships across Asia" },
    { region: "Europe", countries: 12, description: "Direct relationships with European suppliers" },
    { region: "North America", countries: 8, description: "Access to North American markets" },
    { region: "Middle East", countries: 6, description: "Regional chemical sourcing partnerships" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="py-16 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">YAB Chemicals</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in chemical supply, connecting global innovation with local expertise
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Leading Chemical Supplier in <span className="text-accent">Ethiopia</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                For over 15 years, YAB Chemicals has been at the forefront of chemical supply in Ethiopia, 
                connecting international markets with local industries through reliable sourcing, quality assurance, 
                and innovative solutions.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our commitment to safety, quality, and customer satisfaction has made us a trusted partner 
                for businesses across manufacturing, research, healthcare, and agricultural sectors.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">1000+</div>
                  <div className="text-muted-foreground">Satisfied Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-muted-foreground">Chemical Products</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Source Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="hover-shadow hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Target className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To provide Ethiopian industries with access to high-quality chemicals through 
                    reliable international sourcing, ensuring safety, innovation, and sustainable growth.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-shadow hover-lift">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Eye className="h-8 w-8 text-accent" />
                    <h3 className="text-xl font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground">
                    To be the leading chemical supply company in East Africa, recognized for excellence, 
                    innovation, and contribution to industrial development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Key milestones in YAB Chemicals' growth and development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <Card 
                key={milestone.year}
                className="hover-shadow hover-lift group transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Badge variant="default" className="bg-primary">
                      {milestone.year}
                    </Badge>
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {milestone.event}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quality <span className="text-accent">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized certifications ensuring the highest standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <Card 
                  key={cert.name}
                  className="text-center hover-lift group transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-20 bg-gradient-corporate text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Global <span className="text-accent-foreground">Partnerships</span>
            </h2>
            <p className="text-lg text-primary-foreground/90">
              Strategic relationships across continents enabling reliable chemical sourcing
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <Card 
                key={partnership.region}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <MapPin className="h-8 w-8 text-accent-foreground mx-auto mb-4" />
                  <h3 className="font-semibold text-primary-foreground mb-2">{partnership.region}</h3>
                  <div className="text-2xl font-bold text-accent-foreground mb-2">{partnership.countries}</div>
                  <p className="text-sm text-primary-foreground/80">Countries</p>
                  <p className="text-sm text-primary-foreground/80 mt-2">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />
      <Footer />
    </div>
  );
};

export default About;