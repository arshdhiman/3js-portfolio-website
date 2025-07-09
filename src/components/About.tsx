
import { motion } from 'framer-motion';
import { Code, Database, Server } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Expert in MEAN/MERN stack with 6+ years of experience"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management", 
      description: "Proficient in MongoDB, PostgreSQL, and MySQL"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Scalable Solutions",
      description: "Building high-performance APIs and web applications"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Passionate Software Engineer with expertise in building scalable web applications, 
            APIs, and integrating third-party services. I focus on clean code, performance 
            optimization, and delivering user-centric solutions that make a difference.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 text-center hover:bg-card/90 hover:border-border hover:shadow-2xl transition-all duration-500"
            >
              <motion.div 
                className="text-primary mb-4 flex justify-center"
                whileHover={{ rotate: 360, scale: 1.2 }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
