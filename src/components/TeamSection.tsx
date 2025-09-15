import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Yared Abebe",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      bio: "With over 20 years in the chemical industry, Yared founded YAB Chemicals to bridge international markets with Ethiopian industries.",
      linkedin: "#",
      email: "yared@yabchemicals.com",
    },
    {
      id: 2,
      name: "Bethlehem Tadesse",
      role: "Chief Operations Officer",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=300&h=300&fit=crop&crop=face",
      bio: "Bethlehem oversees our global supply chain and ensures seamless operations across all international partnerships.",
      linkedin: "#",
      email: "bethlehem@yabchemicals.com",
    },
    {
      id: 3,
      name: "Daniel Hailu",
      role: "Head of Quality Assurance",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Daniel leads our quality control processes and maintains our international safety certifications and standards.",
      linkedin: "#",
      email: "daniel@yabchemicals.com",
    },
    {
      id: 4,
      name: "Hanan Mohammed",
      role: "Director of Business Development",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Hanan drives our expansion strategies and builds strategic partnerships with local and international clients.",
      linkedin: "#",
      email: "hanan@yabchemicals.com",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Leadership</span> Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experienced professionals driving innovation and excellence in the
            chemical industry
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Social icons */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-primary rounded-md flex items-center justify-center hover:bg-primary/80"
                  >
                    <LinkedinIcon className="h-4 w-4 text-white" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-8 h-8 bg-primary rounded-md flex items-center justify-center hover:bg-primary/80"
                  >
                    <Mail className="h-4 w-4 text-white" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                >
                  {member.bio}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
