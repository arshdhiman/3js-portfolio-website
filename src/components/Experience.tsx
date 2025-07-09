
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Appinventiv Technology Pvt. Ltd.",
      location: "Mohali, Punjab, India",
      period: "11/2022 - Present",
      description: "A technology company providing innovative web and mobile app solutions.",
      responsibilities: [
        "Developed and maintained web applications using MERN stack technologies",
        "Responsible for Deployment, Configuration and technical troubleshooting",
        "Coordinating with customers and efficiently aligning with their requirements",
        "Collaborated with cross-functional teams to deliver projects on time"
      ]
    },
    {
      title: "MEAN Stack Developer",
      company: "BCoder Castle Pvt. Ltd.",
      location: "Mohali, India", 
      period: "11/2018 - 11/2022",
      description: "A development company specializing in web and mobile app projects.",
      responsibilities: [
        "Led a team of developers in designing and implementing Angular projects",
        "Conducted code reviews and provided mentorship to junior team members",
        "Enhanced application performance and scalability through optimization techniques",
        "Managed time-sensitive updates, encompassing flow changes and database upgrades"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
            6+ years of building innovative solutions and leading development teams
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:bg-card/90 hover:border-border hover:shadow-2xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Building size={20} />
                    <span className="text-lg font-semibold">{exp.company}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6 italic font-medium">{exp.description}</p>
              
              <div className="space-y-3">
                {exp.responsibilities.map((responsibility, respIndex) => (
                  <motion.div
                    key={respIndex}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (respIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform "
                    />
                    <p className="text-foreground/80 group-hover:text-foreground transition-colors ">
                      {responsibility}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
