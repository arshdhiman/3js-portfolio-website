import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ViewPath (Audio Enhancement)",
      description:
        "A video interactive education platform aimed at enhancing classroom experiences with real-time streaming and interactive features.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "React.js",
        "Docker",
        "AWS",
        "Socket.io",
        "Jest",
      ],
      achievements: [
        "Improved code quality by 15% with ESLint and Prettier setup",
        "Enhanced test coverage by 90% with Jest unit tests",
        "Implemented LaunchDarkly feature flags for production toggles",
      ],
      color: "from-blue-500 to-cyan-500",
      githubLink: null,
      demoLink: null,
    },
    {
      title: "Stream Rebels",
      description:
        "A video-streaming platform tailored for the electronic music community with live streaming capabilities and real-time interaction.",
      technologies: ["Angular", "Node.js", "Express.js", "MySQL", "Agora"],
      achievements: [
        "Engineered innovative web application with Angular frontend",
        "Integrated Agora for seamless live streaming experience",
        "Managed scalable backend APIs with robust functionality",
      ],
      color: "from-purple-500 to-pink-500",
      githubLink: null,
      demoLink: null,
    },
    {
      title: "Multiverz",
      description:
        "A platform allowing users to create and participate in challenges to showcase skills with gamification elements.",
      technologies: ["Angular", "Node.js", "Express.js", "MongoDB"],
      achievements: [
        "Developed innovative challenge-based platform",
        "Implemented user skill showcasing system",
        "Built scalable database management with MongoDB",
      ],
      color: "from-green-500 to-teal-500",
      githubLink: null,
      demoLink: null,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
            Innovative solutions that showcase technical expertise and
            problem-solving skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-card/90 backdrop-blur-sm rounded-2xl border border-border hover:bg-card hover:border-border/80 hover:shadow-2xl transition-all"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    TECHNOLOGIES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="bg-primary/20 hover:bg-primary/30 px-3 py-1 rounded-full text-xs text-foreground border border-primary/30 hover:border-primary/50 transition-all  cursor-default"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-3">
                    KEY ACHIEVEMENTS
                  </h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li
                        key={achIndex}
                        className="flex items-start gap-2 text-sm text-foreground/80"
                      >
                        <div className="w-1.5 h-1.5 bg-green-600 dark:bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {(project.githubLink || project.demoLink) && (
                  <div className="flex gap-4">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-secondary/80 hover:bg-secondary px-4 py-2 rounded-lg text-sm text-foreground border border-border hover:border-border/80 transition-all  animate-bounce-slow"
                        >
                          <Github size={16} />
                          Code
                        </motion.button>
                      </a>
                    )}
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 bg-primary/90 hover:bg-primary px-4 py-2 rounded-lg text-sm text-primary-foreground transition-all  animate-bounce-slow"
                        >
                          <ExternalLink size={16} />
                          Demo
                        </motion.button>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
