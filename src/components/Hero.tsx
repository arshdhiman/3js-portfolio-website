import { motion } from "framer-motion";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Download,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useScrollSnap } from "@/hooks/useScrollSnap";

const Hero = () => {
  const { scrollToSection } = useScrollSnap();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-12"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          {/* Profile Picture */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring", bounce: 0.5 }}
            className="mb-8 mt-20 md:mt-0 flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative"
            >
              <Avatar className="w-40 h-40 border-4 border-gradient-to-r from-blue-400 to-purple-500 shadow-2xl">
                <AvatarImage
                  src="/images/profile-pic.png"
                  alt="Arshpreet Singh"
                  className="object-contain object-bottom"
                />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-white">
                  AS
                </AvatarFallback>
              </Avatar>
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-6xl leading-[1.2] md:text-8xl md:leading-[1.2] font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Arshpreet Singh
          </motion.h1>
          <motion.h2
            className="text-2xl md:text-4xl text-foreground/90 mb-8 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Senior Software Engineer
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            6+ years of MEAN/MERN stack expertise, crafting scalable web
            applications and delivering innovative solutions that bridge
            technology and user experience.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.a
            href="mailto:arshpreet.singh.dhiman@gmail.com"
            className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-6 py-3 rounded-full text-foreground border border-border/50 hover:bg-background/30 hover:border-border transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Mail size={20} />
            Contact Me
          </motion.a>
          <motion.a
            href="tel:+919815235494"
            className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-6 py-3 rounded-full text-foreground border border-border/50 hover:bg-background/30 hover:border-border transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <Phone size={20} />
            +91 9815235494
          </motion.a>
          <motion.div
            className="flex items-center gap-2 bg-background/20 backdrop-blur-sm px-6 py-3 rounded-full text-foreground border border-border/50 shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <MapPin size={20} />
            Punjab, India
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.a
            href="https://github.com/arshdhiman"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-background/20 backdrop-blur-sm rounded-full text-foreground border border-border/50 hover:bg-background/30 hover:border-border transition-all shadow-lg hover:shadow-x"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/arshpreet98152"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-background/20 backdrop-blur-sm rounded-full text-foreground border border-border/50 hover:bg-background/30 hover:border-border transition-all shadow-lg hover:shadow-xl"
            style={{ animationDelay: "0.2s" }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="/Arshpreet_singh_full_stach_resume.pdf"
            download="Arshpreet_Singh_Dhiman_Resume.pdf"
            className="p-4 bg-primary/20 backdrop-blur-sm rounded-full text-primary border border-primary/30 hover:bg-primary/30 hover:border-primary/50 transition-all shadow-lg hover:shadow-xl"
            style={{ animationDelay: "0.4s" }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Download size={24} />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          onClick={() => scrollToSection("about")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            whileHover={{ scale: 1.2 }}
            className="p-2 rounded-full bg-background/20 backdrop-blur-sm border border-border/50"
          >
            <ChevronDown size={32} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
