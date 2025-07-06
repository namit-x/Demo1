import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { staggerContainerVariants, staggerItemVariants } from "../../utils/motionVariants";

export default function ContactSection() {
  return (
    <ScrollReveal direction="right" distance={70} duration={1.0} threshold={0.2}>
      <section className="py-32 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div 
            className="grid md:grid-cols-2 gap-20"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={staggerItemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
                    Start Your Project
                  </h3>
                  <p className="text-white/60 font-serif text-lg leading-relaxed mb-8 text-balance">
                    Ready to transform your vision into reality? Get in touch with our team to discuss your next architectural project.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-gold-400/30 rounded-sm flex items-center justify-center bg-gold-400/5 backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-gold-400" strokeWidth={1.2} />
                    </div>
                    <div>
                      <p className="text-white/40 font-sans text-sm tracking-wider uppercase mb-1">Phone</p>
                      <span className="font-serif font-light text-lg">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-gold-400/30 rounded-sm flex items-center justify-center bg-gold-400/5 backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-gold-400" strokeWidth={1.2} />
                    </div>
                    <div>
                      <p className="text-white/40 font-sans text-sm tracking-wider uppercase mb-1">Email</p>
                      <span className="font-serif font-light text-lg">contact@studio65.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-gold-400/30 rounded-sm flex items-center justify-center bg-gold-400/5 backdrop-blur-sm">
                      <MapPin className="w-5 h-5 text-gold-400" strokeWidth={1.2} />
                    </div>
                    <div>
                      <p className="text-white/40 font-sans text-sm tracking-wider uppercase mb-1">Studio</p>
                      <span className="font-serif font-light text-lg">123 Design Street, Architecture City</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants}>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-gold-400/60 focus:outline-none transition-colors font-sans"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-gold-400/60 focus:outline-none transition-colors font-sans"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-gold-400/60 focus:outline-none transition-colors font-sans"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Project Type"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-gold-400/60 focus:outline-none transition-colors font-sans"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-gold-400/60 focus:outline-none transition-colors resize-none font-sans"
                  ></textarea>
                </div>
                <button className="group px-8 py-4 border border-gold-400/30 font-sans text-sm font-light tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-500 flex items-center backdrop-blur-sm">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}