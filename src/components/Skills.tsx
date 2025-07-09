
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["JavaScript", "TypeScript", "Go", "Node.js", "Express.js", "Angular", "React.js", "Next.js", "NestJS"]
    },
    {
      title: "Databases & ORM",
      skills: ["MongoDB", "PostgreSQL", "MySQL", "Mongoose", "Sequelize", "TypeORM"]
    },
    {
      title: "Tools & Technologies", 
      skills: ["Git", "Docker", "AWS", "Redis", "Socket.io", "Jest", "CI/CD", "Postman"]
    },
    {
      title: "APIs & Integrations",
      skills: ["REST API", "Webhooks", "Stripe", "AWS Bedrock", "OpenAI", "BullMQ"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 hover:bg-card/90 hover:border-border hover:shadow-2xl transition-all duration-500"
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="bg-primary/20 hover:bg-primary/30 px-4 py-2 rounded-full text-sm text-foreground border border-primary/30 hover:border-primary/50 transition-all duration-300 cursor-default shadow-lg hover:shadow-xl"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
