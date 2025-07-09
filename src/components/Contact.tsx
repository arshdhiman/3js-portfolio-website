
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "arshpreet.singh.dhiman@gmail.com",
      href: "mailto:arshpreet.singh.dhiman@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 9815235494",
      href: "tel:+919815235494"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Vill. Ratolan, Sangrur, Punjab, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent mb-6">
            Let's Connect
          </h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto font-medium">
            Ready to bring your next project to life? Let's discuss how we can work together.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you're looking for a full-stack developer or need consultation 
                on your next web application, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex items-center gap-4 bg-card/90 backdrop-blur-sm p-6 rounded-2xl border border-border hover:bg-card hover:border-border/80 hover:shadow-xl transition-all  animate-bounce-slow"
                >
                  <div className="text-primary flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="text-foreground font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-card/90 backdrop-blur-sm p-8 rounded-2xl border border-border hover:bg-card hover:shadow-xl transition-all "
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Name
                  </label>
                  <Input 
                    type="text" 
                    placeholder="Your name"
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary hover:border-border/80 transition-all "
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary hover:border-border/80 transition-all "
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Subject
                </label>
                <Input 
                  type="text" 
                  placeholder="Project discussion"
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary hover:border-border/80 transition-all "
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground/80 mb-2">
                  Message
                </label>
                <Textarea 
                  placeholder="Tell me about your project..."
                  rows={6}
                  className="bg-background/50 border-border text-foreground placeholder:text-muted-foreground focus:border-primary hover:border-border/80 resize-none transition-all "
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium py-3 rounded-lg transition-all "
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-border"
        >
          <p className="text-muted-foreground">
            © 2024 Arshpreet Singh. Built with React, Three.js, and lots of ☕
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
