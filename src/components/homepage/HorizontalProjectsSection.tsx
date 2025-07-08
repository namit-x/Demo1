import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/homepageData";

export default function HorizontalProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (

    <section className="py-32 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-16">
          <div>
            <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-4">Recent Work</h3>
            <p className="text-white/60 font-serif text-lg max-w-2xl text-balance">
              Our latest projects showcase our commitment to innovative design and exceptional craftsmanship.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => scrollProjects("left")}
              className="p-3 border border-gold-400/20 hover:border-gold-400/40 hover:bg-gold-400/10 transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5 text-gold-400" />
            </button>
            <button
              onClick={() => scrollProjects("right")}
              className="p-3 border border-gold-400/20 hover:border-gold-400/40 hover:bg-gold-400/10 transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5 text-gold-400" />
            </button>
          </div>
        </div>



        <div ref={scrollRef} className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="flex-none w-80 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative overflow-hidden mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-charcoal-950/70 backdrop-blur-sm font-sans text-xs tracking-wider uppercase text-gold-400">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="px-3 py-1 bg-charcoal-950/70 backdrop-blur-sm font-sans text-xs tracking-wider text-white/80">
                    {project.year}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                <h4 className="font-display text-xl font-light tracking-wide">{project.title}</h4>
                <p className="text-white/60 font-serif text-sm">{project.description}</p>
                <p className="text-gold-400/80 font-sans text-sm font-light">{project.area}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

  );
}