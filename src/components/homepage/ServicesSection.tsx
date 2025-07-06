import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { staggerContainerVariants, staggerItemVariants } from "../../utils/motionVariants";
import { services } from "../../data/homepageData";

export default function ServicesSection() {
  return (
    <ScrollReveal direction="scale" duration={1.0} threshold={0.2}>
      <section className="py-32 border-t border-white/10 relative">
        <div className="absolute inset-0 opacity-[0.02]">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop"
            alt="Services Background"
            className="w-full h-full object-cover"
            style={{ filter: "invert(1) contrast(1.5)" }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <ScrollReveal direction="fade" delay={200}>
            <div className="text-center mb-20">
              <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
                Our Expertise
              </h3>
              <p className="text-white/60 font-serif text-lg max-w-3xl mx-auto mb-8 text-balance">
                We offer comprehensive architectural services, from initial concept to final construction, 
                ensuring every project meets our highest standards of design and functionality.
              </p>
              <div className="w-24 h-px bg-gold-400/30 mx-auto"></div>
            </div>
          </ScrollReveal>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="group"
                variants={staggerItemVariants}
              >
                <div className="relative overflow-hidden mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 border border-gold-400/50 rounded-sm flex items-center justify-center bg-charcoal-950/30 backdrop-blur-sm">
                      <Building2 className="w-6 h-6 text-gold-400" strokeWidth={1.2} />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <h4 className="font-display text-2xl font-light tracking-wider uppercase">{service.title}</h4>
                  <p className="text-white/70 font-serif font-light leading-relaxed text-balance">{service.description}</p>
                  <div className="space-y-3">
                    <h5 className="text-gold-400/80 font-sans text-sm font-light tracking-wider uppercase">Key Services</h5>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-white/60 font-sans text-sm tracking-wide flex items-center">
                          <div className="w-1 h-1 bg-gold-400/60 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}