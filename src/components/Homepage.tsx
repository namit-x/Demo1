import { useState, useEffect, useRef } from "react"
import { Building2, Phone, Mail, MapPin, ArrowRight, Quote, ChevronLeft, ChevronRight } from "lucide-react"

export default function Homepage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  const testimonials = [
    {
      quote:
        "RK Home Design transformed our vision into a masterpiece. Their attention to detail and innovative approach exceeded all expectations.",
      author: "Sarah Mitchell",
      role: "Homeowner",
      project: "Modern Villa, Beverly Hills",
    },
    {
      quote:
        "Working with RK was an exceptional experience. They understood our brand and created a space that perfectly reflects our company values.",
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Enhanced Header */}
      <header className="border-b border-white/10 relative z-50 bg-black/90 backdrop-blur-sm fixed w-full top-0">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-2 border border-white/20 rounded-sm">
                <Building2 className="w-6 h-6 text-white" strokeWidth={1} />
              </div>
              <div>
                <h1 className="text-xl font-light tracking-[0.2em] uppercase font-cormorant">RK Home Design</h1>
                <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase font-inter">Architects</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              {["Projects", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm font-light tracking-wider uppercase hover:text-white/80 transition-colors relative group font-inter"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
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
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight leading-none font-playfair">
              DESIGNING
              <br />
              <span className="text-white/60">SPACES</span>
              <br />
              THAT INSPIRE
            </h2>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed mb-12 max-w-3xl font-inter">
              We create architectural solutions that blend functionality with aesthetic excellence, transforming visions
              into remarkable living spaces that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="group px-8 py-4 border border-white/30 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center font-inter">
                View Projects
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 text-sm font-light tracking-wider uppercase text-white/70 hover:text-white transition-colors font-inter">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced corner elements */}
        <div className="absolute top-24 left-8 w-20 h-20 border-l-2 border-t-2 border-white/20"></div>
        <div className="absolute top-24 right-8 w-20 h-20 border-r-2 border-t-2 border-white/20"></div>
        <div className="absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-white/20"></div>
        <div className="absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-white/20"></div>
      </section>

      {/* Photo Grid Section */}
      <section className="py-32 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6 font-cormorant">
              Featured Projects
            </h3>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          {/* Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[800px]">
            <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=800&fit=crop"
                alt="Featured Project"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8">
                  <h4 className="text-2xl font-light mb-2 font-cormorant">Modern Villa Complex</h4>
                  <p className="text-white/80 font-inter">Residential • 2024</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop"
                alt="Project 2"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <h4 className="text-lg font-light mb-1 font-cormorant">Urban Loft</h4>
                  <p className="text-white/80 text-sm font-inter">Interior • 2024</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=400&fit=crop"
                alt="Project 3"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-6">
                  <h4 className="text-lg font-light mb-1 font-cormorant">Corporate HQ</h4>
                  <p className="text-white/80 text-sm font-inter">Commercial • 2023</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 group relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800&h=400&fit=crop"
                alt="Project 4"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                <div className="p-8">
                  <h4 className="text-xl font-light mb-2 font-cormorant">Cultural Center</h4>
                  <p className="text-white/80 font-inter">Public Architecture • 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Projects Section */}
      <section className="py-32 border-t border-white/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-16">
            <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase font-cormorant">Recent Work</h3>
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

          <div ref={scrollRef} className="flex space-x-8 overflow-x-auto scrollbar-hide pb-4">
            {projects.map((project) => (
              <div key={project.id} className="flex-none w-80 group">
                <div className="relative overflow-hidden mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-sm text-xs tracking-wider uppercase font-inter">
                      {project.category}
                    </span>
                  </div>
                </div>
                <h4 className="text-xl font-light tracking-wide font-cormorant">{project.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
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
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6 font-cormorant">
              Our Expertise
            </h3>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
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
              <div key={index} className="text-center group">
                <div className="w-20 h-20 border border-white/20 rounded-sm mx-auto mb-8 flex items-center justify-center group-hover:border-white/40 transition-colors duration-500">
                  <Building2 className="w-10 h-10 text-white" strokeWidth={1} />
                </div>
                <h4 className="text-2xl font-light tracking-wider uppercase mb-6 font-cormorant">{service.title}</h4>
                <p className="text-white/70 font-light leading-relaxed mb-6 font-inter">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-white/60 text-sm tracking-wide font-inter">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
          <div className="text-center mb-20">
            <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-6 font-cormorant">
              Client Stories
            </h3>
            <div className="w-24 h-px bg-white/30 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="text-center">
              <Quote className="w-12 h-12 text-white/30 mx-auto mb-8" />
              <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white/90 font-cormorant">
                "{testimonials[currentTestimonial].quote}"
              </blockquote>
              <div className="space-y-2">
                <p className="text-lg font-light tracking-wide font-inter">{testimonials[currentTestimonial].author}</p>
                <p className="text-white/60 text-sm tracking-wider uppercase font-inter">
                  {testimonials[currentTestimonial].role}
                </p>
                <p className="text-white/40 text-xs tracking-wider font-inter">
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
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-32 border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="text-4xl md:text-5xl font-light tracking-[0.2em] uppercase mb-12 font-cormorant">
                Start Your Project
              </h3>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider uppercase mb-1 font-inter">Phone</p>
                    <span className="font-light text-lg font-inter">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider uppercase mb-1 font-inter">Email</p>
                    <span className="font-light text-lg font-inter">info@rkhomedesign.com</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 border border-white/20 rounded-sm flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white/60" strokeWidth={1} />
                  </div>
                  <div>
                    <p className="text-white/40 text-sm tracking-wider uppercase mb-1 font-inter">Studio</p>
                    <span className="font-light text-lg font-inter">123 Design Street, Architecture City</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors font-inter"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors font-inter"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors font-inter"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Project Type"
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors font-inter"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder-white/40 focus:border-white/60 focus:outline-none transition-colors resize-none font-inter"
                  ></textarea>
                </div>
                <button className="group px-8 py-4 border border-white/30 text-sm font-light tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-500 flex items-center font-inter">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="border-t border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-2 border border-white/20 rounded-sm">
                  <Building2 className="w-6 h-6 text-white" strokeWidth={1} />
                </div>
                <div>
                  <h4 className="text-lg font-light tracking-[0.2em] uppercase font-cormorant">RK Home Design</h4>
                  <p className="text-white/60 text-xs font-light tracking-[0.3em] uppercase font-inter">Architects</p>
                </div>
              </div>
              <p className="text-white/60 font-light leading-relaxed max-w-md font-inter">
                Creating architectural solutions that blend functionality with aesthetic excellence, transforming
                visions into remarkable living spaces.
              </p>
            </div>

            <div>
              <h5 className="text-sm font-light tracking-wider uppercase mb-6 font-inter">Services</h5>
              <ul className="space-y-3">
                {["Residential Design", "Commercial Spaces", "Interior Planning", "Consultation"].map((service) => (
                  <li key={service}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-inter">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-sm font-light tracking-wider uppercase mb-6 font-inter">Connect</h5>
              <ul className="space-y-3">
                {["Instagram", "LinkedIn", "Behance", "Pinterest"].map((social) => (
                  <li key={social}>
                    <a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-inter">
                      {social}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="text-center">
              <p className="text-white/40 text-sm font-light tracking-wider font-inter">
                © 2025 RK Home Design Architects. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}