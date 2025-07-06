import { motion } from "framer-motion";
import { Building2, Award, Users, Calendar } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { staggerContainerVariants, staggerItemVariants } from "../../utils/motionVariants";
import { stats } from "../../data/homepageData";

const iconMap = {
  "building-2": Building2,
  "award": Award,
  "users": Users,
  "calendar": Calendar,
};

export default function StatsSection() {
  return (
    <ScrollReveal direction="up" distance={60} duration={1.0} threshold={0.2}>
      <section className="py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap];
              return (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={staggerItemVariants}
                >
                  <div className="w-16 h-16 border border-gold-400/30 rounded-sm mx-auto mb-4 flex items-center justify-center group-hover:border-gold-400/50 transition-colors duration-300 backdrop-blur-sm">
                    <IconComponent className="w-8 h-8 text-gold-400" strokeWidth={1.2} />
                  </div>
                  <div className="font-display text-3xl md:text-4xl font-light text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-white/70 font-sans text-sm tracking-wider uppercase">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </ScrollReveal>
  );
}