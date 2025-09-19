import { motion } from "framer-motion";
import { LinkedinIcon, Mail } from "lucide-react";
import Image1 from "@/assets/team1.jpg"
import Image2 from "@/assets/team2.jpg"
import Image3 from "@/assets/team3.jpg"
import Image4 from "@/assets/team4.jpg"
const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ababi Yirega",
      role: "CEO & Founder",
      image:
       `${Image4}`,
      linkedin: "#",
      email: "yared@yabchemicals.com",
    },
    {
      id: 2,
      name: "Alemthehay Tadele ",
      role: "HR and Finace",
      image:
     `${Image3}`,
      linkedin: "#",
      email: "bethlehem@yabchemicals.com",
    },
    {
      id: 3,
      name: "Dr.Husein Geto",
      role: "Marketing Manger",
      image:
      `${Image2}`,
      linkedin: "#",
      email: "daniel@yabchemicals.com",
    },
    {
      id: 4,
      name: "Teklie Tadele",
      role: "Marketing Manager",
      image:
      `${Image1}`,
      linkedin: "#",
      email: "hanan@yabchemicals.com",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {" "}
            Meet Our <span className="text-primary">Leadership</span> Team{" "}
          </h2>{" "}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {" "}
            Experienced professionals driving innovation and excellence in the
            chemical industry{" "}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              {/* Card with overlay */}
              <div className="group relative rounded-2xl overflow-hidden shadow hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80"
                    >
                      <LinkedinIcon className="h-4 w-4 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-9 h-9 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80"
                    >
                      <Mail className="h-4 w-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Name & Role */}
              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
