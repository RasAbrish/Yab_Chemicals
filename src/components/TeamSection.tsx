import { Card, CardContent } from "@/components/ui/card";
import { LinkedinIcon, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yared Abebe",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "With over 20 years in the chemical industry, Yared founded YAB Chemicals to bridge international markets with Ethiopian industries.",
      linkedin: "#",
      email: "yared@yabchemicals.com"
    },
    {
      id: 2,
      name: "Bethlehem Tadesse",
      role: "Chief Operations Officer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=300&h=300&fit=crop&crop=face",
      bio: "Bethlehem oversees our global supply chain and ensures seamless operations across all international partnerships.",
      linkedin: "#",
      email: "bethlehem@yabchemicals.com"
    },
    {
      id: 3,
      name: "Daniel Hailu",
      role: "Head of Quality Assurance",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Daniel leads our quality control processes and maintains our international safety certifications and standards.",
      linkedin: "#",
      email: "daniel@yabchemicals.com"
    },
    {
      id: 4,
      name: "Hanan Mohammed",
      role: "Director of Business Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Hanan drives our expansion strategies and builds strategic partnerships with local and international clients.",
      linkedin: "#",
      email: "hanan@yabchemicals.com"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Leadership</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence in the chemical industry
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.id} 
              className="hover-shadow hover-lift group transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex space-x-2">
                        <a
                          href={member.linkedin}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <LinkedinIcon className="h-4 w-4 text-white" />
                        </a>
                        <a
                          href={`mailto:${member.email}`}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;