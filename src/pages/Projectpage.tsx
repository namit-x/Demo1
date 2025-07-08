import { useState } from "react";
import { motion } from "framer-motion";
import { Grid, List, ArrowRight, MapPin, Calendar, Ruler } from "lucide-react";
import { allProjects } from "../data/homepageData";
import { staggerContainerVariants, staggerItemVariants } from "../utils/motionVariants";
import Navigation from "../components/Navigation";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = ["All", "Residential", "Commercial", "Interior", "Public", "Hospitality", "Educational"];

  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-charcoal-950 via-charcoal-900 to-charcoal-950 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1920&h=800&fit=crop"
            alt="Projects Background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/50 to-charcoal-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className="font-display text-6xl md:text-8xl font-light tracking-tight uppercase mb-6">
              Our <span className="text-gold-400">Projects</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl mx-auto text-balance">
              Explore our portfolio of architectural excellence, where each project tells a unique story of innovation, 
              sustainability, and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-6 lg:space-y-0">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 font-sans text-sm font-light tracking-wider uppercase transition-all duration-300 border backdrop-blur-sm ${
                    selectedCategory === category
                      ? "bg-gold-400 text-charcoal-950 border-gold-400"
                      : "border-white/20 text-white/70 hover:border-gold-400/40 hover:text-gold-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* View Controls */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 border border-white/20 rounded-sm overflow-hidden backdrop-blur-sm">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 transition-colors ${
                    viewMode === "grid" ? "bg-gold-400/20 text-gold-400" : "text-white/60 hover:text-gold-400"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 transition-colors ${
                    viewMode === "list" ? "bg-gold-400/20 text-gold-400" : "text-white/60 hover:text-gold-400"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
              <span className="font-sans text-sm text-white/60">
                {filteredProjects.length} Projects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid/List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          {viewMode === "grid" ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group"
                  variants={staggerItemVariants}
                >
                  <div className="relative overflow-hidden mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-6 left-6 right-6">
                        <button className="w-full px-6 py-3 border border-gold-400/30 font-sans text-sm font-light tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300 flex items-center justify-center backdrop-blur-sm">
                          View Details
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-charcoal-950/70 backdrop-blur-sm font-sans text-xs tracking-wider uppercase text-gold-400">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 backdrop-blur-sm font-sans text-xs tracking-wider uppercase ${
                        project.status === "Completed" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-gold-400/20 text-gold-400"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-display text-2xl font-light tracking-wide">{project.title}</h3>
                    <p className="text-white/60 font-serif text-sm leading-relaxed">{project.description}</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 text-white/50">
                        <MapPin className="w-4 h-4 text-gold-400" />
                        <span className="font-sans">{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/50">
                        <Calendar className="w-4 h-4 text-gold-400" />
                        <span className="font-sans">{project.year}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white/50 col-span-2">
                        <Ruler className="w-4 h-4 text-gold-400" />
                        <span className="font-sans">{project.area}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="space-y-8"
              variants={staggerContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="group grid md:grid-cols-5 gap-8 p-8 border border-white/10 hover:border-gold-400/30 transition-colors backdrop-blur-sm"
                  variants={staggerItemVariants}
                >
                  <div className="md:col-span-2">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 md:h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-charcoal-950/70 backdrop-blur-sm font-sans text-xs tracking-wider uppercase text-gold-400">
                          {project.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-3 space-y-6">
                    <div>
                      <h3 className="font-display text-3xl font-light tracking-wide mb-3">{project.title}</h3>
                      <p className="text-white/70 font-serif leading-relaxed">{project.description}</p>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <p className="text-white/40 font-sans text-xs tracking-wider uppercase mb-1">Location</p>
                        <p className="text-white/80 font-serif text-sm">{project.location}</p>
                      </div>
                      <div>
                        <p className="text-white/40 font-sans text-xs tracking-wider uppercase mb-1">Year</p>
                        <p className="text-white/80 font-serif text-sm">{project.year}</p>
                      </div>
                      <div>
                        <p className="text-white/40 font-sans text-xs tracking-wider uppercase mb-1">Area</p>
                        <p className="text-white/80 font-serif text-sm">{project.area}</p>
                      </div>
                      <div>
                        <p className="text-white/40 font-sans text-xs tracking-wider uppercase mb-1">Status</p>
                        <p className={`font-serif text-sm ${
                          project.status === "Completed" ? "text-green-400" : "text-gold-400"
                        }`}>{project.status}</p>
                      </div>
                    </div>
                    <button className="group px-8 py-3 border border-gold-400/30 font-sans text-sm font-light tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-300 flex items-center backdrop-blur-sm">
                      View Project Details
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-white/60 font-serif text-lg leading-relaxed mb-8 text-balance">
              Let's collaborate to bring your architectural vision to life with our expertise and passion for exceptional design.
            </p>
            <button className="group px-8 py-4 border border-gold-400/30 font-sans text-sm font-light tracking-wider uppercase hover:bg-gold-400 hover:text-charcoal-950 transition-all duration-500 flex items-center justify-center mx-auto backdrop-blur-sm">
              Get In Touch
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}