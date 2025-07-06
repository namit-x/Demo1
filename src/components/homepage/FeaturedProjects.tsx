import { motion } from "framer-motion";
import ScrollReveal from "../ScrollReveal";
import { staggerContainerVariants, staggerItemVariants } from "../../utils/motionVariants";

export default function FeaturedProjectsSection() {
  return (
    <ScrollReveal direction="up" distance={60} duration={1.0} threshold={0.2}>
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal direction="fade" delay={200}>
            <div className="text-center mb-20">
              <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
                Featured Projects
              </h3>
              <p className="text-white/60 font-serif text-lg max-w-3xl mx-auto mb-8 text-balance">
                Discover our latest architectural achievements that showcase innovation, sustainability, and timeless design principles.
              </p>
              <div className="w-24 h-px bg-gold-400/30 mx-auto"></div>
            </div>
          </ScrollReveal>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="md:col-span-2 md:row-span-2 group relative overflow-hidden"
              variants={staggerItemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop"
                alt="Featured Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gold-400/20 text-gold-400 font-sans text-xs tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      Residential
                    </span>
                  </div>
                  <h4 className="font-display text-2xl font-light mb-2">Modern Villa Complex</h4>
                  <p className="text-white/80 font-serif mb-4">Contemporary family home with sustainable design and panoramic views</p>
                  <div className="flex items-center space-x-4 font-sans text-sm text-white/60">
                    <span>2024</span>
                    <span>•</span>
                    <span>3,200 sq ft</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative overflow-hidden"
              variants={staggerItemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop"
                alt="Urban Loft"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-gold-400/20 text-gold-400 font-sans text-xs tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      Interior
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-light mb-1">Urban Loft</h4>
                  <p className="text-white/80 font-serif text-sm mb-2">Industrial-style converted warehouse</p>
                  <p className="text-white/60 font-sans text-xs">2024 • 1,800 sq ft</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="group relative overflow-hidden"
              variants={staggerItemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
                alt="Corporate HQ"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-gold-400/20 text-gold-400 font-sans text-xs tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      Commercial
                    </span>
                  </div>
                  <h4 className="font-display text-lg font-light mb-1">Corporate HQ</h4>
                  <p className="text-white/80 font-serif text-sm mb-2">25-story office building</p>
                  <p className="text-white/60 font-sans text-xs">2024 • 150,000 sq ft</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-2 group relative overflow-hidden"
              variants={staggerItemVariants}
            >
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=400&fit=crop"
                alt="Cultural Center"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8">
                  <div className="mb-4">
                    <span className="px-3 py-1 bg-gold-400/20 text-gold-400 font-sans text-xs tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      Public
                    </span>
                  </div>
                  <h4 className="font-display text-xl font-light mb-2">Cultural Center</h4>
                  <p className="text-white/80 font-serif mb-4">Multi-purpose community arts facility with flexible spaces</p>
                  <div className="flex items-center space-x-4 font-sans text-sm text-white/60">
                    <span>2023</span>
                    <span>•</span>
                    <span>12,000 sq ft</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}