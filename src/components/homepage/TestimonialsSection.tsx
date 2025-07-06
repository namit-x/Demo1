import { useState, useEffect } from "react";
import { Quote, Star } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { testimonials } from "../../data/homepageData";

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
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
              <h3 className="font-display text-4xl md:text-5xl font-light tracking-wide uppercase mb-6">
                Client Stories
              </h3>
              <p className="text-white/60 font-serif text-lg max-w-2xl mx-auto mb-8 text-balance">
                Hear from our satisfied clients who have experienced the Studio65 difference in their projects.
              </p>
              <div className="w-24 h-px bg-gold-400/30 mx-auto"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={50} delay={600}>
            <div className="relative">
              <div className="text-center">
                <Quote className="w-12 h-12 text-gold-400/40 mx-auto mb-8" />
                <blockquote className="font-serif text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white/90 text-balance">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                <div className="space-y-4">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-display text-lg font-light tracking-wide">{testimonials[currentTestimonial].author}</p>
                  <p className="text-white/60 font-sans text-sm tracking-wider uppercase">
                    {testimonials[currentTestimonial].role}
                  </p>
                  <p className="text-gold-400/60 font-sans text-sm tracking-wider">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </div>

              <div className="flex justify-center space-x-2 mt-12">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? "bg-gold-400 scale-110" 
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </ScrollReveal>
  );
}