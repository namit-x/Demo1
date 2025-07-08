import { motion } from "framer-motion";
import { staggerContainerVariants, staggerItemVariants } from "../../utils/motionVariants";

export default function FeaturedProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Modern Villa Complex",
      description: "Contemporary family home with sustainable design and panoramic views",
      category: "Residential",
      year: "2024",
      size: "3,200 sq ft",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop",
      cols: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Urban Loft",
      description: "Industrial-style converted warehouse",
      category: "Interior",
      year: "2024",
      size: "1,800 sq ft",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop",
      cols: ""
    },
    {
      id: 3,
      title: "Corporate HQ",
      description: "25-story office building",
      category: "Commercial",
      year: "2024",
      size: "150,000 sq ft",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop",
      cols: ""
    },
    {
      id: 4,
      title: "Cultural Center",
      description: "Multi-purpose community arts facility with flexible spaces",
      category: "Public",
      year: "2023",
      size: "12,000 sq ft",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=400&fit=crop",
      cols: "md:col-span-2"
    }
  ];

  return (

    <section className="py-32 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col justify-center items-center text-center">
          <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
            Featured Projects
          </h3>
          <p className="text-white/60 font-serif text-lg max-w-3xl mx-auto mb-8 text-balance">
            Discover our latest architectural achievements that showcase innovation, sustainability, and timeless design principles.
          </p>
          <div className="w-24 h-px bg-gold-400/30 mx-auto"></div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]"
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className={`group relative overflow-hidden ${project.cols}`}
              variants={staggerItemVariants}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className={`p-${project.id === 1 || project.id === 4 ? '8' : '6'} w-full`}>
                  <div className={`mb-${project.id === 1 || project.id === 4 ? '4' : '3'}`}>
                    <span className="px-3 py-1 bg-gold-400/20 text-gold-400 font-sans text-xs tracking-wider uppercase rounded-sm backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <h4 className={`font-display ${project.id === 1 || project.id === 4 ? 'text-2xl' : 'text-lg'} font-light mb-${project.id === 1 || project.id === 4 ? '2' : '1'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-white/80 font-serif ${project.id === 1 || project.id === 4 ? 'mb-4' : 'text-sm mb-2'}`}>
                    {project.description}
                  </p>
                  <div className={`flex items-center space-x-4 font-sans ${project.id === 1 || project.id === 4 ? 'text-sm' : 'text-xs'} text-white/60`}>
                    <span>{project.year}</span>
                    <span>•</span>
                    <span>{project.size}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}