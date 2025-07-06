import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import type { Variants } from "framer-motion";
import { Building2, Phone, Mail, MapPin, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import ScrollReveal from "./ScrollReveal"

interface HomepageProps {
  isVisible?: boolean
}

export default function Homepage({ isVisible = true }: HomepageProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      quote:
        "Line Architects transformed our vision into a masterpiece. Their attention to detail and innovative approach exceeded all expectations.",
      author: "Sarah Mitchell",
      role: "Homeowner",
      project: "Modern Villa, Beverly Hills",
    },
    {
      quote:
        "Working with Line Architects was an exceptional experience. They understood our brand and created a space that perfectly reflects our company values.",
      author: "David Chen",
      role: "CEO, Tech Innovations",
      project: "Corporate Headquarters",
    },
    {
      quote:
        "The team's ability to blend functionality with aesthetic excellence is unmatched. Our restaurant has become a destination in itself.",
      author: "Maria Rodriguez",
      role: "Restaurant Owner",
      project: "Culinary Arts Restaurant",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Modern Residence",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
    },
    {
      id: 2,
      title: "Corporate Tower",
      category: "Commercial",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    },
    {
      id: 3,
      title: "Luxury Villa",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
    },
    {
      id: 4,
      title: "Cultural Center",
      category: "Public",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=600&fit=crop",
    },
    {
      id: 5,
      title: "Boutique Hotel",
      category: "Hospitality",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
    },
    {
      id: 6,
      title: "Urban Loft",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const scrollProjects = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 400
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const pageVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 1.02,
      filter: "blur(8px)",
      transition: {
        duration: 0.6,
        ease: [0.23, 0, 0.32, 0]
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.5,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.98,
      filter: "blur(8px)",
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };

  const sectionVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      transition: {
        duration: 0.5,
        ease: "easeIn"
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  };

  const staggerContainerVariants: Variants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const staggerItemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  return (
    <motion.div
      className="w-full bg-black text-white"
      variants={pageVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* Enhanced Header with scroll reveal */}
      <motion.header
        className="border-b border-white/10 relative z-50 bg-black/90 backdrop-blur-sm fixed w-full top-0"
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 border border-white/20 rounded-sm">
                <Building2 className="w-6 h-6 text-white" strokeWidth={1} />
              </div>
              <div>
                <h1 className="text-xl font-light tracking-[0.2em] uppercase">Line-Ar-chitects</h1>
                <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase">Inspire</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-light tracking-wider uppercase hover:text-white/80 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Enhanced Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
        variants={sectionVariants}
      >
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&h=1080&fit=crop"
            alt="Architectural Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.h2
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none"
              variants={sectionVariants}
            >
              DESIGNING
              <br />
              <span className="text-white/60">SPACES</span>
              <br />
              THAT INSPIRE
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-3xl"
              variants={sectionVariants}
            >
              We create architectural solutions that blend functionality with aesthetic excellence, transforming visions
              into remarkable living spaces that stand the test of time.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
              variants={sectionVariants}
            >
              <button className="group px-8 py-4 border border-white/30 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-sm font-light tracking-wider uppercase text-white/70 hover:text-white transition-colors">
                Learn More
              </button>
            </motion.div>
          </div>
        </div>

        {/* Enhanced corner elements */}
        <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20"></div>
        <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20"></div>
      </motion.section>

      {/* Photo Grid Section with Advanced Scroll Animations */}
      <ScrollReveal direction="up" distance={60} duration={1.0} threshold={0.2}>
        <section className="py-32 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal direction="fade" delay={200}>
              <div className="text-center mb-20">
                <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6">
                  Featured Projects
                </h3>
                <div className="w-24 h-px bg-white/30 mx-auto"></div>
              </div>
            </ScrollReveal>

            {/* Asymmetrical Grid with Staggered Animations */}
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
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8">
                    <h4 className="text-2xl font-light mb-2">Modern Villa Complex</h4>
                    <p className="text-white/80">Residential • 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group relative overflow-hidden"
                variants={staggerItemVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop"
                  alt="Project 2"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6">
                    <h4 className="text-lg font-light mb-1">Urban Loft</h4>
                    <p className="text-white/80 text-sm">Interior • 2024</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="group relative overflow-hidden"
                variants={staggerItemVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
                  alt="Project 3"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-6">
                    <h4 className="text-lg font-light mb-1">Corporate HQ</h4>
                    <p className="text-white/80 text-sm">Commercial • 2023</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="md:col-span-2 group relative overflow-hidden"
                variants={staggerItemVariants}
              >
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=400&fit=crop"
                  alt="Project 4"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <div className="p-8">
                    <h4 className="text-xl font-light mb-2">Cultural Center</h4>
                    <p className="text-white/80">Public Architecture • 2023</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Horizontal Scrolling Projects Section with Left Slide Animation */}
      <ScrollReveal direction="left" distance={80} duration={1.2} threshold={0.15}>
        <section className="py-32 border-t border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <ScrollReveal direction="right" distance={60} delay={300}>
              <div className="flex justify-between items-center mb-16">
                <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase">Recent Work</h3>
                <div className="flex space-x-4">
                  <button
                    onClick={() => scrollProjects("left")}
                    className="p-3 border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollProjects("right")}
                    className="p-3 border border-white/20 hover:border-white/40 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={40} delay={500} staggerChildren={0.1}>
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
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs tracking-wider uppercase">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <h4 className="text-xl font-light tracking-wide">{project.title}</h4>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Enhanced Services Section with Scale Animation */}
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
                <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6">
                  Our Expertise
                </h3>
                <div className="w-24 h-px bg-white/30 mx-auto"></div>
              </div>
            </ScrollReveal>

            <motion.div 
              className="grid md:grid-cols-3 gap-16"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {[
                {
                  title: "Residential Design",
                  description:
                    "Custom home designs that reflect your lifestyle and aesthetic preferences, creating spaces that inspire daily living.",
                  features: ["Custom Architecture", "Interior Planning", "Landscape Integration"],
                },
                {
                  title: "Commercial Spaces",
                  description:
                    "Innovative commercial architecture that enhances business environments and drives success through thoughtful design.",
                  features: ["Office Design", "Retail Spaces", "Hospitality"],
                },
                {
                  title: "Interior Planning",
                  description:
                    "Comprehensive interior design solutions for optimal space utilization, combining functionality with aesthetic excellence.",
                  features: ["Space Planning", "Material Selection", "Lighting Design"],
                },
              ].map((service, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={staggerItemVariants}
                >
                  <div className="w-20 h-20 border border-white/20 rounded-sm mx-auto mb-8 flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                    <Building2 className="w-10 h-10 text-white" strokeWidth={1} />
                  </div>
                  <h4 className="text-2xl font-light tracking-wider uppercase mb-6">{service.title}</h4>
                  <p className="text-white/70 font-light leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-white/60 text-sm tracking-wide">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Testimonials Section with Fade Animation */}
      <ScrollReveal direction="fade" duration={1.2} threshold={0.3}>
        <section className="py-32 border-t border-white/10 relative">
          <div className="absolute inset-0 opacity-[0.03]">
            <img
              src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop"
              alt="Testimonials Background"
              className="w-full h-full object-cover"
              style={{ filter: "invert(1) contrast(2)" }}
            />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <ScrollReveal direction="down" distance={40} delay={300}>
              <div className="text-center mb-20">
                <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6">
                  Client Stories
                </h3>
                <div className="w-24 h-px bg-white/30 mx-auto"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={50} delay={600}>
              <div className="relative">
                <div className="text-center">
                  <Quote className="w-12 h-12 text-white/30 mx-auto mb-8" />
                  <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white/90">
                    "{testimonials[currentTestimonial].quote}"
                  </blockquote>
                  <div className="space-y-2">
                    <p className="text-lg font-light tracking-wide">{testimonials[currentTestimonial].author}</p>
                    <p className="text-white/60 text-sm tracking-wider uppercase">
                      {testimonials[currentTestimonial].role}
                    </p>
                    <p className="text-white/40 text-xs tracking-wider">
                      {testimonials[currentTestimonial].project}
                    </p>
                  </div>
                </div>

                {/* Testimonial indicators */}
                <div className="flex justify-center space-x-2 mt-12">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentTestimonial ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </ScrollReveal>

      {/* Enhanced Contact Section with Right Slide Animation */}
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
                <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-12">
                  Start Your Project
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white/60" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm tracking-wider uppercase mb-1">Phone</p>
                      <span className="font-light text-lg">+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white/60" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm tracking-wider uppercase mb-1">Email</p>
                      <span className="font-light text-lg">info@rkhomedesign.com</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white/60" strokeWidth={1} />
                    </div>
                    <div>
                      <p className="text-white/40 text-sm tracking-wider uppercase mb-1">Studio</p>
                      <span className="font-light text-lg">123 Design Street, Architecture City</span>
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
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Project Type"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button className="group px-8 py-4 border border-white/30 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center">
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Enhanced Footer with Up Animation */}
      <ScrollReveal direction="up" distance={40} duration={0.8} threshold={0.5}>
        <footer className="border-t border-white/10 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="grid md:grid-cols-4 gap-12 mb-12"
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="md:col-span-2" variants={staggerItemVariants}>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-2 border border-white/20 rounded-sm">
                    <Building2 className="w-6 h-6 text-white" strokeWidth={1} />
                  </div>
                  <div>
                    <h4 className="text-lg font-light tracking-[0.2em] uppercase">Line-Ar-chitects</h4>
                    <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase">Inspire</p>
                  </div>
                </div>
                <p className="text-white/60 font-light leading-relaxed max-w-md">
                  Creating architectural solutions that blend functionality with aesthetic excellence, transforming
                  visions into remarkable living spaces.
                </p>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <h5 className="text-sm font-light tracking-wider uppercase mb-6">Services</h5>
                <ul className="space-y-3">
                  {["Residential Design", "Commercial Spaces", "Interior Planning", "Consultation"].map((service) => (
                    <li key={service}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={staggerItemVariants}>
                <h5 className="text-sm font-light tracking-wider uppercase mb-6">Connect</h5>
                <ul className="space-y-3">
                  {["Instagram", "LinkedIn", "Behance", "Pinterest"].map((social) => (
                    <li key={social}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                        {social}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            <ScrollReveal direction="fade" delay={400}>
              <div className="border-t border-white/10 pt-8">
                <div className="text-center">
                  <p className="text-white/40 text-sm font-light tracking-wider">
                    © 2025 Line Architects. All rights reserved.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </footer>
      </ScrollReveal>
    </motion.div>
  )
}
